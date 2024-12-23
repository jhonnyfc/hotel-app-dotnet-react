# hotel-app-dotnet-react

**frontend** (React app) and **backend** (ASP.NET Web API) using **Docker Compose**.

### Prerequisites

- **Docker** installed: https://docs.docker.com/get-docker/
- **Docker Compose** installed: https://docs.docker.com/compose/install/

### Steps to Run the Project

1. **Clone the repository**

   If you haven’t cloned the repository yet, run:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Build and Run the Services**

   Run the following command in your project root directory:

   ```bash
   docker-compose up
   ```

3. **Access the Application**

   Frontend: Open your browser and go to http://localhost:4173/ to see the Vite app.
   Backend: Your backend API will be available at http://localhost:5131/.

4. **Stop the Services**

   When you're done, stop the containers with:

   ```bash
   docker-compose down
   ```
