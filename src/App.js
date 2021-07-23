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
import Artist from './components/Artist/Artist';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  cache : new InMemoryCache(),
  uri : "https://spotify-graphql.up.railway.app/query"
})

function App() {
  return (
    <ApolloProvider client={client}>
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
              component={Artist}
            />
          </div>
    </Router>
    </ApolloProvider>
    
  );
}

export default App;
