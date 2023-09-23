class Message < ApplicationRecord
  belongs_to :room, inverse_of: :message

  after_create_commit { broadcast_message }

  private

  def broadcast_message
    ActionCable.server.broadcast("MessageChannel", {
                                  id:,
                                  room:,
                                  sender:,
                                  body: 
    })
  end
end
