# Payload CMS Setup Instructions

This project now uses **Payload CMS** with **Neon PostgreSQL** database for blog management.

## What's Been Set Up

✅ Payload CMS installed and configured
✅ PostgreSQL database connection (Neon)
✅ Blog posts collection with all necessary fields
✅ User authentication system
✅ Admin dashboard at `/admin`
✅ API endpoint for fetching published posts

## Environment Variables

Make sure you have these environment variables set:

```env
DATABASE_URL=your_neon_database_url (already configured)
PAYLOAD_SECRET=your-secret-key-here (add this)
```

**To add PAYLOAD_SECRET:**
1. Generate a secure random string (at least 32 characters)
2. Add it to your environment variables in the Vercel dashboard or your `.env` file
3. Example: `PAYLOAD_SECRET=abc123def456ghi789jkl012mno345pqr678`

## Accessing the Admin Dashboard

### Step 1: Create Your First Admin User

When you first access the admin dashboard, you'll need to create an admin account:

1. Navigate to: **`http://localhost:3000/admin`** (development) or **`https://your-domain.com/admin`** (production)
2. You'll see a "Create First User" screen
3. Fill in:
   - **Name**: Your name
   - **Email**: Your admin email
   - **Password**: A secure password
4. Click "Create"

### Step 2: Login to Admin Dashboard

After creating your account:
1. Go to `/admin`
2. Enter your email and password
3. Click "Login"

### Step 3: Create Blog Posts

Once logged in:
1. Click on **"Posts"** in the left sidebar
2. Click **"Create New"** button
3. Fill in the blog post details:
   - **Title**: The blog post title
   - **Slug**: URL-friendly version (e.g., "my-first-post")
   - **Excerpt**: Short description
   - **Content**: Full blog post content (rich text editor)
   - **Featured Image**: Image URL or path
   - **Category**: Select from Legal Tech, Contract Law, Business Law, etc.
   - **Author**: Author name
   - **Published At**: Publication date
   - **Read Time**: Estimated minutes to read
   - **Status**: Choose "Published" to make it visible on the blog
4. Click **"Save"** or **"Save and Publish"**

## Database Setup

Payload CMS will automatically create all necessary database tables on first run:
- `posts` - Blog posts
- `users` - Admin users
- `payload_preferences` - User preferences
- `payload_migrations` - Migration tracking

No manual SQL scripts needed!

## Blog Page Integration

The blog page (`/blog`) now fetches posts from Payload CMS:
- Only displays posts with status = "published"
- Sorted by publish date (newest first)
- Supports filtering by category and tags
- Shows loading and error states

## API Endpoints

### Get All Published Posts
```
GET /api/posts
```

Returns all published blog posts sorted by publish date.

## Troubleshooting

### Can't access admin dashboard
- Make sure `PAYLOAD_SECRET` is set in environment variables
- Check that DATABASE_URL is properly configured
- Restart your development server after adding env vars

### Posts not showing on blog page
- Make sure posts have status = "published"
- Check browser console for API errors
- Verify DATABASE_URL connection

### Database errors
- Ensure Neon database is active and accessible
- Check DATABASE_URL format is correct
- Payload will auto-create tables on first run

## Quick Start Commands

```bash
# Development
npm run dev

# Access admin dashboard
# Open browser: http://localhost:3000/admin

# View blog page
# Open browser: http://localhost:3000/blog
```

## Features Included

- ✅ Rich text editor for blog content
- ✅ Image upload support
- ✅ Category and tag filtering
- ✅ Draft/Published status
- ✅ User authentication
- ✅ SEO-friendly slugs
- ✅ Publish date scheduling
- ✅ Reading time estimation
- ✅ Responsive admin interface

## Next Steps

1. Add `PAYLOAD_SECRET` to your environment variables
2. Start the development server
3. Navigate to `/admin` and create your first user
4. Create your first blog post
5. View it on the `/blog` page

Enjoy your new CMS-powered blog! 🎉
