# Luxury Living - Real Estate Application

A premium real estate website featuring a dynamic **Admin Panel** for content management. Built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Live Demo

-   **Frontend (Public Website)**: [https://liveluxury-app.vercel.app/](https://liveluxury-app.vercel.app/)
-   **Admin Panel**: [https://liveluxury-app.vercel.app/admin](https://liveluxury-app.vercel.app/admin)
-   **Backend API**: [https://realestate-app-kho6.onrender.com](https://realestate-app-kho6.onrender.com)

**Admin Credentials:**
-   **Email**: `admin@gmail.com`
-   **Password**: `1234`

---

## ✨ Features

### 🏡 Public Website
-   **Modern UI/UX**: Fully responsive design with smooth animations (Framer Motion).
-   **Dynamic Content**: All text, images, and prices are fetched from the database.
-   **Interactive Sections**:
    -   **Hero**: Video/Image background with call-to-action.
    -   **Floor Plans**: Switch between wings (East, West, etc.) and unit types (2BHK, 3BHK).
    -   **Amenities**: Grid view with "Explore More" township cards.
    -   **FAQ**: Interactive accordion for common questions.
    -   **Contact**: Lead generation form (ready for integration).

### 🛠 Admin Dashboard
-   **Secure Authentication**: JWT-based login system.
-   **Content Management**: Update text, links, and images for:
    -   Hero Section (Title, Subtitle, Brokerage options)
    -   Project Overview
    -   Amenities & Township details
    -   Floor Plan images
    -   Developer Stats & Construction Updates
    -   Footer Contact Info

---

## 🛠 Tech Stack

-   **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion, Axios.
-   **Backend**: Node.js, Express.js.
-   **Database**: MongoDB Atlas (Mongoose).
-   **Deployment**: Vercel (Frontend), Render (Backend).

---

## ⚙️ Local Development Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/manishsambari/realestate-app.git
cd realestate-app
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start the server:
```bash
npm start
```
*Server runs on http://localhost:5000*

### 3. Frontend Setup
Open a new terminal:
```bash
cd client
npm install
```

Start the React app:
```bash
npm run dev
```
*Frontend runs on http://localhost:5173*

---

## 🚀 Deployment Guide

### Backend (Render)
1.  Connect GitHub repo to **Render**.
2.  Create a **Web Service** for the `server` directory.
3.  Add Environment Variables: `MONGO_URI`, `JWT_SECRET`.
4.  **Important**: Whitelist `0.0.0.0/0` in MongoDB Atlas Network Access.

### Frontend (Vercel)
1.  Connect GitHub repo to **Vercel**.
2.  Set **Root Directory** to `client`.
3.  Add Environment Variable:
    -   `VITE_API_URL`: Your Render Backend URL + `/api` (e.g., `https://realestate-app-kho6.onrender.com/api`)
4.  Deploy!

---

## 📁 Project Structure

```
realestate-app/
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI (Navbar, Footer, Admin Forms)
│   │   ├── pages/       # Page views (Home, Admin Dashboard)
│   │   ├── context/     # Auth Context for Login state
│   │   └── api.js       # Axios setup with Interceptors
│   └── vercel.json      # Routing config for Vercel
│
├── server/              # Node.js Backend
│   ├── controllers/     # Logic for Auth and Content
│   ├── models/          # MongoDB Schemas
│   └── server.js        # Express App Entry Point
└── README.md            # You are here
```

---

Made with ❤️ by Lime Realty Tech Team.
