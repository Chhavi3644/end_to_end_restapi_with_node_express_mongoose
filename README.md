# API Project

A RESTful API built with Node.js, Express, and MongoDB for managing products. This project demonstrates basic API functionality including routing, controllers, database connection, and data seeding.

## Features

- **REST API Endpoints**: specific routes for fetching product data.
- **Database Integration**: MongoDB connection using Mongoose.
- **Data Seeding**: Script to populate the database with initial data.
- **Filtering**: (Intended) Support for filtering products by company and name.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB.
- **Dotenv**: Module to load environment variables.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A MongoDB database (local or Atlas cloud).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd api-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your configuration:
    ```env
    MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/<dbname>?retryWrites=true&w=majority
    PORT=8080
    ```

### Seeding the Database

To populate the database with sample data from `products.json`, run:

```bash
node productDB.js
```

### Running the Server

-   **Start in production mode:**
    ```bash
    npm start
    ```
-   **Start in development mode (with nodemon):**
    ```bash
    npm run dev
    ```

The server will start on port `8080` (or the port defined in your `.env` file).

## API Endpoints

### Base URL
`http://localhost:8080`

### 1. Home
-   **Endpoint**: `/`
-   **Method**: `GET`
-   **Description**: Returns a welcome message.
-   **Response**: "hi i am live"

### 2. Get All Products
-   **Endpoint**: `/api/products`
-   **Method**: `GET`
-   **Description**: Fetch all products. Supports filtering by query parameters.
-   **Query Parameters**:
    -   `company`: Filter by company name (e.g., `?company=apple`).
    -   `name`: Filter by product name (regex search). *Note: Currently name filtering implementation depends on company presence in the code logic.*
-   **Example**:
    ```
    GET /api/products?company=apple
    ```

### 3. Testing Endpoint
-   **Endpoint**: `/api/products/testing`
-   **Method**: `GET`
-   **Description**: Fetches products sorted by company (descending). Used for testing purposes.

## Project Structure

```
├── controllers/    # Route logic
├── db/             # Database connection
├── models/         # Mongoose schemas
├── routes/         # API routes
├── app.js          # Main entry point
├── productDB.js    # Database seeding script
└── products.json   # Sample data
```
