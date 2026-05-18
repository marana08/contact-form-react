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
```

### 📌 Опис змінних:

- # Server
PORT=5000

# SMTP configuration (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password

# Sender email
SMTP_FROM=your_email@example.com

> Якщо фронтенд робить запити до API, переконайся, що URL у коді відповідає цьому порту.

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
2. Node.js (Express) приймає запит
3. Сервер обробляє дані (наприклад, лог або відправка email)
4. Повертає відповідь на frontend

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

- Не коміть `.env` у GitHub
- Переконайся що backend і frontend запущені одночасно
- Якщо CORS помилка — перевір Express CORS middleware

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
- Відправка форми на сервер

---

## 👨‍💻 Автор

GitHub: https://github.com/marana08
