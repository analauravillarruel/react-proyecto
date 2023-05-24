import {useForm} from "react-hook-form";
import styles from "../Contacto/Contacto.module.css";

export const Contacto = () => {

  const {register, handleSubmit} = useForm();
  
  const enviar = (data) =>{
    console.log(data);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Contacto</h1>

      <form className={styles.formulario} onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />

        <input type="email" placeholder='Ingresa tu email' {...register("email")}/>

        <input type="telefono" placeholder='Ingresa tu teléfono' {...register("telefono")}/>
        <button type="submit" className={styles.enviar}> Enviar </button>
      </form>

    </div>
  )
}
