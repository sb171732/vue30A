import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIi78t--LzwxsCKqLXlgWOzUmhtaq1ucw",
    authDomain: "vue30app.firebaseapp.com",
    projectId: "vue30app",
    storageBucket: "vue30app.appspot.com",
    messagingSenderId: "1042190249851",
    appId: "1:1042190249851:web:7a1f4aa5cd079bdc1097de"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }