import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    validate: async (value) => {
      try {
        const result = await Client.findOne({ email: value });
        if (result) throw new Error("Duplicate Email Detected :" + value);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  phone: {
    type: String,
    unique: true,
    validate: async (value) => {
      try {
        const result = await Client.findOne({ phone: value });
        if (result) throw new Error("Duplicate Phone Detected :" + value);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;
