class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.text :title
      t.text :details
      t.datetime :end_date
      t.integer :reserve_price

      t.timestamps
    end
  end
end
