class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :room, null: false, foreign_key: true
      t.string :sender
      t.text :body

      t.timestamps
    end
  end
end
