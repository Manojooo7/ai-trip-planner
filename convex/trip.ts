import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createTrip = mutation({
    args: {
        trip_id: v.string(),
        trip_details: v.any(),
        uid: v.id('user_table')
    },
    handler: async(ctx, args)=>{
        const tripDetails = {
            trip_id: args.trip_id,
            trip_details: args.trip_details,
            uid: args.uid
        }

        const newTrip = ctx.db.insert('trip', tripDetails)

        return newTrip
    },

})