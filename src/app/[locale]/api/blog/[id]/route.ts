import { NextRequest, NextResponse } from "next/server"
import { DBconnection } from "@/config/DbConnection"
import { Blog } from "@/models/blog"

DBconnection()

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        // ✅ unwrap params with await
        const { id } = await context.params

        if (!id) {
            return NextResponse.json(
                { success: false, message: "Blog ID is required." },
                { status: 400 }
            )
        }

        const deleted = await Blog.findByIdAndDelete(id)

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Blog not found." },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { success: true, message: "Blog deleted successfully." },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error deleting blog:", error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while deleting the blog.",
            },
            { status: 500 }
        )
    }
}
