# ⚡ Evora EV Rental Platform — Master Project Documentation

Welcome to the official, comprehensive documentation for the **Evora EV Rental Platform** — a full-stack, production-ready electric scooter rental web application built for modern urban mobility.

---

## 📌 Executive Summary

**Evora** is a high-performance electric vehicle rental platform that enables urban commuters and delivery partners to browse electric scooters, check real-time availability, make conflict-free reservations, pay securely online via Razorpay, receive automated email receipts, post rider reviews, and manage active bookings.

The application features a Voltium-inspired design, custom **Cyprus (`#004643`) & Sand Dune (`#F0EDE5`)** color palette, smooth scroll-reveal animations, a class-based Dark Theme engine, an interactive User Profile Avatar dropdown, and a dedicated **Admin Management Portal** for fleet control.

---

## 🛠️ Architecture & Technology Stack

```
                     ┌──────────────────────────────────────────┐
                     │          Evora Next.js Frontend          │
                     │  Next.js 16 (App Router) • React 19     │
                     │  Tailwind CSS v4 • Dark Theme Engine     │
                     └────────────────────┬─────────────────────┘
                                          │
                                HTTP REST API Requests (JSON)
                                          │
                     ┌────────────────────▼─────────────────────┐
                     │          Evora FastAPI Backend           │
                     │  FastAPI (Python 3.12) • SQLAlchemy 2.0 │
                     │  Pydantic v2 • JWT RBAC Auth • SQLite     │
                     └──────┬────────────────────────────┬──────┘
                            │                            │
                     ┌──────▼──────┐              ┌──────▼──────┐
                     │  Razorpay   │              │ SMTP Email  │
                     │ Payment SDK │              │ Dispatcher  │
                     └─────────────┘              └─────────────┘
```

### 1. Frontend Infrastructure
- **Framework**: Next.js 16 (App Router with Turbopack) & React 19
- **Styling**: Tailwind CSS v4 with custom `@custom-variant dark (&:where(.dark, .dark *));` directive
- **Color Palette**:
  - **Cyprus (`#004643`)**: Deep forest teal-green for main branding, primary buttons, hero highlights, headers, and footer.
  - **Sand Dune (`#F0EDE5`)**: Warm cream / off-white for secondary buttons, badge backgrounds, card highlights, and light section backgrounds.
  - **Dark Midnight (`#021B19`)**: Deep dark teal background for Dark Mode with Emerald (`#10B981`) text accents.
- **State Management**: TanStack React Query v5 (caching & invalidation) & React Context API (`AuthContext`, `ThemeContext`).
- **Animations**: `IntersectionObserver` scroll-reveal fade-in engine & button press physics.

### 2. Backend Infrastructure
- **Framework**: FastAPI (Python 3.12) with Uvicorn ASGI server
- **Database ORM**: SQLAlchemy 2.0 with Async SQLite driver
- **Data Validation**: Pydantic v2 schemas
- **Authentication**: OAuth2 Password Flow with JWT tokens (`PyJWT`) & Bcrypt password hashing (`Passlib`)

### 3. External Integrations
- **Payment Gateway**: Razorpay Test Gateway with HMAC SHA-256 signature verification
- **Email Service**: Asynchronous SMTP HTML Email Dispatcher (`email.message.EmailMessage`)

---

## ✨ Core Features & Specifications

### 1. Voltium-Inspired Landing Page (`/`)
- **Hero Showcase**: Quick statistics banner (`150+ Fleet Size`, `₹200 Starts/Day`, `24/7 Support`), animated vehicle spotlight card, and call-to-action buttons.
- **EV Mobility Services**: 3-card breakdown for Daily & Monthly Rentals, Delivery Partner Fleets (Zomato/Swiggy), and Zero-Maintenance Support.
- **Fleet Showcase**: Featured scooter cards displaying range, top speed, battery capacity, and daily pricing.
- **Why Choose Evora?**: Grid highlighting zero deposit policies, conflict-free booking, Razorpay security, and email receipts.
- **Scroll Reveal Animations**: Simultaneous row-based scroll reveal (`ScrollReveal.js`) with zero lag.

### 2. Navigation Header & Dark Mode Engine (`Navbar.js`)
- **Brand Logo & Title**: Clean Evora branding with Cyprus teal styling.
- **Enlarged Sun/Moon Toggle**: One-click instant Light (`#F0EDE5`) and Dark (`#021B19`) theme toggle button.
- **User Profile Avatar & Dropdown**:
  - Displays user initials avatar button when logged in.
  - Interactive dropdown menu showing user full name, email, role badge, **My Bookings** link, **Admin Portal** link (for admins), and **Log Out**.

### 3. Scooter Catalog & Details (`/vehicles` & `/vehicles/[id]`)
- **Grid Catalog**: Vehicle grid with search/filter options, price badges, and image fallback handling.
- **Detail View**: Vehicle gallery with zoom, technical specifications matrix (with vector SVG icons), features grid, and rider reviews.
- **Vehicle Description**: Dynamic overview narrative generated from battery capacity, range, top speed, and custom database descriptions.

### 4. Conflict-Free Booking Engine & Razorpay Checkout
- **Real-Time Date Overlap Guard**: Prevents double-booking by checking date ranges against active database reservations.
- **Razorpay Secure Checkout**: Modal checkout supporting UPI, Credit/Debit cards, and NetBanking with cryptographic HMAC verification.

### 5. Automated Email Receipts
- Dispatches HTML emails asynchronously upon booking reservation and successful Razorpay payment verification.

