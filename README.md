# Visionary Vault

Visionary Vault is a gallery application built using the T3 Stack with Next.js. The project provides a modern and efficient platform for users to upload, view, and manage images, complete with authentication, database integration, and analytics.
It's based on the video [From 0 to Production - The Modern React Tutorial (RSCs, Next.js, Shadui, Drizzle, TS and more)](https://www.youtube.com/watch?v=d5x0JCZbAJs), where I decided to built it by myself using the stack and recommended technologies to have a production-ready app.

Right now there is a whitelist preventing anyone of using the service. If you wanna use it and add you to the whitelist just contact me and tell me:

- Method you used for authentication (Google, Github).
- Name of the account

## Features

- **Deployment**: The application is deployed using Vercel, ensuring seamless and scalable hosting.
- **Database Integration**: The application uses Drizzle for a robust and scalable database solution.
- **Authentication**: User authentication is implemented with Clerk, providing secure and easy login functionality.
- **Image Upload**: Users can upload images to the gallery. The images are uploaded using uploadthing.
- **Error Management**: Sentry is used for comprehensive error tracking and management.
- **Routing**: Parallel and intercepting routes are set up to enhance user experience, including dedicated pages for individual images.
- **Image Deletion**: Users can delete images, with server-side actions ensuring data integrity.
- **State Management**: Jotai is used to implement basic state management for the front-end.
- **Analytics**: PostHog is integrated for in-depth analytics and user behavior tracking.
- **Rate Limiting**: Upstash is used to implement rate limiting, ensuring fair usage and protection against abuse.

## Installation

To get started with Visionary Vault, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KiriHans/visionary_vault.git
   cd visionary-vault
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project using the `.env.example` file. Don't forget to fill it with your own values and keys for each service.

4. **Run the development server**:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Visionary Vault is deployed on Vercel. Any changes pushed to the `main` branch will automatically deploy to Vercel.

## Usage

### Uploading Images

1. Log in using the authentication provided by Clerk.
2. Navigate to the upload section.
3. Select an image from your device and upload it to the gallery.

### Viewing and Managing Images

- Browse through the gallery to view uploaded images.
- Click on an image to view its details on a dedicated page.
- Use the delete button to remove any unwanted images.

### Analytics and Monitoring

- PostHog is used to track user interactions and gather analytics data.
- Sentry is used to monitor and report errors in real-time.

## Stack & Technologies Used

- **T3 Stack**: Web development stack made by [Theo](https://x.com/t3dotgg).
- **Next.js**: The React framework for production.
- **Vercel**: Hosting and deployment platform.
- **Clerk**: User management and authentication.
- **PostHog**: Analytics platform.
- **Sentry**: Error tracking and management.
- **Upstash**: Serverless Redis for rate limiting.
- **Jotai**: State management library.

---
