import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBS0nCnPCcy7HkKSDMpzXAUJlRZArUSod8',
  authDomain: 'web3-test-one.firebaseapp.com',
  projectId: 'web3-test-one',
  storageBucket: 'web3-test-one.appspot.com',
  messagingSenderId: '767672873666',
  appId: '1:767672873666:web:222fab583959ef4d2e015b',
  measurementId: 'G-J5B9SNT81Z',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
