# 🏟️ Sports Facility Booking Platform 📅

## 📋 Project Overview

The Sports Facility Booking Platform is a web application designed to streamline the process of booking sports facilities. It allows users to easily find, book, and manage reservations for various sports venues, providing a hassle-free experience for both users and administrators.

### 📊 Project Entity Relation Diagram

![Sports Facility Booking](https://i.ibb.co/L05Lq9H/PH-L2-Assignment-3.png)

### ✨ Features

- **User Management:**

  - User registration and login with role-based access (admin and user).
  - User profiles with contact information and address.

- **Facility Management:**

  - CRUD operations for sports facilities.
  - Soft deletion of facilities to maintain historical data.

- **Booking Management:**

  - Check availability of facilities based on date and time.
  - Create, view, update, and cancel bookings.
  - Automatic calculation of payable amount based on booking duration.

- **Security:**

  - Authentication using JWT tokens.
  - Authorization middleware to restrict access based on user roles.

- **Error Handling:**
  - Global error handling middleware for consistent error responses.
  - Validation of input data to ensure data integrity.

### 💻 Technologies Used

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - TypeScript

- **Authentication:**

  - JSON Web Tokens (JWT) for secure authentication.

- **Validation:**
  -The API employs Zod for input validation, ensuring data consistency. When validation fails, a 400 Bad Request status code is returned, accompanied by detailed error messages specifying the erroneous fields and reasons.`Zod Validation`.

### 🚀 Live Demo

View the live demo of the Sports Facility Booking Platform at [Live Demo URL](https://sports-booking-ten.vercel.app/).

### ⚙️ Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:devsrsihab/sports-booking.git
   cd sports-booking

   ```

2. **Set environment variables:**

   ```bash
    NODE_ENV=
    PORT=
    DATABASE_URL=
    BCRYPT_SALT_ROUNDS=
    USER_DEFAULT_PASSWORD=
    JWT_ACCESS_SECRET=
    JWT_ACCESS_EXPIRES_IN=

   ```

3. **Install dependencies:**

   ```bash
    npm install

   ```

4. **Run Project:**

   ```bash
    npm start
   ```
