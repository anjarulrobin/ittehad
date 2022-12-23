// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FCM_API_KEY,
    authDomain: process.env.REACT_APP_FCM_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FCM_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FCM_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FCM_SENDER_ID,
    appId: process.env.REACT_APP_FCM_APP_ID,
    measurementId: process.env.REACT_APP_FCM_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission()
        .then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            }
        })
        .catch((err) => console.error('Notification granting error', err))
        .finally(() => console.log('Done'))
}

export function initFCM() {
    requestPermission();

    getToken(messaging, { vapidKey: process.env.REACT_APP_FCM_VAPID_KEY })
        .then((currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                console.log('Found token', currentToken);

            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        })
        .finally(() => console.log('FCM registration completed'));

}
export default app;