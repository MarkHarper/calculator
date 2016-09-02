import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAaRN7tbiRLsDmC11Oe4wGKTywlI4vp7CM',
  authDomain: 'macros-4a573.firebaseapp.com',
  databaseURL: 'https://macros-4a573.firebaseio.com',
  storageBucket: 'macros.appspot.com',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth
