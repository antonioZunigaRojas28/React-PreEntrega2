import React,{useContext} from "react";
import {CartContext} from '../../context/cartContext';
import CartItem from "../cartItem/cartItem";
import './cart.css'
import { Link } from "react-router-dom";

const Cart=()=>{
    const {cart, clearCart, getTotal} = useContext(CartContext)
    return(
        <>
            {   cart.length !==0 ?
            (
                <div>
                    <div className="contenedorProductosCarrito">
                        {cart.map((item) => <CartItem key={item.id} item={item} />)}
                    </div>
                    <div>
                        <h3 className="importeTotal">Total: $ {getTotal()}</h3>
                        <Link to={"/checkout"}>
                            <button className="boton">Finalizar Compra</button>
                        </Link>
                        <Link to={"/"}>
                            <button className="boton" onClick={()=>clearCart()}>Vaciar Carrito</button>
                        </Link>
                    </div>
                </div>
            ):(
                <div>
                    <p className="carritoVacio">Carrito vacio</p>
                    <Link to={"/"}>
                        <button className="boton" >Ir al inicio</button>
                    </Link>
                </div>
            )
            }
            
        </>
    )
}
export default Cart