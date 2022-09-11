import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    sendername: { type: String, required: true },
    status: { type: String, default: "unread" },
    destination: { type: String, required: true },

    sent: { type: Boolean, default: true },
  },
  { timestamps: true }
);
export default mongoose.model("Email", EmailSchema);
