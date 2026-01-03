# 📱 ProfileX – React Native App (Expo + Clerk Auth)

ProfileX is a modern **React Native mobile application** built using **Expo** and **Clerk Authentication**.  
It demonstrates **secure authentication**, **OAuth login**, and **multi-screen navigation**, making it ideal for **learning, academic submissions, and portfolio projects**.

---

## ✨ Features

- 🔐 Email & Password Authentication (Clerk)
- 🔑 Google Sign-In (OAuth)
- 🧭 Custom Login & Signup Screens
- 🏠 Dashboard with Background Image
- 👤 Profile Screen with User Details
- 🚨 Custom Alert Component
- 🔒 Secure Environment Variable Handling
- 📦 Android APK Build Support (EAS)

---

## 🛠 Tech Stack

- **React Native**
- **Expo**
- **Clerk Authentication**
- **React Navigation / Expo Router**
- **JavaScript**
- **EAS Build**

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x`
- **npm**
- **Git**
- (Optional) Android Emulator or Android Phone

---

## 🚀 Getting Started (Run Locally)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rodopollunagaraju/React_Native_clerk_auth.git
cd 
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables (IMPORTANT)

This project uses Clerk Authentication, which requires a publishable key.

Create a .env file in the root directory:

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

⚠️ Do NOT commit .env to GitHub
Instead, this repository includes .env for reference.

### 4️⃣ Run the App (Development)
```bash
npx expo start
```

- **Then you can:**
- **Open the browser link**
- **Run on Android Emulator**
- **OR scan the QR code using Expo Go**
