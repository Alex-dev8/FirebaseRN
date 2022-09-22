import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbdlmawymgyeV0Qp76kAiMiigAUgd_oqg',
  authDomain: 'fir-rn-e4748.firebaseapp.com',
  projectId: 'fir-rn-e4748',
  storageBucket: 'fir-rn-e4748.appspot.com',
  messagingSenderId: '1014955757658',
  appId: '1:1014955757658:web:356a406448a17838fd0863',
  measurementId: 'G-7FLN38PVPZ',
};

firebase.initializeApp(firebaseConfig);

export {firebase};
