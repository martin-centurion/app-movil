import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import './styles.css';

//----Import Firebase

import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import NavCategory from '../NavCategory/NavCategory';


const firebaseConfig = {
  apiKey: "AIzaSyD-gg7YhLFeWODpwNVbWKF5PNFrpSfarNA",
  authDomain: "proyecto-final-react-js-f81a2.firebaseapp.com",
  projectId: "proyecto-final-react-js-f81a2",
  storageBucket: "proyecto-final-react-js-f81a2.appspot.com",
  messagingSenderId: "31661348798",
  appId: "1:31661348798:web:78f7a3958d5f25ac120bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// async await
//1. Obtener la referencia a mi colección "products"
//2. Llamamos a getDocs con dicha colección
//3. Dentro de la respuesta tenemos un array de documentos
//4. Extraemos los datos con doc.data()
async function getItemsFromDatabase() {
    const productsColectionRef = collection(db, "products");
    let snapshotProducts = await getDocs(productsColectionRef);
    const documents = snapshotProducts.docs;
  
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
  }
  
  async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, "products");
  
    const q = query(productsColectionRef, where("category", "==", categoryURL));
  
    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
  }
  
  // Config Firebase--------------------------------------------------------------
  
  function ItemListContainer() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const params = useParams();
    const idCategory = params.idCategory;
  
    async function leerDatos() {
      if (idCategory === undefined) {
        let respuesta = await getItemsFromDatabase();
        setUsers(respuesta);
        setIsLoading(false);
      } else {
        let respuesta = await getItemsByCategoryFromDatabase(idCategory);
        setUsers(respuesta);
        setIsLoading(false);
      }
    }
  
    useEffect(() => {
      leerDatos();
    }, [idCategory]);
  
    return (
      <>
        <NavCategory />
        <div className="producto container">
          <ItemList users={users} />
        </div>
      </>
    );
  }
  

export default ItemListContainer;