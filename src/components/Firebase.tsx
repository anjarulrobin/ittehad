import { getToken, MessagePayload, onMessage } from "firebase/messaging";
import { messaging } from "../config/firebase";

function getFCMToken() {
    return getToken(messaging, { vapidKey: process.env.REACT_APP_FCM_VAPID_KEY }).then((currentToken) => {
        if (currentToken) {
            localStorage.setItem('fcmtoken', currentToken);
            // setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            // setTokenFound(false);
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = (): Promise<MessagePayload> =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

export const initFCM = () => {
    getFCMToken().finally(() => console.log('FCM initiated'));
}