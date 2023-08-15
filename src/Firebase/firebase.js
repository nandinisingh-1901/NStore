import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/Actions/product";
import { setLocalData } from "../helpers/utils";

const firebaseConfig = {
  apiKey: "AIzaSyAVAIegUOJi6WtEiWQ1A4zxEg1LI6PueBI",
  authDomain: "nstore-e8d46.firebaseapp.com",
  projectId: "nstore-e8d46",
  storageBucket: "nstore-e8d46.appspot.com",
  messagingSenderId: "281974336290",
  appId: "1:281974336290:web:6a52c99c6dc6369835537b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = (callBack) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setLocalData("user", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      });
      callBack(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened.");
    });
};

export default app;
