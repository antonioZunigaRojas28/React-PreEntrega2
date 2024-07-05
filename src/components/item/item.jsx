import './item.css'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import {CartContext} from '../../context/cartContext'

const Item=({id, category, description, image, title, price, stock})=>{
    const {addItem}=useContext(CartContext)

    return(
        <>
            <div className="item">
                <figure>
                    <img src={image} alt="" className="imagen_producto" />
                </figure>
                <div className='info-producto'>
                    <div>{category}</div>
                    <div>{title.slice(0,24)}</div>
                    <div className='precio'>$ {price}</div>
                    <button onClick={()=>addItem({id: id, name: title, price: price, quantyti: 1, image: image})}>Agregar a Carrito</button>
                    <Link to={`/item/${id}`}>
                        <button className='botonVerDetalle'>Ver Detalle</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item
