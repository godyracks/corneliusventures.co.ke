# CVK Ltd Project Management Dashboard

This project is a Vue.js application using Vuetify to create a project management dashboard. It allows users to manage construction projects, upload project details, and images, which are stored in a MySQL database through an Express.js backend.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Upload project details including title, description, start date, complete date, and status.
- Upload project images.
- Display projects in a portfolio.
- Responsive design using Vuetify.
- Backend API for managing projects with MySQL database.

## Installation

### Prerequisites
- Node.js and npm
- MySQL
- Git

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

2. Navigate to the server directory:
    ```sh
    cd server
    ```

3. Install server dependencies:
    ```sh
    npm install
    ```

4. Set up your MySQL database and update the `config/db.js` file with your database credentials.

5. Create a `.env` file in the server directory and add the following:
    ```env
    PORT=5000
    DB_HOST=localhost
    DB_USER=yourusername
    DB_PASSWORD=yourpassword
    DB_NAME=yourdatabase
    ```

6. Start the server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the client directory:
    ```sh
    cd client/cvkltd
    ```

2. Install client dependencies:
    ```sh
    npm install
    ```

3. Install Vuetify:
    ```sh
    npm install vuetify@next
    ```

4. Add Vuetify to your `main.js` file:
    ```js
    import { createApp } from 'vue';
    import { createPinia } from 'pinia';
    import App from './App.vue';
    import router from './router';
    import vuetify from './plugins/vuetify'; // Add this line

    const app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(vuetify); // Add this line

    app.mount('#app');
    ```

5. Start the client:
    ```sh
    npm run dev
    ```

## Usage
To use the application, navigate to `http://localhost:5175/` in your browser. You will see the dashboard where you can upload projects by filling in the form fields and submitting them.

## Project Structure
project-root/
│
├── client/          # Vue.js frontend application
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── views/
│       ├── App.vue
│       └── main.js
│
└── server/          # Node.js Express backend
    ├── controllers/
    ├── middleware/
    ├── routes/
    ├── config/
    ├── models/
    ├── app.js
    └── server.js


## API Endpoints
### Get All Portfolios
- **URL**: `/api/portfolio`
- **Method**: `GET`
- **Response**: JSON array of all projects.

### Create a New Portfolio
- **URL**: `/api/portfolio`
- **Method**: `POST`
- **Request Body**: 
    ```json
    {
      "title": "Project Title",
      "description": "Project Description",
      "imageUrl": "path/to/image",
      "startDate": "2023-01-01",
      "completeDate": "2023-12-31",
      "status": "In Progress"
    }
    ```
- **Response**: JSON object of the created project.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
