import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCwFaq64eue1E3EtBvS5cj-5wlE7UmsotY',
  authDomain: 'pant-ry.firebaseapp.com',
  databaseURL: 'https://pant-ry.firebaseio.com',
  projectId: 'pant-ry',
  storageBucket: 'pant-ry.appspot.com',
  messagingSenderId: '653562734879',
  appId: '1:653562734879:web:90fdd22c96aa1968f8282a',
};
firebase.initializeApp(firebaseConfig);

export const AUTH = firebase.auth();
export const FIRESTORE = firebase.firestore();

export const signInWithGoogle = () => AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
export const signOut = () => AUTH.signOut();

export const RECIPES_REF = FIRESTORE.collection('recipes');

export const connectRecipes = (userId, callback) => RECIPES_REF
  .where('author_id', '==', userId)
  // TODO re-enable when composite key is created
  // .orderBy('created_at')
  .onSnapshot((snapshot) => {
    const recipeCollection = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(recipeCollection);
  });

export const createRecipe = (value, authorId) => {
  const newRecipe = {
    id: uuidv4(),
    created_at: firebase.firestore.FieldValue.serverTimestamp(),
    author_id: authorId,
    value,
  };
  RECIPES_REF.doc(newRecipe.id).set(newRecipe);
};

export const deleteRecipe = (id) => {
  RECIPES_REF.doc(id).delete();
};
