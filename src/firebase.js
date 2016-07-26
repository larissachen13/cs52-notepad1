import Firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyAFeR-fhNNKgGWgD4QegvcvKAx5yaVOUAI',
  authDomain: 'lc-notepad.firebaseapp.com',
  databaseURL: 'https://lc-notepad.firebaseio.com',
  storageBucket: '',
}; Firebase.initializeApp(config);
const database = Firebase.database();
const notesRef = database.ref('notes');
const zRef = database.ref('zInd');

const provider = new Firebase.auth.GoogleAuthProvider();

// export function signIn(callback1, callback2) {
//   Firebase.auth().signInWithPopup(provider).then((result) => {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken;
//
//     const user = result.user;
//     console.log('here');
//     fetchNotes(callback1, callback2);
//   })
//     .catch((error) => {
//   // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//   // The email of the user's account used.
//       const email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//       const credential = error.credential;
//   // ...
//     });
// }

export function fetchNotes(callback) {
  notesRef.on('value', (snapshot) => {
    callback(snapshot);
  });
}

export function fetchZind(callback) {
  zRef.on('value', (snapshot) => {
    callback(snapshot);
  });
}

export function updateZ(zind) {
  zRef.set({ zind });
}

export function submitNote(note) {
  notesRef.push(note);
}

export function deleteNote(id) {
  notesRef.child(id).remove();
}

export function updateNote(id, updatedFields) {
  notesRef.child(id).update(updatedFields);
}
