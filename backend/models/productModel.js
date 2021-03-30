import mongose from "mongoose";

const itemSchema = new mongose.Schema({
  name: { type: String, required: true },
});

const itemModel = mongose.model("Item", itemSchema);

export default itemModel;
