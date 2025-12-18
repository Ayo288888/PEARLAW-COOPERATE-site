import { buildConfig } from "payload/config"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { fileURLToPath } from "url"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: "- Legal Blog CMS",
      favicon: "/favicon.ico",
    },
  },
  collections: [
    {
      slug: "posts",
      admin: {
        useAsTitle: "title",
        defaultColumns: ["title", "category", "author", "publishedAt", "status"],
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            description: "URL-friendly version of the title",
          },
        },
        {
          name: "excerpt",
          type: "textarea",
          required: true,
          admin: {
            description: "Short description for the blog post",
          },
        },
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor({}),
        },
        {
          name: "featuredImage",
          type: "text",
          required: true,
          admin: {
            description: "URL or path to the featured image",
          },
        },
        {
          name: "category",
          type: "select",
          required: true,
          options: [
            { label: "Legal Tech", value: "Legal Tech" },
            { label: "Contract Law", value: "Contract Law" },
            { label: "Business Law", value: "Business Law" },
            { label: "Regulatory", value: "Regulatory" },
            { label: "IP Law", value: "IP Law" },
            { label: "Corporate", value: "Corporate" },
          ],
        },
        {
          name: "author",
          type: "text",
          required: true,
        },
        {
          name: "publishedAt",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
            },
          },
        },
        {
          name: "readTime",
          type: "number",
          required: true,
          admin: {
            description: "Estimated reading time in minutes",
          },
        },
        {
          name: "status",
          type: "select",
          required: true,
          defaultValue: "draft",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
        },
      ],
    },
    {
      slug: "users",
      auth: true,
      admin: {
        useAsTitle: "email",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "your-secret-key-here",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
})
