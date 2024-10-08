
<img width="1087" alt="Screenshot 2024-09-02 at 14 43 11" src="https://github.com/user-attachments/assets/eef93019-0897-494c-82ce-d9a6e53c43d0">

# Todo List Application

This project is a simple Todo List application that allows users to manage their tasks effectively. Users can add, edit, delete, and view tasks with deadlines using a web interface.

## Features

- Add new tasks with a deadline.
- Edit existing tasks.
- Delete tasks.
- View a list of all tasks.
- Tasks include a status update feature to track progress.

## Technologies

- **Frontend**: React.js, Bootstrap for styling.
- **Backend**: Node.js with Express.js framework.
- **Database**: MongoDB, managed via Mongoose ODM.
- **Others**: CORS for enabling cross-origin requests, dotenv for environment management.

## Setup

To get the application running locally, follow these steps:

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository to your local machine.
2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables in a `.env` file in the root directory. You will need to specify:

    - `PORT` — the port number the server listens on (default 3001).
    - `DB_USER` — MongoDB username.
    - `DB_PASSWORD` — MongoDB password.
    - `DB_HOST` — MongoDB host.

4. Start the server:

    ```bash
    npm start
    ```

5. Access the application through `http://localhost:3002` in your browser.

## API Endpoints

- `GET /getTodoList`: Fetches all the tasks.
- `POST /addTodoList`: Adds a new task.
- `POST /updateTodoList/:id`: Updates an existing task.
- `DELETE /deleteTodoList/:id`: Deletes a task.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
