Diplomate – Learning Platform 🎓

Diplomate is a full-stack MERN (MongoDB, Express, React, Node.js) based online learning platform where educators can teach students by uploading video lectures, selling courses, and interacting through an AI-powered chatbot for instant study support.

🚀 Features

👩‍🏫 Educators can:

Upload video lectures

Create and sell courses

Manage enrolled students

🎓 Students can:

Browse and purchase courses

Access uploaded lectures anytime

Ask doubts via the integrated chatbot

🤖 AI Chatbot

Helps students with study queries

Provides quick, relevant answers

Enhances self-learning experience

🛠️ Tech Stack

Frontend: React.js, TailwindCSS / Material UI (your choice)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT / OAuth (if implemented)

Chatbot: Integrated AI assistant (Dialogflow / Deepseek API / custom NLP logic)

📂 Project Structure
Diplomate/
├── frontend/           # React frontend  
│   ├── src/  
│   ├── public/  
│   └── package.json  
├── server/           # Express backend  
│   ├── models/  
│   ├── routes/  
│   ├── controllers/  
│   └── server.js  
├── config/           # DB & environment configs  
├── README.md  
└── package.json  

⚡ Installation & Setup

Clone the repository

git clone https://github.com/your-username/Diplomate.git
cd educonnect


Install dependencies

Backend

cd server
npm install


Frontend

cd client
npm install


Set up environment variables
Create a .env file in /server with:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000


Run the project

Start backend

cd server
npm run dev


Start frontend

cd frontend
npm start


🔮 Future Enhancements

Live classes with video conferencing

Student progress tracking & analytics

Gamification (badges, leaderboards)

Payment gateway integration

👨‍💻 Developer

Dipak Pote
Diploma Final Year Project – MERN Stack
