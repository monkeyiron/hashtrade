import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * api.inquiries.create — Handles new contact form submissions
 */
export const create = mutation({
  args: {
    topic: v.string(),
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Insert new inquiry with a 'new' status
    return await ctx.db.insert("contactInquiries", {
      ...args,
      status: "new",
    });
  },
});
