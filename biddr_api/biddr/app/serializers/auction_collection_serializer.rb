class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id, 
    :title,
    :details,
    :created_at,
    :updated_at,
    :end_date,
    :reserve_price,
  )
end
