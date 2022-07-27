import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyA_kZYOf-nwuI-2ZNB4w8SJBsvHje-d94A",
	authDomain: "netflix-clone-b435f.firebaseapp.com",
	projectId: "netflix-clone-b435f",
	storageBucket: "netflix-clone-b435f.appspot.com",
	messagingSenderId: "274040819208",
	appId: "1:274040819208:web:dab7c62e985321c7850bbd",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword };
export default db;

/*
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});
	
*/
