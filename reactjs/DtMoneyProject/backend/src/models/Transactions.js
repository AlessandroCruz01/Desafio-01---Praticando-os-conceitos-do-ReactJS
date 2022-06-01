import mongoose from "mongoose";

const TransactionsSchema = new mongoose.Schema(
	{
		id: { type: Number },
		title: { type: String, required: true },
		amount: { type: Number, required: true },
		type: { type: String, required: true },
		category: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

export const transactions = mongoose.model("transactions", TransactionsSchema);
