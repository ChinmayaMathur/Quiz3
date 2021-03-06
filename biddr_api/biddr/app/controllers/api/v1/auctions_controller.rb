class Api::V1::AuctionsController < Api::ApplicationController
      before_action :find_auction, only: [:show]
      before_action :authenticate_user!, only: [:create]

      rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

      def index
            auctions = Auction.order(created_at: :desc)
            render(json: auctions, each_serializer: AuctionCollectionSerializer)
      end
    
      def show
            if @auction
                render(json: @auction)
            else
                render(json: {error: "Auction Not Found"})
            end
      end
    
      def create
            auction = Auction.new auction_params
            auction.user = current_user
    
            auction.save!
            render json: {id: auction.id}
      end


      private

      def find_auction
            @auction = Auction.find params[:id]
      end
    
      def auction_params
            params.require(:auction).permit(:title, :details, :end_date, :reserve_price)
      end
    
      def record_invalid(error)
            invalid_record = error.record
            errors = invalid_record.errors.map do |field, message|
                {
                    type: error.class.to_s, # need it in string format
                    record_type: invalid_record.class.to_s,
                    field: field,
                    message: message
                }
            end
            render(
                json: {status: 422, errors: errors },
                status: 422 # alias is :unprocessable_entity
            )
      end
    
end
