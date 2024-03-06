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

// Initialize FullCalendar
$(document).ready(function() {
    $('#calendar').fullCalendar({
        // Configure FullCalendar options
        // ...
    });
});

// Function to book an appointment
function bookAppointment() {
    const name = $('#name').val();
    const email = $('#email').val();
    const selectedDate = $('#calendar').fullCalendar('getDate');

    // Create a data object with booking details
    const bookingData = {
        name: name,
        email: email,
        date: selectedDate.format()
    };

    // Push the booking data to Firebase
    database.ref('bookings').push(bookingData);

    // Clear the form fields
    $('#name').val('');
    $('#email').val('');
}