class Api::V1::BidsController < Api::ApplicationController
      before_action :authenticate_user!, only: [:create]

      rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

      def create
            auction = Bid.new bid_params
            bid.user = current_user
    
            bid.save!
            render json: {id: bid.id}
      end


      private
    
      def bid_params
            params.require(:bid).permit(:price)
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
