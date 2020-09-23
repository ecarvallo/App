import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCaxw-I3z-kgdxCJ3edsabc1ZJZAPSDvdU",
    authDomain: "alzhistant-test.firebaseapp.com",
    databaseURL: "https://alzhistant-test.firebaseio.com",
    projectId: "alzhistant-test",
    storageBucket: "alzhistant-test.appspot.com",
    messagingSenderId: "652824578922",
    appId: "1:652824578922:web:68f0df8f5fe2a3cbdc3313"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);