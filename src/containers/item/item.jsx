import './item.css'
import { Link } from "react-router-dom"

const Item=({id, category, description, image, title, price, stock})=>{
    return(
        <>
            <div className="item">
                <figure>
                    <img src={image} alt="" className="imagen_producto" />
                </figure>
                <div className='info-producto'>
                    <div>{category}</div>
                    <div>{title}</div>
                    <div className='precio'>{price}</div>
                    <Link to={`/item/${id}`}>
                        <button>Ver Detalle</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item
