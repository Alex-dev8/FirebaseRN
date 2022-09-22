import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbdlmawymgyeV0Qp76kAiMiigAUgd_oqg',
  authDomain: 'fir-rn-e4748.firebaseapp.com',
  projectId: 'fir-rn-e4748',
  storageBucket: 'fir-rn-e4748.appspot.com',
  messagingSenderId: '1014955757658',
  appId: '1:1014955757658:web:356a406448a17838fd0863',
  measurementId: 'G-7FLN38PVPZ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
