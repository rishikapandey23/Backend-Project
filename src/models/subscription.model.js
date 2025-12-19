import mongoose, { Schema } from 'mongoose';

const SubscriptionSchema = new Schema(
  {
    subscriber :{
      type: Schema.Types.ObjectId, // User who is subscribing
      ref : "user",
    },
    channel : {
      type: Schema.Types.ObjectId, // User who is being subscribed to
      ref : "user",
    }
   }, { timestamps: true })
  
export const Subscription = mongoose.model("subscription", SubscriptionSchema);