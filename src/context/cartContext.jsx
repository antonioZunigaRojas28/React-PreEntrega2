import { useState } from "react";
import { createContext } from "react";

export const CartContext=createContext()    //Creamos el contexto
export const CartComponentContext=({children})=>{
    const [cart, setCart]=useState([])
    const addItem=(product)=>{
        const productoEnCarrito = cart.find(item=>item.id===product.id)
        if(productoEnCarrito){
            setCart(cart.map(item => item.id===product.id ? { ...item, quantyti: item.quantyti + product.quantyti } : item));
        } else {
            setCart([...cart, product]);
        }
    }

    const clearCart=()=>{
        setCart([])
    }
    const getQuantytiProducts = () => {
        let quantity = 0
        quantity = cart.reduce((acc, item) => acc + item.quantyti, 0);
        return quantity
    }
    const getTotal = () => {
        let total = 0
        cart.forEach((item) => total += (item.quantyti*item.price))
        return total
    };
    const deleteItem = (id) => {
        setCart( cart.filter((item) => item.id !== id));
    };

    return(
        <CartContext.Provider value={{cart, addItem, deleteItem, getQuantytiProducts, getTotal, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
