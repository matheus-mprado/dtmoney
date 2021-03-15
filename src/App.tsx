import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleToggleNewTransactionModal(){
      setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleToggleNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleNewTransactionModal}
      />
    </>
  );
}
