const NavBar = () => {
      return(
          <nav className='navbar'>
              <h1>Logo</h1>
              <div className='links'>
                  <a href='/'>Home</a>
                  |
                  <a href='/auctionindex'>Auctions</a>
                  |
                  <a href='/newauctionform'>New Auction</a>
                  |
                  <a href='/sign_in'>Sign in</a>
              </div>
          </nav>
      );
  }
  
  export default NavBar;