importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: 'AIzaSyBGX96MisY8l9xoiUL92AV7appSjQwRbFI',
    authDomain: "ittehad-b28ec.firebaseapp.com",
    databaseURL: "https://lorem.firebaseio.com",
    projectId: "ittehad-b28ec",
    storageBucket: "ittehad-b28ec.appspot.com",
    messagingSenderId: "9512057650",
    appId: "1:9512057650:web:62302bec9aee5e3177f52b",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// messaging.setBackgroundMessage(function (payload) {
//     console.log('Received background message ', payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });
console.log(messaging)