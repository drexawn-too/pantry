const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createUserDocument = functions.auth.user().onCreate((user) => {
  const newUser = {
    id: user.uid,
    email: user.email,
    name: user.displayName,
    profilePicture: user.photoURL,
  };
  return admin.firestore().collection('users').doc(`${user.uid}`).set(newUser);
});