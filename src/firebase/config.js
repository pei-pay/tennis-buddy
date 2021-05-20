import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAD43XNNAylN4D618c21-J1-mEb-eKZ_WM',
  authDomain: 'tennis-buddy-1124f.firebaseapp.com',
  projectId: 'tennis-buddy-1124f',
  storageBucket: 'tennis-buddy-1124f.appspot.com',
  messagingSenderId: '156395879392',
  appId: '1:156395879392:web:59f1f95e29c45e810f4985',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
