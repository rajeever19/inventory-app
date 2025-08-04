# 🧾 Inventory Management API (NestJS + Prisma + PostgreSQL)

> A scalable backend system for managing users, products, and stock operations — powered by NestJS, Prisma ORM, and PostgreSQL.

---

## 📌 Table of Contents

* [🚀 Project Vision](#-project-vision)
* [🧩 Tech Stack](#-tech-stack)
* [📦 Features](#-features)
* [🔧 Installation & Setup](#-installation--setup)
* [🧪 Testing](#-testing)
* [🎯 Production-Ready Feature Roadmap](#-production-ready-feature-roadmap)
* [📁 Folder Structure](#-folder-structure)
* [💼 Why This Project](#-why-this-project)
* [👨‍💻 About Me](#-about-me)
* [📬 Contact](#-contact)
* [📝 License](#-license)

---

## 🚀 Project Vision

This project is a real-world **Inventory Management API** built with scalability and modularity in mind. It serves as a demonstration of my ability to:

* Design secure authentication systems (JWT-based)
* Structure scalable modules with NestJS
* Use ORM effectively with Prisma
* Write clean, testable, production-ready code
* Plan features progressively with growth in mind

---

## 🧩 Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Framework      | NestJS                            |
| ORM            | Prisma ORM                        |
| Database       | PostgreSQL                        |
| Authentication | JWT, Bcrypt                       |
| Validation     | class-validator                   |
| API Docs       | Swagger (Planned)                 |
| Testing        | Jest                              |
| CI/CD          | GitHub Actions (Planned)          |
| Deployment     | Docker + Render/Railway (Planned) |

---

## 📦 Features

| Module             | Status    | Description                            |
| ------------------ | --------- | -------------------------------------- |
| ✅ User Signup      | Completed | With hashed password & validation      |
| ✅ User Signin      | Completed | Returns JWT after successful login     |
| 🔐 JWT Auth Guard  | Pending   | Role-based route protection            |
| 🛠 Product CRUD    | Planned   | Inventory creation, update, deletion   |
| 📊 Dashboard Stats | Planned   | Inventory insights & analytics         |
| 🔁 Refresh Tokens  | Planned   | Secure persistent login                |
| 📑 Swagger Docs    | Planned   | Full interactive API documentation     |
| 🧪 Unit Tests      | Completed | Auth module tested with Jest           |
| 🚦 CI/CD           | Planned   | GitHub workflows for automated testing |

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/inventory-app.git
cd inventory-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Update your `.env` file:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/inventory_app"
JWT_SECRET="super-secret-key"
```

### 4. Setup Database with Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

> To view DB in browser: `npx prisma studio`

### 5. Run Development Server

```bash
npm run start:dev
```

Server is available at: `http://localhost:3000`

---

## 🧪 Testing

Run all unit tests:

```bash
npm run test
```

Includes working test specs for `AuthController` and `AuthService`

---

## 🎯 Production-Ready Feature Roadmap

### 🔐 Authentication & Security

*

### 📦 Inventory Management

*

### 📊 Business Features

*

### ⚙️ Developer & Infra Enhancements

*

---

## 📁 Folder Structure

```bash
src/
├── auth/            # AuthController, AuthService, DTOs
├── user/            # User model access and services
├── product/         # Inventory logic (planned)
├── stock/           # Stock movement and tracking (planned)
├── common/          # Interceptors, pipes, filters
├── config/          # Database, JWT, and app configs
├── guards/          # AuthGuard, RoleGuard
├── decorators/      # Custom route decorators
├── utils/           # Shared helper functions
└── app.module.ts    # Root NestJS module
```

---

## 💼 Why This Project?

This project reflects my ability to build, test, and maintain scalable backend APIs in real-world scenarios:

✅ Modular architecture and separation of concerns
✅ Secure user authentication with hashed passwords
✅ DTO-based validation and transformation
✅ Test-driven mindset using Jest
✅ Progressive roadmap for scale
✅ Real deployment planning (Docker + CI/CD)

---

## 👨‍💻 About Me

**Rajeev Ranjan** — Frontend Developer transitioning to Full Stack Development 🚀

* 🧠 Currently mastering NestJS, Prisma, PostgreSQL
* 💬 Open to Backend and Full Stack roles
* 🛠 Constantly building real-world projects to grow

---

## 📬 Contact

📧 Email: [rajeevranjan54545@gmail.com](mailto:rajeevranjan54545@gmail.com)
💼 LinkedIn: [linkedin.com/in/](https://www.linkedin.com/in/YOUR_USERNAME)rajeevranjanse
🌐 Portfolio: Coming Soon

---

## 📝 License

MIT License — you're free to use, modify, and distribute.
