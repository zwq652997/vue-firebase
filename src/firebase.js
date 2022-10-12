import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBS0nCnPCcy7HkKSDMpzXAUJlRZArUSod8',
//   authDomain: 'web3-test-one.firebaseapp.com',
//   projectId: 'web3-test-one',
//   storageBucket: 'web3-test-one.appspot.com',
//   messagingSenderId: '767672873666',
//   appId: '1:767672873666:web:222fab583959ef4d2e015b',
//   measurementId: 'G-J5B9SNT81Z',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyC8ca7gOLBWWqlM_ABpx4cIPSzmIl6-bH0',
  authDomain: 'finder-b6344.firebaseapp.com',
  projectId: 'finder-b6344',
  storageBucket: 'finder-b6344.appspot.com',
  messagingSenderId: '409414677389',
  appId: '1:409414677389:web:d84fd9a8760da2be61c3c4',
  measurementId: 'G-X92213RSM9',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
