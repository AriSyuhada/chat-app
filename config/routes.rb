Rails.application.routes.draw do
  # action cable server
  mount ActionCable.server => "/cable"

  resources :messages
  resources :rooms

  get '/room/:room_id/messages', to: 'messages#byRoom', as: 'messages_by_room'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
