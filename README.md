# Real Estate Website with Admin Panel

A full-stack MERN application representing a real estate project website with a dynamic Admin Panel for content management.

## Features

-   **Public Website**:
    -   Responsive design matching the reference UI.
    -   Dynamic content fetched from MongoDB.
    -   Sections: Hero, Overview, Connectivity, Amenities, Floor Plans, Developer, Updates, FAQ, Contact.
-   **Admin Panel**:
    -   Secure login (Fixed credentials: `admin@gmail.com` / `1234`).
    -   Dashboard to edit text content for all website sections.
    -   Real-time updates.

## Tech Stack

-   **Frontend**: React, Vite, Tailwind CSS, Axios.
-   **Backend**: Node.js, Express, MongoDB, Mongoose.

## Setup Instructions

### Prerequisites
-   Node.js installed.
-   MongoDB URI (Update in `server/.env`).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repo-url>
    cd realestate-app
    ```

2.  **Backend Setup**:
    ```bash
    cd server
    npm install
    # Create .env file with:
    # MONGO_URI=your_mongodb_connection_string
    # JWT_SECRET=your_secret
    npm start
    ```

3.  **Frontend Setup**:
    ```bash
    cd client
    npm install
    npm run dev
    ```

### Admin Credentials
-   **Email**: `admin@gmail.com`
-   **Password**: `1234`

## API Endpoints

-   `POST /api/auth/login`: Admin login.
-   `GET /api/content`: Fetch website content.
-   `PUT /api/content`: Update website content (Admin only).

## Deployment

-   **Backend**: Deploy the `server` folder to Render/Heroku.
-   **Frontend**: Deploy the `client` folder to Vercel/Netlify.
