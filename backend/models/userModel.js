import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    addr1: { type: String, required: true},
    addr2: { type: String, required: true},
    city: { type: String, required: true},
    state : { type: String, required: true},
    zipcode: { type: Number, required: true}
});

const userSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  address: addressSchema,
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
},{
  timestamps: true
});

const userModel = mongoose.model("User", userSchema);

export default userModel;