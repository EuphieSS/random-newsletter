import mongoose, { Schema, model, models } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: newsletter_subscriptions,
    useNewUrlParser: true, //a workaround mongoose deprecation warning
    useUnifiedTopology: true, //a workaround mongoose deprecation warning
  })
  .then(() => console.log("connected to DB!"))
  .catch((error) => console.log(error));

const SubscriptionSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
});

const Subscription =
  models.Subscription || model("Subscription", SubscriptionSchema);

export default Subscription;
