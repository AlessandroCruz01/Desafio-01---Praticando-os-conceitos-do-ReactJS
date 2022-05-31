import React, { FormEvent, useState } from 'react';

import Modal from 'react-modal';

import { Container, TransactionTypeContainer, ButtonType } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    modalIsOpen: boolean,
    modalIsClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ modalIsOpen, modalIsClose }) => {
  const [type, setType] = useState('deposit');

  const [newTransactionTitle, setNewTransactionTitle] = useState('');
  const [newTransactionValue, setNewTransactionValue] = useState(0);
  const [newTransactionCategory, setNewTransactionCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      newTransactionTitle,
      newTransactionValue,
      type,
      newTransactionCategory,
    };

    api.post('/transactions', data);
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
          value={newTransactionTitle}
          onChange={(e) => setNewTransactionTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={newTransactionValue}
          onChange={(e) => setNewTransactionValue(Number(e.target.value))}
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

        <input
          type="text"
          placeholder="Categoria"
          value={newTransactionCategory}
          onChange={(e) => setNewTransactionCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  );
};
