# Project Name

Chat-App

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Client Side Docs](./client/README.md)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Ruby: 3.2.2
- Rails: ~> 7.0.8
- ReactJS: 18.2.0
- Database: SQLite3 ~> 1.4

## Getting Started

This project app is a real-time messaging platform that allows users to engage in text-based conversations. It's divided into two main components: a backend API built with Ruby on Rails and a frontend interface developed using React.js. The application uses WebSocket technology to enable real-time communication between users.

## Installation

Client side installation can follow these [README](./client/README.md)
Follow these steps to get Ruby on Rails service up and running:

1. Clone this repository:

    ```sh
    git clone https://github.com/AriSyuhada/chat-app
    ```

2. Change to the project directory:

    ```sh
    cd chat-app
    ```

3. install dependencies

    ```sh
    bundle install
    ```

4. Create the database:

    ```sh
    rails db:create
    ```

5. Run migrations:

    ```sh
    rails db:migrate
    ```

6. Run migrations:

    ```sh
    rails server
    ```

## Features

* Feature 1: Create and delete room for chat
* Feature 2: Send message with username
* Feature 3: Send message realtime with others on the same room

## Technologies Used
* Ruby on Rails: As server-side or backend service to serve API and cable connection for websocket
* ReactJS: As client-side or frontend service to consume API, User Interface, and features logic
* SQLite3: As database management system used for data storage
* WebSocket: As real-time communication protocol between backend service and frontend service
