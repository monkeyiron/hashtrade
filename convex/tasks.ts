import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * api.tasks.get — real-time query subscribed by useQuery()
 * Used for verifying Convex connectivity.
 */
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").take(100);
  },
});

/**
 * api.tasks.create — inserts a new task
 */
export const create = mutation({
  args: {
    text: v.string(),
    isCompleted: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tasks", args);
  },
});

/**
 * api.tasks.toggle — toggles completion state
 */
export const toggle = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, { id }) => {
    const task = await ctx.db.get(id);
    if (!task) throw new Error(`Task ${id} not found`);
    await ctx.db.patch(id, { isCompleted: !task.isCompleted });
  },
});
