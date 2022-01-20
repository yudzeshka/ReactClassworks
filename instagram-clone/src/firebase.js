import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAyTouyUQhasUk9NiKhJV0ocTENt4Wpg4w',
  authDomain: 'instagram-clone-cc675.firebaseapp.com',
  projectId: 'instagram-clone-cc675',
  storageBucket: 'instagram-clone-cc675.appspot.com',
  messagingSenderId: '732401914563',
  appId: '1:732401914563:web:011b5f3539fe2b69374876',
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { firebase, auth, db, storage };
