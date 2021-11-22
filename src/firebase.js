import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const fireBaseApp = initializeApp({
   apiKey: "AIzaSyApiuMmWPYhU-kgkHE4mh0s_ufEPY_Octo",

   authDomain: "piatto-58633.firebaseapp.com",

   projectId: "piatto-58633",

   storageBucket: "piatto-58633.appspot.com",

   messagingSenderId: "240249948838",

   appId: "1:240249948838:web:93b1a38641a24b15568267",

   measurementId: "G-2FCCXJYN05"

})

export const auth = getAuth(fireBaseApp);