# ai_chatbot_mvp
## Overview
This project is an advanced AI chatbot leveraging Groq's proprietary chips for ultra-fast inference. The chatbot communicates with the Groq platform via API calls, enabling high-speed processing for real-time responses. Designed to showcase both frontend and backend development, this project demonstrates structured code, clean architecture, and efficient API integration.

The project is currently hosted live at https://www.biobrain.bio

---

## Features
- **Real-Time Chat Interface:** A seamless user experience powered by modern frontend technologies.
- **Groq API Integration:** High-performance inference through Groq's cutting-edge hardware platform.
- **Scalable Architecture:** Backend designed with Node.js to handle dynamic API calls and data processing.
- **Clean Code Structure:** Organized project directories for easy navigation and extensibility.
- **Frontend and Backend Demonstration:** Full-stack implementation showcasing both client-side and server-side development.
- **Secure and Robust:** Backend includes input validation, error handling, and secure API integration.

---

## Tech Stack
### Frontend:
- HTML, CSS, JavaScript
- Modern styling and responsive design

### Backend:
- Node.js
- Express.js

### API:
- Groq Platform API for inference

### Hosting:
- Namecheap for domain hosting
- Live at https://www.biobrain.bio

---

## Code Structure
The repository is divided into the following main directories:

1. **Frontend**
   - Contains the code for the chatbot interface, designed for a user-friendly experience.
   - Includes the `index.html` file, styles, and JavaScript functionality for interaction with the backend.

2. **Backend**
   - Node.js server code that handles API calls to the Groq platform and manages chatbot logic.
   - Includes `app.js`, `routes/`, and the main business logic.

3. **Config**
   - Configuration files for connecting to the Groq API and other services.

4. **Tests**
   - Unit and integration tests to ensure code quality and reliability.

---

## Setup and Installation
### Prerequisites
- Node.js (v14 or later)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/radkw/ai_chatbot_mvp.git
Navigate to the project directory:

bash
cd ai_chatbot_mvp
Install dependencies for the backend:

bash
cd backend
npm install
Install dependencies for the frontend:

bash
cd ../frontend
npm install
Add your API keys (e.g., Groq platform) in the .env file. Use the .env.example as a reference.

Start the backend server:

bash
cd backend
npm start
Start the frontend development server:

bash
cd ../frontend
npm start
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For inquiries or collaborations, please contact:

Radek

LinkedIn: Radek Kwasniak
