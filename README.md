# PheuanPet: A Social Media Platform for Pet Lovers

Welcome to **PheuanPet**, a social media platform designed for pet enthusiasts to connect, share, and interact!  
This organization houses all the core repositories that make up the PheuanPet ecosystem.

---

## 🚀 Project Overview

PheuanPet aims to create a vibrant online community where pet owners can:

- Showcase their beloved companions
- Share heartwarming moments
- Seek advice
- Engage with other animal lovers

---

## 🏗️ Architecture & Technology Stack

Our platform is built with a modern, scalable, and modular architecture, utilizing the following technologies:

### **Frontend**

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Firebase Hosting

### **Backend (Core API)**

- **Language:** Golang
- **Framework:** Gin Gonic
- **Services:** Firebase Admin SDK (Authentication, Firestore, Storage)
- **Deployment:** Firebase Cloud Functions (via Custom Runtimes built on Cloud Run)

### **Shared Services**

- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication
- **File Storage:** Firebase Storage
- **Serverless Functions:** Firebase Cloud Functions

### **CI/CD**

- **Automation:** GitHub Actions (for automated builds and deployments)

---

## 📦 Repositories within this Organization

This organization is structured into separate repositories, each managing a distinct part of the PheuanPet application:

### **[pheuanpet/web](https://github.com/pheuanpet/web)**

- **Description:** The primary frontend web application built with Next.js and Tailwind CSS.
- **Key Features:** User profiles, pet profiles, content feed, posting, interactions (likes, comments).

### **[pheuanpet/api](https://github.com/pheuanpet/api)**

- **Description:** The backend API service built with Golang and Gin. It handles core logic, user management, and interactions with Firebase services.
- **Key Features:** User registration, login, token verification, user profile management, data persistence.

### **[pheuanpet/admin](https://github.com/pheuanpet/admin) (Planned for Future)**

- **Description:** A separate admin panel/dashboard application for internal team members to manage users, content, and system settings.

### **[pheuanpet/mobile](https://github.com/pheuanpet/mobile) (Planned for Future)**

- **Description:** The mobile application for PheuanPet, offering a dedicated mobile experience.

### **[pheuanpet/shared](https://github.com/pheuanpet/shared) (Planned for Future)**

- **Description:** A repository for reusable libraries, common types, and utility functions shared across web, api, or mobile projects.

---

## 🛠️ Getting Started

Each repository has its own `README.md` with specific setup and development instructions.  
Please navigate to the respective repository to get started.

---

## 🤝 Contributing

We welcome contributions!  
Please refer to each repository's `CONTRIBUTING.md` (if available) for guidelines on how to get involved.

---

## 📞 Support

For any questions or issues:

- Refer to the issue tracker of the specific repository you are working with.
- Reach out to the project maintainers.

---

**Note:** This README is designed to provide a clear overview of the PheuanPet ecosystem and guide contributors and developers effectively.
