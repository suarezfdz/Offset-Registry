
# Project Name Readme

## Overview

This project consists of multiple applications, including a frontend, backend, and PostgreSQL database. The entire system is deployed on Vercel, with separate deployments for the frontend, backend, and PostgreSQL database. Whenever a change is pushed to the main branch, an automatic deployment process is triggered to update the live version of the project on Vercel.

## Getting started

### 1. Frontend

The frontend of the project is responsible for the user interface and client-side functionality. It is built using [technology/framework] and communicates with the backend to retrieve and display data. The frontend is deployed as a standalone application on Vercel.

#### Deployment

-   **Vercel URL:** [Frontend Vercel URL](https://offset-registry-m2rp.vercel.app/home)
-   **Deployment Trigger:** Automatic on every push to the main branch

### 2. Backend

The backend of the project handles server-side logic and communicates with the frontend and PostgreSQL database. It is built using [technology/framework] and exposes APIs for the frontend to consume. The backend is also deployed as a standalone application on Vercel.

#### Deployment

-   **Vercel URL:** [Backend Vercel URL](https://offset-registry.vercel.app/api/offsets)
-   **Deployment Trigger:** Automatic on every push to the main branch

### 3. PostgreSQL Database

The PostgreSQL database stores the data used by the backend and is an essential component of the project. It is hosted on Vercel's managed database service.

#### Deployment

-   **Vercel Database URL:** [PostgreSQL Vercel URL](https://vercel.com/angel-suarezs-projects/server-app/stores/postgres/store_USLkksw13ml0KVj5/data)
-   **Deployment Trigger:** Automatic on every push to the main branch

## Deployment Workflow

1.  Developers make changes to the code in their respective branches.
2.  Once changes are tested and ready, they are merged into the main branch.
3.  The main branch push triggers an automatic deployment process on Vercel for the frontend, backend, and PostgreSQL database.
4.  Vercel builds and deploys each app, ensuring that the live version of the project is updated with the latest changes.

## Local Development

To set up the project locally for development:

1.  Clone the repository: `git clone git@github.com:suarezfdz/Offset-Registry.git`
2.  Navigate to the root and use `docker compose up --build`.
3.  Set up a local PostgreSQL database and update the backend configuration accordingly. Look at the `data` folder.
4.  Run the frontend and backend locally using `npm start` or the appropriate command for your development environment.

## Contributors

-   [Ángel Suárez Fernández](https://github.com/suarezfdz)

## Issues and Contributions

If you encounter any issues or would like to contribute to the project, please open an issue or create a pull request on the GitHub repository.

## License

This project is licensed under the [License Name]. See the LICENSE.md file for details.