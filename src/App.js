import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Greetings from './components/Greetings/Greetings';
import CardList from './components/CardList/CardList';
import QuickHeader from './components/QuickHeader/QuickHeader';
import SmallCardList from './components/SmallCardList/SmallCardList';
import Home from './components/Home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Favourite from './components/Favourite/Favourite';


function App() {
  return (
    <Router>
      <div className="overlay">
            <Route
              path="/" exact
              component={Home}
            />
            <Route
              path="/fav" exact
              component={Favourite}
            />
            <Route
              path="/artist/:artist" exact
              component={Favourite}
            />

            
            
          </div>
    </Router>
    
  );
}

export default App;
