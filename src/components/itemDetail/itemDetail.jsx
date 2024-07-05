import { useContext } from 'react'
import './itemDetail.css'
import {CartContext} from '../../context/cartContext'


const ItemDetail=({product})=>{
    const {addItem}=useContext(CartContext)

    return(
        <div className="info-producto">
            <img className="imagen" src={product?.image} alt="" />
            <div className="categoria">{product?.category}</div>
            <div className="producto">{product?.title}</div>
            <div className="precio">$ {product?.price}</div>
            <button onClick={()=>addItem({id: product.id, name: product.title, price: product.price, quantyti: 1, image: product.image})}>Agregar a Carrito</button>
        </div>
    )
}

export default ItemDetail
