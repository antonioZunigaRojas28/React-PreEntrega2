import React,{useContext} from "react";
import {CartContext} from '../../context/cartContext';
import './cartItem.css'
import ItemCount from "../itemCount/itemCount";
const CartItem =({item})=>{
    const {deleteItem}=useContext(CartContext)
    const {addItem}=useContext(CartContext)
    return(
        <>
            <div className="itemCarrito">
                <div className="contenedorImagenProductoCarrito">
                        <img src={item.image} alt="imagen" ></img>
                </div>
                <p className="titulo">{item.name}</p>
                <p className="precio">$ {item.price}</p>
                <ItemCount item={item} addItem={addItem}></ItemCount>
                <p className="precio">$ {item.quantyti*item.price}</p>
                <button className="eliminar" onClick={()=>deleteItem(item.id)}>❌</button>
            </div>
        </>
    )
}

export default CartItem