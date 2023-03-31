import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import './styles.css';
import Loader from '../Loader/Loader';

//----Import Firebase

import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import NavCategory from '../NavCategory/NavCategory';


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCategory]);
  
    return (
      <div className='container'>
        <NavCategory />
        <div className='producto'>
          {
            isLoading?
            <Loader />
            :
            <ItemList users={users} />

          }
        </div>
      </div>
    );
  }
  

export default ItemListContainer;