import firebase from 'firebase/app';
import 'firebase/firestore';
import { useParams } from 'react-router';

const firestore = firebase.firestore();


// get us the collection of users 
// of the specific user id 
// then call cart items of that user 
// and call the cartItems of the specific user's id
firestore.collection('users').doc('lGYBAlBhdaQbeoUyYgnv').collection('cartItems').doc('DecBwRd2pKL1LWyr6fiL');

// other ways to get documents and collections 
firestore.doc('/users/lGYBAlBhdaQbeoUyYgnv/cartItems/DecBwRd2pKL1LWyr6fiL');
firestore.collection('/users/lGYBAlBhdaQbeoUyYgnv/cartItems');