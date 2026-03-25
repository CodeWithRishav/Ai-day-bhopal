# AI Day Bhopal - Landing Page

Central India's Biggest AI Builder Event landing page. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Local Development

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com). Since it is built with Vite, Vercel will automatically detect the framework and configure the build settings for you.

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click on **Add New...** > **Project**.
4. Import your Git repository.
5. Vercel will automatically detect **Vite**. Ensure the following settings are correct (they usually are by default):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.

### Option 2: Deploy via Vercel CLI

If you prefer using the command line:

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the `vercel` command from the root of your project:
   ```bash
   vercel
   ```
3. Follow the prompts to link your project and deploy.
4. To deploy to production, run:
   ```bash
   vercel --prod
   ```

## Technologies Used
- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
