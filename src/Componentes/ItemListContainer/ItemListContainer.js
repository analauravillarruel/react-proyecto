import React, { useState, useEffect } from 'react';
import {pedirDatos} from "../../helpers/pedirDatos";
import { ItemList } from '../ItemList/ItemList';
import {useParams} from "react-router-dom";

export const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo]= useState("Productos");
  const categoria = useParams().categoria;
  console.log(categoria)

  useEffect(() => {
    pedirDatos()
      .then((res) =>{
        if(categoria){
          setProductos(res.filter((prod)=> prod.categoria === categoria));
          setTitulo(categoria)
        }else{
          setProductos(res);
          setTitulo("Productos")
        }
      })
  }, [categoria])
  
  return (
    <div>
      <ItemList productos={productos} titulo={titulo}/>
    </div>
  )
}
