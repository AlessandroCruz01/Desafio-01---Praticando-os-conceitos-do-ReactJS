import express from "express";
import { TransactionsController } from "../controllers/transactionsController.js";

const router = express.Router();

router
	.get("/transactions", TransactionsController.getAllTransactions)
	.post("/transactions", TransactionsController.createTransaction)
	.delete("/transactions/:id", TransactionsController.deleteTransaction);

export default router;
