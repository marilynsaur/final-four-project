class CreateHomemades < ActiveRecord::Migration[6.1]
  def change
    create_table :homemades do |t|
      t.string :title
      t.string :materials
      t.string :difficulty
      t.string :image
      t.string :directions

      t.timestamps
    end
  end
end
