// app/api/blog/route.ts
import { NextRequest, NextResponse } from "next/server"
import { DBconnection } from "@/config/DbConnection"
import { Blog } from "@/models/blog"

DBconnection()

const generateSlug = (title: string) =>
    title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")

// CREATE BLOG
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const { category, title, summary, image, content, buttonText } = body

        if (!category || !title || !summary || !image) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Missing required fields.",
                    requiredFields: ["category", "title", "summary", "image"],
                },
                { status: 400 }
            )
        }

        const slug = generateSlug(title)

        const blog = await Blog.create({
            category,
            title,
            summary,
            image,
            content: content ?? "",
            slug,
            buttonText: buttonText || "Read More",
        })

        return NextResponse.json(
            {
                success: true,
                message: "Blog created successfully.",
                data: blog,
            },
            { status: 201 }
        )
    } catch (error) {
        console.error("Error creating blog:", error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while creating the blog.",
            },
            { status: 500 }
        )
    }
}

// GET ALL BLOGS
export async function GET() {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 })

        return NextResponse.json(
            {
                success: true,
                data: blogs,
            },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error fetching blogs:", error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while fetching blogs.",
            },
            { status: 500 }
        )
    }
}
