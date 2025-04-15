
# 📚 ScholarVault - Digital Thesis Repository

ScholarVault is a full-stack web application that allows Admins, Scholars, and Users to manage, upload, and view academic thesis documents. It features robust role-based authentication and a secure, cloud-integrated backend.

---

## 🚀 Project Structure

```
ScholarVault/
├── backend/                     # Express.js backend with Prisma ORM
├── frontend/                    # Next.js frontend interface
├── Digital Thesis Repository.pdf
├── ScholarVault.postman_collection.json
├── .gitignore
```

---

## 🔐 User Roles

- **Admin** – Full access to all data, user management, and analytics.
- **Scholar** – Upload and manage their thesis submissions.
- **User** – View and search for publicly available theses.

---

## ⚙️ Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/en/) (use [nvm](https://github.com/nvm-sh/nvm) to manage versions)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)
- [Postman](https://www.postman.com/)
- Homebrew (for macOS users)

---

## 🛠️ Setup Instructions

### Backend Setup

```bash
cd backend
npm install
```

1. Configure `.env` with your MySQL credentials.
2. Create a schema named `tms` in MySQL.
3. Apply database migrations:
   ```bash
   npx prisma migrate dev
   ```
4. Seed the database:
   ```bash
   npm run seed
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Postman Setup for Token Authentication

1. Import `ScholarVault.postman_collection.json` into Postman.
2. Create a new environment called `tms`:
   - Variable: `BASE_URL`
   - Value: `http://localhost:3000`
3. Fetch CSRF token:
   ```http
   GET {{BASE_URL}}/api/auth/csrf
   ```
4. Authenticate:
   ```http
   POST {{BASE_URL}}/api/auth/callback/credentials
   ```
   ```json
   {
     "csrfToken": "PASTE_CSRF_TOKEN_HERE",
     "email": "admin@scholarvault.com",
     "password": "scholarvault"
   }
   ```
5. Store the returned token in the environment.

---

## 🔐 Test Login Accounts

| Role   | Email                        | Password       |
|--------|------------------------------|----------------|
| Admin  | admin@scholarvault.com       | scholarvault   |
| Scholar| scholar@scholarvault.com     | scholarvault   |
| User   | user@scholarvault.com        | scholarvault   |

---

## ☁️ Cloud Deployment

The application is also deployed on the cloud for remote access.  
📎 **[Access Live Project](https://sxb3349.uta.cloud/)**

> Ensure the deployed environment mirrors the `.env` and database setup from the local configuration.

---

## 📄 License

This project is for educational use under the University submission guidelines.

---

## 📬 Contact
For questions or contributions, please contact [Kintur Shah](mailto:shahkintur@gmail.com).
