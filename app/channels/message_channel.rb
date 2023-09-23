class MessageChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_from "MessageChannel"
    room_id = params['room_id']
    messages = Message.where(room_id: room_id)

    stream_from "MessageChannel"

    # stream_for "MessageChannel_#{room_id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
