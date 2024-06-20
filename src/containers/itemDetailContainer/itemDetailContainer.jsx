import React, { useEffect, useState } from "react";
import './itemDetailContainer.css'
import { useParams } from "react-router-dom"

const ItemDetailContainer=()=>{
    const [product, setProduct] = useState()
    const {id_item} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id_item}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(e=>console.error(e))
    }, [id_item])

    return(
        <div className="info-producto">
            <img className="imagen" src={product?.image} alt="" />
            <div className="categoria">{product?.category}</div>
            <div className="producto">{product?.title}</div>
            <div className="precio">$ {product?.price}</div>
            <button>Agregar</button>
        </div>   
    )
}
export default ItemDetailContainer
