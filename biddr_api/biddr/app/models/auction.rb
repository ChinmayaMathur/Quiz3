class Auction < ApplicationRecord
      before_save :capitalize_title
      has_many :bids, dependent: :destroy
      belongs_to :user, optional: true

      validates :title, presence: {message: "title must be provided"}
      
      validates :title, uniqueness: {scope: :details}
  
      validates :details, length: {minimum: 10, maximum: 500}

      validates :details, presence: {message: "detail must be provided"}

      validates :reserve_price, presence: {message: "reserve price must be provided"}

      validates :end_date, presence: {message: "end date must be provided"}



      private

      def capitalize_title
            self.title.capitalize!
      end
end
