AI-Powered Real-Time Chat App (MERN Stack)

This project is a real-time chat application built with the MERN stack, enhanced with AI support from Google Gemini, and optimized with Redis caching for better performance. Real-time communication is powered by Socket.io.

Features

Real-time messaging between users.

AI-powered chat responses using Google Gemini.

Redis caching for fast performance.

User authentication with JWT.

Responsive and modern user interface.

Tech Stack

Frontend: React.js

Backend: Node.js + Express

Database: MongoDB

Cache: Redis

Real-time communication: Socket.io

AI integration: Google Gemini API

Authentication: JWT

Installation & Setup
1. Clone the repository
git clone https://github.com/pratyasha-debug/AI-Developer.git
cd AI-Developer

2. Install dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3. Setup Services
MongoDB

Local: Download and start MongoDB:

mongod


Cloud (optional): Use MongoDB Atlas and update MONGODB_URI in .env.

Redis

Local: Download and start Redis:

redis-server


Cloud (optional): Use Redis Cloud credentials in .env.

Google Gemini (AI)

Get an API key from Google Cloud AI and set it in .env as:

GOOGLE_AI_KEY=your_api_key_here

4. Running the App
Backend
cd backend
npm start

Frontend
cd frontend
npm run dev

Acknowledgements

MongoDB – Database

Redis – Caching & performance

Socket.io – Real-time communication

Google Gemini – AI integration
