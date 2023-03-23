importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyBtaBa-QSw-k8JIZB5CujqTGpCxBxHm0Jk",
  authDomain: "northern-bliss-318216.firebaseapp.com",
  projectId: "northern-bliss-318216",
  storageBucket: "northern-bliss-318216.appspot.com",
  messagingSenderId: "765710826517",
  appId: "1:765710826517:web:b96270beb647f91604a21c",
  measurementId: "G-V9EZGB828T"
  });
  const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   alert("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });

  