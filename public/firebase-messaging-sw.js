importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {

	apiKey: "AIzaSyBSPPQD4M1anH8uT7Ldh-zevS2lgWoL-9Q",
	authDomain: "notification-cipher-61823.firebaseapp.com",
	projectId: "notification-cipher-61823",
	storageBucket: "gs://notification-cipher-61823.appspot.com",
	messagingSenderId: "185572736284",
	appId: "1:185572736284:web:54928d1587844ac5fc0ed9",
	measurementId: "G-XBZJZJR692"
  
  };
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log('Received background message ', payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
