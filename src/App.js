import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Footer from './components/Footer';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
