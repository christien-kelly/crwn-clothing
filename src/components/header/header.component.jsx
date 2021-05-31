import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
            SHOP
            </Link>
            <Link className='option' to='/contact'>
            CONTACT
            </Link>
            {
              currentUser ?
              <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
              :
              <Link className='option' to='/signin'>SIGN IN</Link>  
            }
        </div>
    </div>
);

// we pass a function that allows us to access the state which is the root Reducer. 
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);