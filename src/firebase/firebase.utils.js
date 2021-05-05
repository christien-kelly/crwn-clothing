import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; // these imports auto attached to "firebase" import

const config = {
    apiKey: "AIzaSyBE9g72mEowrJ8wsoDlmFQNLNYsND0z68c",
    authDomain: "crwn-db-3157a.firebaseapp.com",
    projectId: "crwn-db-3157a",
    storageBucket: "crwn-db-3157a.appspot.com",
    messagingSenderId: "151533220125",
    appId: "1:151533220125:web:7e7fb1d796c9c2db1c31f4",
    measurementId: "G-RGTQ9575WK"
};

// if firebase has already been initialized.
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()


export const createUserProfileDocument = async (userAuth, additionalData) =>  {
    // if there is no user auth exit.
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        // create a new piece of data
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.table('error creating user', error.message)
        }
    }
    return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// we always want to prompt the user to select an existing account when a user signs in with Google
// rather than entering their email and password.
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;