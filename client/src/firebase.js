import _get from 'lodash/get';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { switchMap, filter, shareReplay } from 'rxjs/operators';
import { collectionData } from 'rxfire/firestore';
import { authState } from 'rxfire/auth';

// initializtion
firebase.initializeApp({
  apiKey: 'AIzaSyCwFaq64eue1E3EtBvS5cj-5wlE7UmsotY',
  authDomain: 'pant-ry.firebaseapp.com',
  databaseURL: 'https://pant-ry.firebaseio.com',
  projectId: 'pant-ry',
  storageBucket: 'pant-ry.appspot.com',
  messagingSenderId: '653562734879',
  appId: '1:653562734879:web:90fdd22c96aa1968f8282a',
});
const auth = firebase.auth();
const firestore = firebase.firestore();
const recipesCollectionRef = firestore.collection('recipes');

// authentication
export const user$ = authState(auth).pipe(shareReplay(1));
export const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
export const signOut = () => auth.signOut();

// firestore
export const recipeCollection$ = user$.pipe(
  filter((user) => user !== null),
  switchMap((user) => collectionData(recipesCollectionRef.where('authorId', '==', user.uid).orderBy('createdAt')))
);

export const createRecipe = (value) => {
  const userId = validateUserSignedIn();
  const newRecipe = {
    id: uuidv4(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    authorId: userId,
    value,
  };
  recipesCollectionRef.doc(newRecipe.id).set(newRecipe);
};

export const deleteRecipe = (id) => {
  validateUserSignedIn();
  recipesCollectionRef.doc(id).delete();
};

const validateUserSignedIn = () => {
  const userId = _get(auth.currentUser, 'uid');
  if (!userId) {
    throw new Error('User must be signed in');
  }
  return userId;
}
