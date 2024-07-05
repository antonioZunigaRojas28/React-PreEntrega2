import './itemListContainer.css'
import { useEffect, useState } from "react"
import ItemList from '../../components/itemList/itemList'
import { useParams } from "react-router-dom"
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import {db} from '../../firebase/client'

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])
    const {id_categoria} = useParams()

    // const url = id_categoria ? `https://fakestoreapi.com/products/category/${id_categoria}` : 'https://fakestoreapi.com/products'
    useEffect(()=>{
        // fetch(url).then(res=>res.json()).then(json=>setProducts(json)).catch(error=>console.error(error))
        const producto=id_categoria ? query(collection(db, "producto"), where("category", "==", id_categoria), limit(1000)) : collection(db, "producto")
        const getProducts=async()=>{
            const data = await getDocs(producto)
            const dataProductos = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
            setProducts(dataProductos)
        }
        getProducts()
    }, [id_categoria])

    return(
        <div className="contenedor">
            <h2>{id_categoria?<>Categoria: {id_categoria}</>: <>Pagina Principal</>}</h2>
            <ItemList productos={products}/>
        </div>
    )
}
export default ItemListContainer