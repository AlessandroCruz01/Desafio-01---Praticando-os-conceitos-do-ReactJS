import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce((acc, transactions) => {
    if (transactions.type === 'deposit') {
      acc.deposits += transactions.amount;
      acc.total += transactions.amount;
    } else {
      acc.withdraws += transactions.amount;
      acc.total -= transactions.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
          }).format(sumary.deposits)}

        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>

        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
          }).format(sumary.withdraws)}

        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
};
