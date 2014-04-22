class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.text :content
      t.float :lattitude
      t.float :longitude
      t.decimal :polarity

      t.timestamps
    end
  end
end
