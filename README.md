# 🔐 MERN Auth App

A production-grade, full-stack authentication system built with the **MERN Stack** (MongoDB, Express, React, Node.js). This project implements secure session management, JWT rotation, and OTP-based verification to provide an industry-standard security foundation.

---

## 🚀 Core Features

### 🔑 Advanced Authentication
* **Dual-Token System:** Short-lived Access Tokens (15m) and long-lived Refresh Tokens (7d).
* **Silent Refresh:** Background token rotation via **Axios Interceptors** for a seamless UI experience.
* **Token Security:** Refresh tokens are stored in **HTTP-Only Cookies** to prevent XSS attacks.

### 👤 User Lifecycle
* **Secure Registration:** Validated onboarding with `username`, `email`, and `password`.
* **Professional Hashing:** Passwords secured using **Bcrypt** (Salt rounds: 10).
* **OTP Verification:** Email validation via **Nodemailer** required before account activation.

### 🛡️ Secure Routing & UX
* **Protected Routes:** React Router guards that prevent unauthorized access to private pages.
* **Global Auth State:** Centralized user state management (Context API) across the entire frontend.
* **Toast Notifications:** Real-time feedback for successful actions or security errors.

### 📱 Session Management
* **Device Tracking:** Each login tracks IP Address and User-Agent (Device type).
* **Remote Control:** Users can view active sessions and "Logout from all devices" remotely.
* **Automatic Expiry:** Built-in expiration for both OTPs and JWT sessions.

---

## 🛠️ Tech Stack

*   **Frontend:** React (Vite), Tailwind CSS, Axios, React Router
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB Atlas (Mongoose)
*   **Authentication:** JSON Web Tokens (JWT) & Bcrypt
*   **Email Service:** Nodemailer

---

## 📂 Project Structure (Monorepo)

```text
mern-auth-app/
├── client/                # React Frontend (The "View")
│   ├── src/components/    # Reusable UI (Forms, Layouts)
│   ├── src/context/       # Global Auth State
│   ├── src/pages/         # Protected & Public Pages
│   └── src/api/           # Axios Interceptor logic
└── server/                # Node.js Backend (The "Engine")
    ├── controllers/       # Request handlers
    ├── services/          # Auth & Email logic
    ├── models/            # Mongoose Schemas (User, Session, OTP)
    ├── middleware/        # JWT & Error Handling
    └── db/                # Atlas Connection
```

---

## 📡 API Endpoints


| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Create user & trigger OTP email |
| **POST** | `/api/auth/verify-email` | Validate OTP & activate account |
| **POST** | `/api/auth/login` | Authenticate user & issue cookies |
| **GET** | `/api/auth/get-me` | Return current user profile |
| **GET** | `/api/auth/refresh-token` | Silent rotation of Access Token |
| **GET** | `/api/auth/logout` | Clear session & cookies |
| **GET** | `/api/auth/logout-all` | Revoke all active sessions |

---

## ⚙️ Environment Variables

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGODB_URL=your_mongodb_atlas_url

JWT_ACCESS_SECRET=your_super_secret_access_key
JWT_REFRESH_SECRET=your_super_secret_refresh_key

EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password
```

---

## 🔐 Security Best Practices
*   **XSS Protection:** Access tokens are stored in-memory (not in LocalStorage).
*   **Database Hygiene:** `select: false` on password fields in Mongoose prevents hash leakage.
*   **Rotation:** Refresh token rotation prevents replay attacks on stolen tokens.
*   **Environment Security:** `.env` file included in `.gitignore` to protect credentials.

---

## ▶️ Getting Started

1. **Clone the repo**
2. **Setup Backend:**
   ```bash
   cd server
   npm install
   npm run dev
   ```
3. **Setup Frontend:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

---

## 👨‍💻 Author
Built by **Akash**

If you find this project helpful, please consider giving it a ⭐ on GitHub!
