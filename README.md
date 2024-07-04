# CVK Ltd  Web App & Project Management Dashboard

This project is a Vue.js application, a dynamic web app and  a project management dashboard . It allows admins to manage construction projects, upload project details, and images, which are stored in a MySQL database through an Express.js backend. In the MySQL Workbench database, we store image paths & images are stored in uploads folder which is iniside the server folder.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Upload project details including title, description, start date, complete date, and status.
- Upload project images.
- Display projects in a portfolio, frontend.
- Responsive design using Vuetify.
- Backend API for managing projects with MySQL database.

## Installation

### Prerequisites
- Node.js and npm
- MySQL Workbench
-Internet connection
- Git

# cvkltd

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE  & Frontend Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
## Project Structure
  ```sh
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
    ├── .env
    └── server.js
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/godyracks/corneliusventures.co.ke.git
    cd projectfolder
    ```

2. Navigate to the server directory:
    ```sh
    cd server
    ```

3. Install server dependencies:
    ```sh
    npm install
    ```

4. Set up your MySQL Workbench database and update the `config/db.js` file with your database credentials.

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
    node server.js
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

3. Install Vite to  allow us to use Vue Single-File Components (SFCs):
    ```sh
    npm create vue@latest
    ```

4. Add this to your `main.js` file:
    ```js
  import './assets/main.css'

    import { createApp } from 'vue';
    import { createPinia } from 'pinia';

    import App from './App.vue';
    import router from './router';

    const app = createApp(App);

    app.use(createPinia());
    app.use(router);

    app.mount('#app');
```

5. Start the client:
    ```sh
    npm run dev
    ```

## Usage
To use the application, navigate to `http://localhost:5173/dashboard`  in your browser after running ```sh npm run dev ``` in your terminal inside the client/cvkltd directory.  You will see the dashboard where you can upload projects by filling in the form fields and submitting them.



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
This project is open-source hence no need for licencing.
