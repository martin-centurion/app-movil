import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD-gg7YhLFeWODpwNVbWKF5PNFrpSfarNA",
    authDomain: "proyecto-final-react-js-f81a2.firebaseapp.com",
    projectId: "proyecto-final-react-js-f81a2",
    storageBucket: "proyecto-final-react-js-f81a2.appspot.com",
    messagingSenderId: "31661348798",
    appId: "1:31661348798:web:78f7a3958d5f25ac120bef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createOrder(orderData) {
    const collectionRef = collection(db, 'orders');
    
    const response = await addDoc(collectionRef, orderData);
    console.log('Orden creada correctamente', response.id);
    return response.id
}