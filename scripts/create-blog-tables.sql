-- This script will be automatically run by Payload CMS
-- Payload will create all necessary tables for the blog posts and users collections
-- Including: posts, users, payload_preferences, payload_migrations tables

-- You don't need to manually create tables as Payload handles this automatically
-- This file is here for reference only

-- The posts table will include:
-- - id (primary key)
-- - title
-- - slug (unique)
-- - excerpt
-- - content (rich text)
-- - featuredImage
-- - category
-- - author
-- - publishedAt
-- - readTime
-- - status
-- - createdAt
-- - updatedAt

-- The users table will include:
-- - id (primary key)
-- - email (unique)
-- - password (hashed)
-- - name
-- - createdAt
-- - updatedAt
