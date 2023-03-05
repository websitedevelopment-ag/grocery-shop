
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEGIw49cCsyYEFomc5xYBOaCLolg8qrPo",
  authDomain: "fir-usage-pro.firebaseapp.com",
  projectId: "fir-usage-pro",
  storageBucket: "fir-usage-pro.appspot.com",
  messagingSenderId: "521852315582",
  appId: "1:521852315582:web:23faf8a847f0ee25493bef",
  measurementId: "G-VRESKHDXBD"
};
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);