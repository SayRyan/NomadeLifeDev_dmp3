import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOE-XMh9uJnVwXA9VRomnIoC7liEDyeeQ",
  authDomain: "nomadelife-richardryan.firebaseapp.com",
  projectId: "nomadelife-richardryan",
  storageBucket: "nomadelife-richardryan.appspot.com",
  messagingSenderId: "620692174738",
  appId: "1:620692174738:web:edd05b25469713614bb34b",
  measurementId: "G-WYD2TG2LWJ"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db, analytics}