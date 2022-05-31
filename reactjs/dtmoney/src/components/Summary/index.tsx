import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container } from './styles';

export const Summary: React.FC = () => (
  <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="entradas" />
      </header>

      <strong>R$ 1000, 00</strong>
    </div>

    <div>
      <header>
        <p>Entradas</p>
        <img src={outcomeImg} alt="entradas" />
      </header>

      <strong>- R$ 1000, 00</strong>
    </div>

    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={total} alt="entradas" />
      </header>

      <strong>R$ 1000, 00</strong>
    </div>
  </Container>
);
