class RemoveUsernameIndexAddEmailIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :email_address
  end
end
