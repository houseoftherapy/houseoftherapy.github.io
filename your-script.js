
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

// Reference to the Firestore database
const db = firebase.firestore();

// Function to book an appointment
function bookAppointment() {
    const name = $('#name').val();
    const email = $('#email').val();

    // Create a data object with booking details
    const bookingData = {
        name: name,
        email: email,
    };

    // Add the booking data to Firestore
    db.collection('Bookings/ghdIAErbTK9agv2lhe3r').add(bookingData)
        .then(function(docRef) {
            console.log("Booking added with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding booking: ", error);
        });

    // Clear the form fields
    $('#name').val('');
    $('#email').val('');
}