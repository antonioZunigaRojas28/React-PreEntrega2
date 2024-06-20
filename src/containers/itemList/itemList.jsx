import Item from '../item/item'
import './itemList.css'

const ItemList =({productos})=>{
    return(
        <div className='contenedor-items'>
            {productos.map((producto)=>
                <Item 
                    key={producto.id}
                    id={producto.id}
                    category={producto.category}
                    description={producto.description}
                    image={producto.image}
                    title={producto.title}
                    price={producto.price}
                    stock={producto.stock}
                />
            )}
        </div>
    )
}

export default ItemList
