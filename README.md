# Pearlaw Corporate

Pearlaw Corporate is a modern, responsive website for a law firm, built with Next.js and Payload CMS. It features a comprehensive content management system for blog posts and other dynamic content, alongside a polished frontend for showcasing legal services.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **CMS:** [Payload CMS 3.0](https://payloadcms.com/)
- **Database:** PostgreSQL (via Drizzle ORM)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Rich Text Editor:** Lexical

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.20.2+ or >=20.9.0)
- [npm](https://www.npmjs.com/) (or yarn/pnpm/bun)
- A PostgreSQL database instance

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd pearlaw-corporate
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory. Add the following required variables:

    ```env
    # Database connection string (PostgreSQL)
    DATABASE_URL=postgresql://username:password@localhost:5432/pearlaw_db

    # Payload Secret (used for encryption and session management)
    # You can generate one using `openssl rand -base64 32`
    PAYLOAD_SECRET=your-secret-key-here

    # URL of the application (for local development)
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## Accessing the Admin Panel

Payload CMS comes with a built-in admin panel to manage your content.

1.  Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).
2.  you will be asked to sign in email: wisdomilori0@gmail.com  pass: 1234567890
3.  Once logged in, you can manage:
    - **Posts:** Create, edit, and publish blog articles.
    - **Users:** Manage admin access.
    - **Media:** Upload images and files (if configured).

## Project Structure

- `app/(website)`: The public-facing website routes (Home, About, Blog, etc.).
- `app/(payload)`: Payload CMS specific routes and configuration.
- `components`: Reusable React components (UI, Layout, Sections).
- `lib`: Utility functions, types, and mock data.
- `payload.config.ts`: Main configuration file for Payload CMS.


## Development Notes
- **Mock Data:** Some sections of the site currently use mock data located in `lib/mock-data.ts`. This allows for rapid UI development and can be progressively replaced with CMS data as needed.
