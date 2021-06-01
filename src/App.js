import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { setCurrentUser } from  './redux/user/user.actions';

import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructure house  
    const { setCurrentUser } = this.props;
    // we want firebase to know whenever the authentication state changes, so whenever anyone signs in
    // whenever anyone signs out.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // check if our db has updated with any new data
        const userRef = await createUserProfileDocument(userAuth);

        // view snapshot of current db | allows us  to get properties off of data.
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          });

        });
      } else {
        setCurrentUser(userAuth); // sets the current user value to null
      }
    });
  }

  componentWillUnmount()  {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  } 
}

const mapDispatchToProps  = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);