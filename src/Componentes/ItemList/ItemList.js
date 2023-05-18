import { Item } from "../Item/Item";
import styles from "../ItemList/ItemList.module.css";

export const ItemList = ( {productos} ) => {
  
  return (
    <div className={styles.container}>
      <h2>Productos</h2>
      
      <div className={styles.productos}>
        {productos.map((prod)=> <Item producto={prod} key={prod.id} />)}
      </div>
    </div>
  )
}
