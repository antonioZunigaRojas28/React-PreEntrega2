import './itemListContainer.css'
import { useEffect, useState } from "react"
import ItemList from '../itemList/itemList'
import { useParams } from "react-router-dom"

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])
    const {id_categoria} = useParams()

    const url = id_categoria ? `https://fakestoreapi.com/products/category/${id_categoria}` : 'https://fakestoreapi.com/products'
    console.log(id_categoria)
    console.log(url)
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(json=>setProducts(json)).catch(error=>console.error(error))
    }, [id_categoria])

    return(
        <div className="contenedor">
            <h2>{id_categoria?<>Categoria: {id_categoria}</>: <>Pagina Principal</>}</h2>
            <ItemList productos={products}/>
        </div>
    )
}
export default ItemListContainer