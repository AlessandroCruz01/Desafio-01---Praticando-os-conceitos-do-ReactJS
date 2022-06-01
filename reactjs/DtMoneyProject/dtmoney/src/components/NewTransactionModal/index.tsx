import React, { FormEvent, useState, useContext } from 'react';

import Modal from 'react-modal';

import { Container, TransactionTypeContainer, ButtonType } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    modalIsOpen: boolean,
    modalIsClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ modalIsOpen, modalIsClose }) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setCategory('');
    setAmount(0);
    setType('deposit');
    modalIsClose();
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={modalIsClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={modalIsClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>

          <ButtonType
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Botao de entrada" />
            <span>Entrada</span>

          </ButtonType>

          <ButtonType
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"

          >
            <img src={outcomeImg} alt="Botao de saida" />
            <span>Saida</span>

          </ButtonType>

        </TransactionTypeContainer>

        <select onChange={(e) => setCategory(e.target.value)} defaultValue="" required>
          <option value="" disabled>Selecione</option>
          <option value="Transporte">Transporte</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Salário">Salário</option>
          <option value="Doação">Doação</option>
          <option value="Imprevistos">Imprevistos</option>
          <option value="Outros">Outros</option>
        </select>

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  );
};
