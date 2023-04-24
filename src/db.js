import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC4qJty0l_AMa7kN-TP__cGh0cRH9BKok",
    authDomain: "rusik-magaz17.firebaseapp.com",
    databaseURL: "https://rusik-magaz17-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rusik-magaz17",
    storageBucket: "rusik-magaz17.appspot.com",
    messagingSenderId: "37682391596",
    appId: "1:37682391596:web:c2fa73eda7beff2eb0ff89"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }