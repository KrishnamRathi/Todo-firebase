import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAwB3WqgMTqtytnUw2bxYlT1k37-Vgvb5Y",
    authDomain: "todo-9273f.firebaseapp.com",
    databaseURL: "https://todo-9273f.firebaseio.com",
    projectId: "todo-9273f",
    storageBucket: "todo-9273f.appspot.com",
    messagingSenderId: "914072737880",
    appId: "1:914072737880:web:fbfe39a40f218a2f20522d",
    measurementId: "G-QEQLSTRLPR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };




