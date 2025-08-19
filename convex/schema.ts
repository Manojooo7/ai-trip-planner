import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    user_table: defineTable({
        name: v.string(),
        email: v.string(),
        clerk_user_id: v.string(),
        image_url: v.string(),
        subscription: v.optional(v.string())
    })
})