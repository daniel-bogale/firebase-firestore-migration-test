import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// import { getAnalytics } from "firebase/analytics";


console.log(process.env.NODE_ENV);

const mode = process.env.NODE_ENV;

console.log(mode);

console.log(process.env.REACT_APP_SOME_KEY)

console.log(JSON.stringify(process.env));



const firebaseConfig =
  mode === "production"
    ?
    {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY_PROD,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_PROD,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_PROD,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_PROD,
      messagingSenderId: process.env
        .REACT_APP_FIREBASE_MESSAGING_SENDER_ID_PROD,
      appId: process.env.REACT_APP_FIREBASE_APP_ID_PROD,
    }: {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY_DEV,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV,
        messagingSenderId: process.env
          .REACT_APP_FIREBASE_MESSAGING_SENDER_ID_DEV,
        appId: process.env.REACT_APP_FIREBASE_APP_ID_DEV,
      }

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
