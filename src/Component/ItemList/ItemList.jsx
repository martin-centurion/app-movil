import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function ItemList({ users }) {
  return (

    <div className='producto__content'>
            {users.map((user) => (
                <div className='producto__content-img' key={user.id}>
                    <img src={user.img300} alt={user.title} />
                    <div className='producto__content-title'>
                        <h1>{user.title}</h1>
                        <p>${user.price} x Kg.</p>
                    </div>
                    <Link to={`/detalle/${user.id}`}>
                        <Button>Ver Detalles</Button>
                    </Link>
                       
                </div>
            ))}
        </div>
  );
}