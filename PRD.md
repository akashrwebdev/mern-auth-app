# 🔐 MERN Advanced Auth System
> A professional, full-stack authentication solution featuring JWT rotation, session management, and OTP verification.

---

## 🚀 1. Project Overview
This project is a high-security authentication boilerplate built with the **MERN Stack**. Unlike basic "login/signup" tutorials, this system implements **Industry Standards** like Refresh Token Rotation and Multi-Device Session tracking. It bridges a secure Node.js backend with a responsive React frontend.

---

## 🎯 2. Key Objectives
*   **Zero-Persistence Security:** Keep access tokens in memory (XSS protection).
*   **Seamless UX:** Users stay logged in via "Silent Refresh" without seeing a loading screen.
*   **Identity Guard:** Prevent unauthorized access using server-side Route Guards.
*   **Scalable Design:** Organized into Controllers, Services, and Middlewares.

---

## 🛠️ 3. Tech Stack (The "Modern Web" Bundle)


| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React (Vite) | Fast, component-based User Interface |
| **Styling** | Tailwind CSS | Modern, utility-first responsive design |
| **State** | Context API | Managing "Is Logged In" status globally |
| **Backend** | Node.js / Express | Robust and scalable API engine |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL data storage |
| **Security** | JWT & Bcrypt | Industry-standard encryption & auth |

---

## 🛡️ 4. Core Feature Flow (Step-by-Step)

### 4.1 Registration (Secure Onboarding)
*   **Frontend:** Validates that emails are real and passwords are strong before sending.
*   **Backend:** Hashes your password with **Bcrypt** (so even the database admin can't see it).
*   **Verification:** Sends a 6-digit OTP. The account is "locked" until the OTP is verified.

### 4.2 The "Silent" Login Flow
1.  **Handshake:** User logs in; Backend sends a **short-lived Access Token** and a **long-lived Refresh Token**.
2.  **Storage:** The Refresh Token is hidden in a `HttpOnly` cookie (invisible to hackers).
3.  **Rotation:** Every time the Access Token expires, the frontend "silently" asks for a new one in the background using **Axios Interceptors**.

### 4.3 Session & Device Control
*   **Active Sessions:** View every device (Laptop, Phone) currently logged into your account.
*   **Remote Logout:** Kill a session on a stolen device remotely from your dashboard.

---

## 🧱 5. Folder Architecture (Pro-Style)
```text
mern-auth-app/
├── client/                # React Frontend (The "View")
│   ├── src/components/    # Reusable UI parts
│   ├── src/context/       # Global Auth state
│   └── src/hooks/         # Axios interceptor logic
└── server/                # Node.js Backend (The "Brain")
    ├── models/            # MongoDB Blueprints
    ├── controllers/       # "Traffic Cops" (Logic)
    └── middleware/        # "Gatekeepers" (Security checks)
```

---

## 🔒 6. Security Features (Why this is Pro)
*   **XSS Protection:** Access tokens are NOT stored in `localStorage`.
*   **CSRF Protection:** Secure cookies use `SameSite: Strict`.
*   **Database Hygiene:** `select: false` on passwords ensures hashes are never accidentally sent to the UI.

---

## 📈 7. Roadmap (Future Features)
- [ ] Google & GitHub OAuth 2.0 Integration.
- [ ] Role-Based Access Control (Admin vs. User).
- [ ] 2-Factor Authentication (2FA) with Google Authenticator.
