# Express TS Mongo Starter

Lightweight starter repo. Handles core setup so you can focus on building features.

## Features
- TypeScript with tsx (hot reload)
- MongoDB via Mongoose
- Security with Helmet and CORS
- Global Error Handling with custom error classes
- Express v4 Compatibility Async Handler (auto-catches async controller errors)

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
4. Wrap controllers in asyncHandler (no try/catch needed):
   ```ts
   export const getUser = asyncHandler(async (req, res) => {
       const user = await userService.find(req.params.id);
       res.status(200).json({ success: true, data: user });
   });
   ```
   *Note: If using Express v5, you do not need the asyncHandler wrapper or next(error). You can throw directly in the async controller and delete the asyncHandler file.*
5. Import routes into app.ts above the 404 handler:
   ```ts
   app.use("/api/users", userRoutes);
   ```
