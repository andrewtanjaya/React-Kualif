import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Greetings from './components/Greetings/Greetings';
import CardList from './components/CardList/CardList';
import QuickHeader from './components/QuickHeader/QuickHeader';
import SmallCardList from './components/SmallCardList/SmallCardList';

function App() {
  return (
    <div>
      <div className="overlay">
        <Header></Header>
        <Greetings></Greetings>
        <CardList></CardList>
        <QuickHeader></QuickHeader>
        <SmallCardList></SmallCardList>
      </div>
    </div>
  );
}

export default App;