### 6. Customer Dashboard (`/dashboard`)
- Summary statistics card (Total Bookings, Active Rentals, Total Spent).
- Interactive booking cards displaying scooter name, dates, payment status, and direct Razorpay payment action button.

### 7. Admin Management Portal (`/admin`)
- **Fleet Control**: Create new scooters, edit technical specs, toggle maintenance mode (`Disable`/`Enable`), or delete vehicles (with Trash Can icon and edit modal integration).
- **Platform Bookings Table**: Monitor all customer reservations across the platform with real-time payment status.

---

## 📁 Repository Directory Map

```
ev-rental/
├── backend/
│   ├── dependencies/
│   │   ├── auth.py              # JWT authentication & RBAC security guards
│   │   └── database.py          # SQLAlchemy DB session dependency generator
│   ├── models/                  # SQLAlchemy database ORM models
│   │   ├── booking.py
│   │   ├── review.py
│   │   ├── user.py
│   │   └── vehicle.py
│   ├── schemas/                 # Pydantic data validation schemas
│   ├── services/                # Core business logic services
│   │   ├── auth_service.py
│   │   ├── booking_service.py
│   │   ├── email_service.py
│   │   └── payment_service.py
│   ├── utils/                   # Security, hashing, and JWT utilities
│   ├── database.py              # SQLite engine initialization & table creator
│   ├── main.py                  # Central FastAPI routing hub
│   └── requirements.txt         # Python dependencies
├── src/
│   ├── app/                     # Next.js App Router pages & API routes
│   │   ├── admin/               # Admin Management Portal page
│   │   ├── dashboard/           # Customer Rental Dashboard page
│   │   ├── login/               # Customer Login page
│   │   ├── register/            # Customer Registration page
│   │   ├── vehicles/            # Scooter Catalog & Detail pages
│   │   ├── globals.css          # Tailwind v4 & keyframe animation styles
│   │   ├── layout.js            # Root layout wrapper & Navbar
│   │   ├── page.js              # Voltium-inspired Landing Page
│   │   └── providers.js         # TanStack Query & Theme providers
│   ├── components/              # Reusable UI components
│   │   ├── BookingCard.js
│   │   ├── BookingWidget.js
│   │   ├── Navbar.js
│   │   ├── ScrollReveal.js
│   │   ├── VehicleCard.js
│   │   ├── VehicleDescription.js
│   │   ├── VehicleFeatures.js
│   │   ├── VehicleGallery.js
│   │   ├── VehicleGrid.js
│   │   ├── VehicleReviews.js
│   │   └── VehicleSpecs.js
│   ├── context/                 # AuthContext & ThemeContext
│   ├── hooks/                   # Custom React hooks (useAuth, useVehicle, etc.)
│   └── lib/                     # API client utilities
├── .env                         # Frontend environment variables
└── README.md                    # Quick start repository overview
```

---

## 🔑 Environment Variables Reference

### Frontend (`.env` / `.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_SwiftVolt2026Key
```

### Backend (`backend/.env`)
```env
DATABASE_URL=sqlite+aiosqlite:///./ev_rental.db
JWT_SECRET_KEY=evora-jwt-secret-key-2026
RAZORPAY_KEY_ID=rzp_test_SwiftVolt2026Key
RAZORPAY_KEY_SECRET=SwiftVoltSecretKey2026
SENDER_EMAIL=notifications@evora.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

---

## 🚀 Step-by-Step Installation & Setup

### Prerequisites
- Node.js v18.0+ & npm
- Python 3.10+

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment (Windows)
.venv\Scripts\activate

# Install requirements
pip install -r requirements.txt

# Start FastAPI dev server on port 8000
uvicorn main:app --reload --port 8000
```

### 2. Frontend Setup
```bash
# Open new terminal in repo root
cd ev-rental

# Install dependencies
npm install

# Build production bundle (verification)
npm run build

# Start Next.js dev server on port 3000
npm run dev
```

---

## 🌐 API Endpoint Reference Table

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Server health check endpoint | Public |
| `POST` | `/api/auth/register` | Register new customer account | Public |
| `POST` | `/api/auth/login` | Authenticate customer & receive JWT | Public |
| `GET` | `/api/auth/me` | Fetch currently logged-in user profile | Authenticated |
| `GET` | `/api/vehicles` | List all available scooters in fleet | Public |
| `GET` | `/api/vehicles/{id}` | Retrieve scooter details by ID | Public |
| `POST` | `/api/bookings` | Create new scooter reservation | Authenticated |
| `GET` | `/api/bookings/my-bookings` | Fetch active user's reservations | Authenticated |
| `POST` | `/api/payments/create-order` | Generate Razorpay order ID | Authenticated |
| `POST` | `/api/payments/verify` | Verify Razorpay HMAC signature | Authenticated |
| `GET` | `/api/vehicles/{id}/reviews` | Fetch reviews for a scooter | Public |
| `POST` | `/api/vehicles/{id}/reviews` | Post new scooter review & rating | Authenticated |
| `GET` | `/api/admin/vehicles` | Fetch full fleet list (including disabled) | Admin |
| `POST` | `/api/admin/vehicles` | Add new scooter model to catalog | Admin |
| `PUT` | `/api/admin/vehicles/{id}` | Edit scooter specifications | Admin |
| `DELETE` | `/api/admin/vehicles/{id}` | Permanently delete scooter from catalog | Admin |
| `GET` | `/api/admin/bookings` | Fetch all platform-wide bookings | Admin |

---

*Documentation generated for Evora EV Rental Platform. All rights reserved.*
