import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createNewuser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        clerk_user_id: v.string(),
        image_url: v.string()
    },
    handler: async(ctx, args)=>{
        const user = await ctx.db.query('user_table')
        .filter((q)=> q.eq(q.field('email'), args.email))
        .collect()

        if(user?.length === 0) {
            const userDataa = {
                name: args.name,
                email: args.email,
                clerk_user_id: args.clerk_user_id,
                image_url: args.image_url
            }

            const newUser = ctx.db.insert('user_table', userDataa)

            return newUser
        }

        return user[0]
    },

})