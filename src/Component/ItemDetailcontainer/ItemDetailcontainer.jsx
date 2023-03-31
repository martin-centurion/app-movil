import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";


// Config Firebase---------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";


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

async function getSingleItemFromDatabase(idItem) {
  // referencia de la colección y del documento
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);

  // getDoc -> datos
  const docSnapshot = await getDoc(docRef);

  // extra
  if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") 

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

// -------------------------------------------------------------------------------

function ItemDetailContainer() {
  const [user, setUser] = useState({});
  const [goToCart, setGoToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDatabase(idUser)
      .then((respuesta) => {
        setUser(respuesta);
        setIsLoading(false);
      })
      .catch((error) => alert(error));
  }, [idUser]);

  const { addItem } = useContext(cartContext);

  function onAddToCart(count) {
    setGoToCart(true);
    addItem(user, count);
  }



  return (
    <div className='detail container'>
        <div className='detail__content'>
                {

                isLoading?
                <Loader />
                :
                <div className='detail__content-img' key={user.id}>
                    
                    <div className='img-movil'>
                        <img src={user.img500} alt={user.title} />
                    </div>
                    
                    <div className='detail__content-title'>
                        <h1>{user.title}</h1>
                        <h4>{user.description}</h4>
                        <p>$ {user.price}</p>
                        <p className='stock'>Stock Disponible: {user.stock} Kg.</p>
                        
                        {
                            goToCart
                            ? 
                            <div className='content'>
                            <Link to='/cart'>
                                    <span className='bot_add'>
                                        Ir al Carrito
                                    </span>
                              </Link>
                              <Link to='/tienda'>
                                    <span className='bot_add'>
                                        Seguir comprando
                                    </span>
                            </Link>
                            </div>
                            : <ItemCount
                                    onAddToCart={onAddToCart}
                                    initial={1}
                                    stock={user.stock}
                              /> 
                        }

                    </div>
                    
                        
                </div>

                }
        </div>
    </div>
  );
}

export default ItemDetailContainer;