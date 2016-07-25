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
