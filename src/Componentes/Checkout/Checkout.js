import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../Checkout/Checkout.module.css";

export const Checkout = () => {

  const [email, setEmail] = useState("")

  const [nombre, setNombre] = useState("")

  const [apellido, setApellido] = useState("")

  const [telefono, setTelefono] = useState("")

  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log ("Email:", email);
    console.log ("Nombre:", nombre);
    console.log ("Apellido:", apellido);
    console.log ("Teléfono:", telefono);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>Terminar compra</h3>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.secciones}>
          <label htmlFor='email' >Email</label>
          <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email} />
        </div>
        <div className={styles.secciones}>
          <label htmlFor='nombre' >Nombre</label>
          <input type="text" onChange={(e)=> setNombre(e.target.value)} value={nombre} />
        </div>
        <div className={styles.secciones}>
          <label htmlFor='apellido' >Apellido</label>
          <input type="text" onChange={(e)=> setApellido(e.target.value)} value={apellido} />
        </div>
        <div className={styles.secciones}>
          <label htmlFor='telefono'>Teléfono</label>
          <input type="text" onChange={(e)=> setTelefono(e.target.value)} value={telefono} />
        </div>
        <button>Finalizar</button>
        <Link to="/carrito">Volver al carrito</Link>
      </form>

    </div>
  )
}