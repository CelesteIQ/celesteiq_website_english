// models/blog.ts
import { Schema, model, models, InferSchemaType } from "mongoose"

const blogSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        summary: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String, // image URL
            required: true,
            trim: true,
        },

        content: {
            type: String,
            trim: true,
            default: "",
        },

        // /blog/the-future-of-ai-in-business
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

    },
    {
        timestamps: true,
    }
)

export const Blog = models.Blog || model("Blog", blogSchema)

export type BlogDocument = InferSchemaType<typeof blogSchema>
