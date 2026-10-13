# Express TS Mongo Starter

Lightweight starter repo. Handles core setup so you can focus on building features.

## Features
- TypeScript with tsx (hot reload)
- MongoDB via Mongoose
- Security with Helmet and CORS
- Global Error Handling with custom error classes

## Structure
- src/app.ts - Express app and middleware
- src/server.ts - Database boot and HTTP listener
- src/configs/ - DB setup and Env variables
- src/middlewares/ - Global 4-parameter error handler
- src/utils/ - Built-in errors (400, 404, 409, 500)

## Quick Start

1. Install: npm install
2. Env: Create .env in root from .env.local:
3. Run: npm run dev

## How to Add Features

1. Create a module folder: src/modules/users/
2. Add files: routes.ts, controller.ts, service.ts
3. Throw errors in your service: 
   ```ts
   throw new NotFoundError("User missing");
   ```
4. Use try/catch in controllers and pass to next(error)
5. Import routes into app.ts above the 404 handler:
   ```ts
   app.use("/api/users", userRoutes);
   ```
