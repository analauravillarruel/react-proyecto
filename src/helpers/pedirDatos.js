import { productos } from "../service/asyncMock";

export const pedirDatos =() => {
  return new Promise ((resolve,reject) => {
    setTimeout(()=>{
      resolve(productos);
    }, 1000)
  })
}