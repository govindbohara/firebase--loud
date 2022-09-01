//@ts-check



import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage, } from "firebase/messaging";
import {onBackgroundMessage} from "firebase/messaging/sw"
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBSPPQD4M1anH8uT7Ldh-zevS2lgWoL-9Q",
  authDomain: "notification-cipher-61823.firebaseapp.com",
  projectId: "notification-cipher-61823",
  storageBucket: "notification-cipher-61823.appspot.com",
  messagingSenderId: "185572736284",
  appId: "1:185572736284:web:54928d1587844ac5fc0ed9",
  measurementId: "G-XBZJZJR692"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const messaging = getMessaging(app);
export const getFirebaseToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BG4z48E68RIMUoaxLCJULmW54cCFCRZizpKCvrlnFNnk67wfN-pooKw6dVFqHJHdO_jSpROK5mAOatF7gl6ezI4",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });




