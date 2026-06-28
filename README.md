#  TwinkerSpace

A full-stack web application built with **React, TypeScript, Express.js, MySQL, AWS EC2, AWS RDS, Nginx, and GitHub Actions**.

This project demonstrates modern full-stack development, cloud deployment, reverse proxy configuration, HTTPS setup, and CI/CD automation using AWS.

---

## Live Demo

**Website**

https://twinkerspace.duckdns.org

---

# ✨ Features

* Responsive React user interface
* Express REST API
* Contact form with backend validation
* MySQL database integration
* AWS RDS database
* AWS EC2 deployment
* Nginx Reverse Proxy
* HTTPS with Let's Encrypt
* GitHub Actions CI/CD
* Automatic deployment on every push to the `main` branch
* Health Check after deployment
* Environment variable management

---

#  System Architecture

```text
                Internet
                     │
                     ▼
             GitHub Actions
                     │
              (Auto Deploy)
                     │
                     ▼
              AWS EC2 (Ubuntu)
                     │
                  Nginx
              ┌─────────────┐
              │             │
              ▼             ▼
         React App     Express API
                             │
                             ▼
                     AWS RDS (MySQL)
```

---

# ⚙️ Tech Stack

## Frontend

* React
* TypeScript
* Vite
* CSS

## Backend

* Node.js
* Express.js

## Database

* MySQL
* AWS RDS

## Infrastructure

* AWS EC2
* Nginx
* PM2
* GitHub Actions
* Let's Encrypt
* DuckDNS

---

# 📂 Project Structure

```text
twinkerspace
│
├── .github
│   └── workflows
│       └── deploy.yml
│
├── web
│   ├── src
│   ├── public
│   └── dist
│
├── server
│   ├── routes
│   ├── db.js
│   └── index.js
│
└── README.md
```

---

# 🚀 CI/CD Pipeline

Every push to the `main` branch automatically deploys the application.

```text
Developer
     │
 git push
     │
     ▼
GitHub Repository
     │
     ▼
GitHub Actions
     │
 SSH
     ▼
AWS EC2
     │
git pull
     │
npm install
     │
npm run build
     │
PM2 Restart
     │
Nginx Reload
     │
Health Check
     │
Deployment Complete
```

---

#  Deployment

The application is deployed using:

* AWS EC2
* AWS RDS
* Nginx Reverse Proxy
* PM2 Process Manager
* HTTPS (Let's Encrypt)
* GitHub Actions CI/CD

---

# 🩺 Health Check

After every deployment, GitHub Actions automatically verifies that the application is running correctly by checking:

* Frontend availability
* API availability
* HTTP response status

Deployment is marked as failed if any health check does not return a successful response.

---

# Future Improvements

* User authentication (JWT)
* Docker containerization
* AWS S3 for static asset hosting
* CloudFront CDN
* Automated testing (Jest + Playwright)
* Monitoring with CloudWatch
* Logging with Winston
* Infrastructure as Code

---

# 👩‍💻 Author

**Hailan Jin**

Frontend Engineer | React | TypeScript | AWS | Full-Stack Development

* LinkedIn: https://www.linkedin.com/in/hailan-jin/
