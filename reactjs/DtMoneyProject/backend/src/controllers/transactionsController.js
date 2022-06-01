import { transactions } from "../models/Transactions.js";

export class TransactionsController {
	static getAllTransactions = (req, res) => {
		transactions.find((err, transactions) => {
			res.status(200).json(transactions);
		});
	};

	static createTransaction = (req, res) => {
		const transaction = new transactions(req.body);

		transaction.save((err) => {
			err
				? res.status(500).json({ message: `Erro -> ${err}` })
				: res.status(201).send(transaction.toJSON());
		});
	};

	static deleteTransaction = (req, res) => {
		const id = req.params.id;

		transactions.findByIdAndDelete(id, (err) => {
			err
				? res.status(500).send({ message: `Erro: ${err}` })
				: res.status(200).send({ message: "Transaçao removido" });
		});
	};
}
