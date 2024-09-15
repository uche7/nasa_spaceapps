// Import Firebase libraries
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker
const firebaseConfig={
  apiKey: "AIzaSyDNdfMRMKHHB5IHRQaRUDRe4SqQ8GS2uwc",
  authDomain: "push-notifications-9a1d7.firebaseapp.com",
  projectId: "push-notifications-9a1d7",
  storageBucket: "push-notifications-9a1d7.appspot.com",
  messagingSenderId: "169911970572",
  appId: "1:169911970572:web:e1347c5b42cbcb6c6ef729"
};

// Retrieve an instance of Firebase Messaging



// Handle background messages
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
