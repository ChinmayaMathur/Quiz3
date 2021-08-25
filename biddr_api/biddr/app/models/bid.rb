class Bid < ApplicationRecord
      belongs_to :auction
      belongs_to :user, optional: true

      validates :price, presence: {message: "price must be provided"}
end
