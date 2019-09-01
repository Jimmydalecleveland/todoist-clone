import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: '',
  authDomain: 'todoist-clone-47a4d.firebaseapp.com',
  databaseURL: 'https://todoist-clone-47a4d.firebaseio.com',
  projectId: 'todoist-clone-47a4d',
  storageBucket: 'todoist-clone-47a4d.appspot.com',
  messagingSenderId: '',
  appId: '',
});

export { firebaseConfig as firebase };
