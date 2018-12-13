/* jshint esversion:6 */

importScripts('https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js');


// PUSH NOTIFICATIONS HANDLING WITH THE 
// PUSH NOTIFICATIONS HANDLER FUNCTION
//--------------------------------------------------

var config = {
    apiKey: "AIzaSyDryHHDNLsAV3JI2m8v2kYz0XifUHeAipQ",
    authDomain: "mypwa-583da.firebaseapp.com",
    databaseURL: "https://mypwa-583da.firebaseio.com",
    projectId: "mypwa-583da",
    storageBucket: "mypwa-583da.appspot.com",
    messagingSenderId: "340354538395"
};
firebase.initializeApp(config)

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});