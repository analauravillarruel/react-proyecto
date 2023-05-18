import { productos } from "../service/asyncMock";

export const pedirDatos =() => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
      resolve(productos);
    }, 1000)
  })
}

export const pedirItemPorId = (id) => {
  return new Promise ((resolve, reject)=>{
    const item = productos.find((el)=> el.id === id);

    if(id){
      resolve(item)
    } else {
      reject({
        error: "No se encontró el producto"
      })
    }
  })
}