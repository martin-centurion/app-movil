import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import products from "../products/products";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "proyecto-final-react-js-f81a2",
    storageBucket: "proyecto-final-react-js-f81a2.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
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

export async function exportData() {
    for (let item of products) {
        const collectionRef = collection(db, 'products');
        const {id} = await addDoc(collectionRef, item);
        console.log('Documento creado', id);
    }
}