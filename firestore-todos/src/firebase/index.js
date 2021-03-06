import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const {
	VITE_API_KEY,
	VITE_AUTH_DOMAIN,
	VITE_PROJECT_ID,
	VITE_STORAGE_BUCKET,
	VITE_MESSAGING_SENDER_ID,
	VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
	apiKey: VITE_API_KEY,
	authDomain: VITE_AUTH_DOMAIN,
	projectId: VITE_PROJECT_ID,
	storageBucket: VITE_STORAGE_BUCKET,
	messagingSenderId: VITE_MESSAGING_SENDER_ID,
	appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get firebase auth instanse
const auth = getAuth()

// get firebase firestore instance
const db = getFirestore(app);

export { app as default, db, auth };
