const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const usersCollectionRef = admin.firestore().collection('users');

// create user document when user is created
exports.createUserDocument = functions.auth.user().onCreate((user) => {
  const newUser = {
    id: user.uid,
    email: user.email,
    name: user.displayName,
    profilePicture: user.photoURL,
  };
  return usersCollectionRef.doc(`${user.uid}`).set(newUser);
});

// delete user document when user is deleted
exports.deleteUserDocument = functions.auth.user().onDelete((user) => {
  return usersCollectionRef.doc(`${user.uid}`).delete();
});