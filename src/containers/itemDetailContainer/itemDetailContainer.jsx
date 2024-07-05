import React, { useEffect, useState } from "react";
import './itemDetailContainer.css'
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/itemDetail/itemDetail";
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../../firebase/client'


const ItemDetailContainer=()=>{
    const [product, setProduct] = useState()
    const {id_item} = useParams()

    useEffect(()=>{
        /*
        fetch(`https://fakestoreapi.com/products/${id_item}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(e=>console.error(e))
            */
        const producto = doc(db, 'producto', id_item)
        const getProduct=()=>{
            getDoc(producto).then((snapshot=>{
                if(snapshot.exists()){
                    const registro={
                        id: snapshot.id, ...snapshot.data()
                    }
                    setProduct(registro)
                }
            }))
        }
        getProduct()
        
    }, [id_item])

    return(
        <ItemDetail product={product}/>
    )
}
export default ItemDetailContainer
