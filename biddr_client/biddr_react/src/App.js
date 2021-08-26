import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuctionIndex from './components/AuctionIndex';
import AuctionShow from './components/AuctionShow';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import NewAuctionForm from './components/NewAuctionForm';

function App() {
  return ( 
      <Router>
            <NavBar />
            <div className='content' />
            <Switch>
                  <Route exact path='/'>
                        <Welcome />
                  </Route>
                  <Route path='/sign_in'>
                        <SignIn />
                  </Route>
                  <Route path='/auctionindex'>
                        <AuctionIndex />
                  </Route>
                  <Route path='/auctionshow/:id'>
                        <AuctionShow />
                  </Route>
                  <Route path='/newauctionform/'>
                        <NewAuctionForm />
                  </Route>
            </Switch>
      </Router>
  );
}

export default App;