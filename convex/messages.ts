import { query } from "./_generated/server";
import { v } from "convex/values";
import { components } from "./_generated/api";
import { paginationOptsValidator } from "convex/server";
import { listUIMessages, syncStreams, vStreamArgs } from "@convex-dev/agent";

export const listThreadMessages = query({
  args: {
    threadId: v.string(),
    paginationOpts: paginationOptsValidator,
    streamArgs: vStreamArgs,
  },
  handler: async (ctx, args) => {
    // We pass the string ID; listUIMessages can resolve it.
    const paginated = await listUIMessages(ctx, components.agent, {
      ...args,
      threadId: args.threadId as any,
    });
    const streams = await syncStreams(ctx, components.agent, {
      ...args,
      threadId: args.threadId as any,
    });
    return { ...paginated, streams };
  },
});
