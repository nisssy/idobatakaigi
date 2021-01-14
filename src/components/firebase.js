import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2vmj6zq_lKQfZWUMJo0I9F9IzPn9A1_w",
    authDomain: "idobatakaigi-fcc9d.firebaseapp.com",
    projectId: "idobatakaigi-fcc9d",
    storageBucket: "idobatakaigi-fcc9d.appspot.com",
    messagingSenderId: "1012643197454",
    appId: "1:1012643197454:web:2d7f331ba7cbdbbd00025f"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
    messageRef.push({name, text, })
}