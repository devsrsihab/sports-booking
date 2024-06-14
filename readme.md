# Sports Facility Booking Platform

![Sports Facility Booking](link-to-your-logo.png)

## Project Overview

The Sports Facility Booking Platform is a web application designed to streamline the process of booking sports facilities. It allows users to easily find, book, and manage reservations for various sports venues, providing a hassle-free experience for both users and administrators.

### Features

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

### Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - TypeScript

- **Authentication:**
  - JSON Web Tokens (JWT) for secure authentication.

- **Validation:**
  - Input validation using custom middleware and libraries like `express-validator`.

### Live Demo

View the live demo of the Sports Facility Booking Platform at [Live Demo URL](https://your-live-demo-url.com).

### Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/sports-booking.git
   cd sports-booking

2. **Set environment variables:**

   ```bash
    NODE_ENV=
    PORT=
    DATABASE_URL=
    BCRYPT_SALT_ROUNDS=
    USER_DEFAULT_PASSWORD=
    JWT_ACCESS_SECRET=
    JWT_ACCESS_EXPIRES_IN=

3. **Install dependencies:**

   ```bash
    npm install
