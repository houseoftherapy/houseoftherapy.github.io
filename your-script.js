// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBDdPM7ZXpgNE7hS3EUbEb0ztwvA0a96UQ",
  authDomain: "bookings-97137.firebaseapp.com",
  projectId: "bookings-97137",
  storageBucket: "bookings-97137.appspot.com",
  messagingSenderId: "894109883208",
  appId: "1:894109883208:web:14bfba15817a7fd610317d",
  measurementId: "G-01H24Y2FQR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();
