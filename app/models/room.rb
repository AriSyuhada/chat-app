class Room < ApplicationRecord
  after_create_commit { broadcast_room }
  
  has_many :message, dependent: :destroy,
                     inverse_of: :room

  private

  def broadcast_room
    ActionCable.server.broadcast("RoomChannel", {
      id:,
      name:
    })
  end
end
