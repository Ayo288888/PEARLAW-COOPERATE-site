import { NextResponse } from "next/server"
import { getPayload } from "@/lib/payload"

export async function GET() {
  try {
    const payload = await getPayload()

    const posts = await payload.find({
      collection: "posts",
      where: {
        status: {
          equals: "published",
        },
      },
      sort: "-publishedAt",
      limit: 100,
    })

    return NextResponse.json(posts.docs)
  } catch (error) {
    console.error("[v0] Error fetching posts:", error)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}
