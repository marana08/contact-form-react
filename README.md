:

📩 Contact Form React + Node.js (Nodemailer)

Fullstack застосунок контактної форми, створений на React (Vite) та Node.js (Express) з відправкою email через Nodemailer та підтримкою завантаження файлів.

🚀 Технології

Frontend:

React
Vite
JavaScript
CSS Modules

Backend:

Node.js
Express
Nodemailer
Multer
dotenv
CORS
📦 Встановлення
git clone https://github.com/marana08/contact-form-react.git
cd contact-form-react
npm install
⚙️ Environment variables

Створи файл .env у корені:

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
SMTP_FROM=your_email@example.com

PORT=5000
▶️ Запуск проєкту
Backend
node server.js

Сервер:
http://localhost:5000

Frontend

В іншому терміналі:

npm run dev

Frontend:
http://localhost:5173

🔄 Як це працює
Користувач заповнює форму
React відправляє дані на /api/contact
Node.js сервер обробляє запит
Nodemailer надсилає email
Сервер повертає результат
📡 API
POST /api/contact

Content-Type: multipart/form-data

Fields:

name (string)
email (string)
message (string)
file (optional)

Response:

{
  "success": true,
  "message": "Email sent successfully!"
}
📁 Структура
contact-form-react/
│
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│
├── server.js
├── package.json
├── vite.config.js
└── .env
📌 Функціонал
Контактна форма
Валідація полів
Відправка email
Upload файлів
Loading / success / error стани
Responsive UI
👨‍💻 Автор

GitHub: https://github.com/marana08
