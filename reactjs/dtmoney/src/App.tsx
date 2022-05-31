import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/Global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen() {
    // handle -> pattern (usuario vai clicar em algo)
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />

      <NewTransactionModal modalIsOpen={isNewTransactionModalOpen} modalIsClose={handleCloseNewTransactionModalOpen} />

      <GlobalStyle />
    </TransactionProvider>
  );
}
