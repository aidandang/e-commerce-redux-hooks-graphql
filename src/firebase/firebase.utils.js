import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8KNeZukYL5PZh4IRJoPrAOBQiGeKBviE",
  authDomain: "e-commerce-redux-hooks-graphql.firebaseapp.com",
  databaseURL: "https://e-commerce-redux-hooks-graphql.firebaseio.com",
  projectId: "e-commerce-redux-hooks-graphql",
  storageBucket: "e-commerce-redux-hooks-graphql.appspot.com",
  messagingSenderId: "634066080703",
  appId: "1:634066080703:web:7306a18838edb84950870a",
  measurementId: "G-VM9DWD893N"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    } 
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;