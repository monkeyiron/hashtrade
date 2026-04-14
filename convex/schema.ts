import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Hashtrade — Convex Database Schema
 *
 * All tables are defined here with validators and indexes.
 * Run `npx convex dev` to sync with the cloud deployment.
 * Deployment: https://curious-frog-938.convex.cloud
 */
export default defineSchema({
  // Example: tasks table for initial connectivity testing
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  contactInquiries: defineTable({
    topic: v.string(),
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    status: v.union(v.literal("new"), v.literal("read"), v.literal("archived")),
  }),
});
