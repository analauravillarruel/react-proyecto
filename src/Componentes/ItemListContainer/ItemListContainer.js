import React, { useState, useEffect } from 'react';
import {pedirDatos} from "../../helpers/pedirDatos";
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    pedirDatos()
      .then((res) =>{
        setProductos(res);
      })
  }, [])
  
  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}
