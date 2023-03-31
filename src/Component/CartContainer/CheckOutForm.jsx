import React, { useState } from "react";
import Button from "../Button/Button";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });


  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: '',
      email: '',
      phone: '',
    });
  }



  return (
    <div className='form'>
      <h4>Completa tus datos para completar la compra.</h4>
      <div className='form__content'>
        <label className='form__content-label'>Nombre</label>
        <input
          value={userData.name}
          name="name"
          type="text"
          required
          onChange={handleChange}
        />
      </div>

      <div className='form__content'>
        <label className='form__content-label'>Email</label>
        <input
          value={userData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div className='form__content'>
        <label className='form__content-label'>Telefono</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
      <button
        className='bot-createorder'
        disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={() => props.onSubmit(userData)}
      >
        Crear orden
      </button>
      <Button onTouchButton={clearForm}>limpiar form</Button>
    </div>
  );
}