// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBjmQCVr-u_qsoPeDHsvTjEB6px08OcXw",
  authDomain: "crown-clothing-db-e9472.firebaseapp.com",
  projectId: "crown-clothing-db-e9472",
  storageBucket: "crown-clothing-db-e9472.appspot.com",
  messagingSenderId: "883915763398",
  appId: "1:883915763398:web:99a4496e10a75f5d6771c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, { displayName, email, createdAt})
        } catch(error){
            console.error('error creating the user', error.message)
        }
    }

    return userDocRef
}