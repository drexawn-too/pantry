import uuidv4 from 'uuid/v4';
import firebase from 'firebase/app';
import 'firebase/firestore';

// initialize Firebase
firebase.initializeApp({ projectId: 'pant-ry' });

export const FIRESTORE = firebase.firestore();

export const connectItems = (callback) => FIRESTORE.collection('items').onSnapshot(snapshot => {
  const itemsCollection = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  callback(itemsCollection);
});

export const createItem = (value) => {
  const newItem = {
    id: uuidv4(),
    created_at: Date.now(),
    value,
  };
  FIRESTORE.doc(`items/${newItem.id}`).set(newItem);
}

export const removeItem = (id) => {
  FIRESTORE.doc(`items/${id}`).delete();
}
