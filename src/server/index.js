import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_LWozN3M_kpViGie5s0H8nqtIR9VeNvY",
  authDomain: "gilos-a3d08.firebaseapp.com",
  projectId: "gilos-a3d08",
  storageBucket: "gilos-a3d08.appspot.com",
  messagingSenderId: "646104535473",
  appId: "1:646104535473:web:9b7ffa748dedc0cffbed90",
  measurementId: "G-GQ8FKV11QB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)