import express from "express";
import transactionRouter from "./transactionsRoutes.js";

const routes = (app) => {
	app.route("/").get((req, res) => {
		res.status(200).send({ message: "Backend dtMoney" });
	});

	app.use(express.json(), transactionRouter);
};

export default routes;
