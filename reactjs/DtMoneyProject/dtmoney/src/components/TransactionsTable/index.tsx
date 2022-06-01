/* eslint-disable no-underscore-dangle */
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((transaction) => (

            // eslint-disable-next-line no-underscore-dangle
            <tr key={transaction._id}>
              <td>{transaction.title}</td>

              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}

              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
              </td>

              <td>
                <button type="button" onClick={() => deleteTransaction(transaction._id)}>
                  <MdOutlineDeleteForever />
                </button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  );
};
