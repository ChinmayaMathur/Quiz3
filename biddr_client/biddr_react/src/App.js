import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuctionIndex from './components/AuctionIndex';
import AuctionShow from './components/AuctionShow';
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import CreateAuction from './components/CreateAuction';

function App() {
  return ( 
      <Router>
        <NavBar />
          <div className='content' />
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/auctionindex'>
            <AuctionIndex />
          </Route>
          <Route path='/auctionshow/:id'>
            <AuctionShow />
          </Route>
          <Route path='/createauction/'>
            <CreateAuction />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;