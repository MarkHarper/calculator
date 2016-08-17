import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBT-N3BtnRtwVRBIbD4kPqZmcsHZviDinI',
  authDomain: 'life-metrics.firebaseapp.com',
  databaseURL: 'https://life-metrics.firebaseio.com',
  storageBucket: 'life-metrics.appspot.com',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()

export const firebaseAuth = firebase.auth
