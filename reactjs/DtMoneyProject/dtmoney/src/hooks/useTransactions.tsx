import {
  createContext, useState, useEffect, ReactNode, useContext,
} from "react";
import { api } from "../services/api";

interface TransactionProps {
    _id: string,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransactionProviderProps {
    children: ReactNode
}
interface TransactionInput {
    title: string,
    amount: number,
    type: string,
    category: string,
}

interface TransactionsContextDataProps {
    transactions: TransactionProps[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
    deleteTransaction: (id:string) => Promise<void>
}

// Context
const TransactionContext = createContext<TransactionsContextDataProps>({} as TransactionsContextDataProps);

// Provider
export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then((response) => setTransactions(response.data));
  }, []);

  // create transactions
  async function createTransaction(transactionInput:TransactionInput) {
    const response = await api.post('/transactions', { ...transactionInput });
    const newRequestPost = response.data;

    setTransactions([...transactions, newRequestPost]);
  }

  // delete transaction
  async function deleteTransaction(id: string) {
    await api.delete(`/transactions/${id}`);
    await api.get('/transactions').then((response) => setTransactions(response.data));
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}
