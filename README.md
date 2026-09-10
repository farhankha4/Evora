# ⚡ Evora EV Rental Platform

A modern, full-stack electric vehicle rental web application built with **Next.js 16 (App Router)** and **FastAPI**.

---

## 🎨 Brand Design & Features
- **Voltium-Inspired Landing Page**: High-impact hero section, fleet models grid, EV services breakdown, rider testimonials, and scroll-reveal animations.
- **Cyprus (`#004643`) & Sand Dune (`#F0EDE5`) Color Palette**: Custom styling with class-based Dark Theme engine (`#021B19`).
- **Interactive User Avatar Dropdown**: Circular avatar navigation header with account popup card (`My Bookings`, `Admin Portal`, `Log Out`).
- **Conflict-Free Real-Time Booking**: Date overlap engine ensuring zero double-bookings.
- **Razorpay Secure Payments**: Integrated test gateway with cryptographic HMAC SHA-256 signature verification.
- **Automated HTML Email Receipts**: Asynchronous email notifications dispatched after booking & payment.
- **Admin Management Portal**: Complete fleet control (create, edit specs, toggle maintenance mode, delete scooters) and platform-wide booking monitoring.

---

## 🚀 Quick Start

### 1. Start FastAPI Backend (Port 8000)
```bash
cd backend
.venv\Scripts\activate
uvicorn main:app --reload --port 8000
```
- Interactive API Docs: `http://localhost:8000/docs`

### 2. Start Next.js Frontend (Port 3000)
```bash
cd ev-rental
npm run dev
```
- Website URL: `http://localhost:3000`
- Admin Panel URL: `http://localhost:3000/admin` *(Admin Login: `testpilot@evora.com` / `SecurePassword123!`)*

---

## 📚 Complete Project Documentation
For comprehensive architectural diagrams, API endpoints reference, environment variables, and directory structure, see **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)**.
