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
  appId: "1:634066080703:web:b50ba9f7e046762b50870a",
  measurementId: "G-8ZL4SHLLCP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;