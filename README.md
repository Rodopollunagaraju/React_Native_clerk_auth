📱 ProfileX – React Native App

A modern mobile application built with Expo (React Native) featuring:

Email & Password Authentication

Google OAuth Authentication

Custom UI Screens (Login, Signup, Profile, Dashboard)

Clerk Authentication

Clean, minimal design

🛠️ Tech Stack

React Native (Expo)

JavaScript

Clerk Authentication

Expo Router / React Navigation

Google OAuth

🚀 How to Run This App (No Expo Go Required)

Your teacher does NOT need to install the Expo Go app.
They can run it using an Android Emulator or build an APK.

✅ OPTION 1: Run on Android Emulator (Recommended)
🔧 Prerequisites

Install the following:

Node.js (v18 or above)

Android Studio

Install Android Emulator

Create a Virtual Device

▶️ Steps
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install

Create .env file in root directory
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here


⚠️ The .env file is required for authentication to work.

Start the app
npx expo start


Then press:

a


➡️ App will open automatically in the Android Emulator.

✅ OPTION 2: Build & Install APK (No Emulator Needed)

This option lets your teacher install the app like a normal Android app.

Build APK
npx expo build:android


Choose:

APK


Expo will generate a download link.

Install

Download APK

Enable Install from unknown sources

Install & run

✅ No Expo Go
✅ No Emulator
✅ Works offline

📂 Environment Variables

Create a .env file:

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=


A sample file is provided as:

.env.example

📸 Screens Implemented

Start Screen

Login Screen

Signup Screen

Google Sign-In

Home Dashboard

Profile Screen

Custom Alerts

🔐 Authentication Flow

Clerk handles all authentication securely

No passwords stored locally

Google OAuth supported

Session-based login
