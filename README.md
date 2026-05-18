# Contact Form React

Простий fullstack-проєкт з React формою зворотного зв'язку та Node.js (Express) сервером.

---

## 🚀 Технології

- React
- Vite
- JavaScript
- Node.js
- Express
- dotenv
- CSS

---

## 📦 Клонування проєкту

```bash
git clone https://github.com/marana08/contact-form-react.git
cd contact-form-react
```

---

## 📥 Встановлення залежностей

```bash
npm install
```

---

## ⚙️ Налаштування змінних середовища (.env)

Перед запуском створіть файл `.env` у корені проєкту:

```bash
touch .env
```

І додайте туди:

```env
PORT=5000

# SMTP configuration (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password

# Sender email
SMTP_FROM=your_email@example.com
```

---

## 📌 Опис змінних

- `PORT` — порт, на якому запускається backend сервер (Express)
- `SMTP_HOST` — SMTP сервер (наприклад Gmail, SendGrid тощо)
- `SMTP_PORT` — порт SMTP (часто 587 або 465)
- `SMTP_USER` — логін (email)
- `SMTP_PASS` — пароль або app password
- `SMTP_FROM` — адреса відправника

---

> ⚠️ Не публікуй `.env` у GitHub. Додай його в `.gitignore`.

---

## ▶️ Запуск backend сервера

```bash
node server.js
```

Сервер стартує на:

```
http://localhost:5000
```

---

## ▶️ Запуск frontend (React)

В іншому терміналі:

```bash
npm run dev
```

Фронтенд буде доступний за адресою:

```
http://localhost:5173
```

---

## 🌐 Як працює проєкт

1. React форма відправляє дані на backend
2. Express сервер приймає запит
3. Дані обробляються (лог / email через Nodemailer)
4. Повертається відповідь на frontend

---

## 🛠️ Доступні команди

### Frontend
```bash
npm run dev
```

### Backend
```bash
node server.js
```

### Build production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

---

## 📁 Структура проєкту

```bash
contact-form-react/
│
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│
├── server.js
├── package.json
├── vite.config.js
├── .env
└── README.md
```

---

## ⚠️ Важливо

- Не коміть `.env` у репозиторій
- Переконайся, що backend і frontend запущені одночасно
- Якщо є CORS помилки — перевір `cors` middleware в Express

---

## ⚙️ Вимоги

- Node.js >= 16
- npm

Перевірка:

```bash
node -v
npm -v
```

---

## 📸 Функціонал

- Ввід імені
- Email
- Повідомлення
- Відправка форми на сервер (з email через Nodemailer)

---

## 👨‍💻 Автор

GitHub: https://github.com/marana08
