import React,{useContext, useState} from "react";

const ItemCount =({item, addItem})=>{
    const [count, setCount] = useState(item.quantyti)
    const aumentar=()=>{
        setCount(count+1)
        addItem({id: item.id, name: item.title, price: item.price, quantyti: 1, image: item.image})
    }
    const disminuir=()=>{
        if(count>1){
            setCount(count-1)
            addItem({id: item.id, name: item.title, price: item.price, quantyti: -1, image: item.image})
        }
    }
    
    return(
        <>
            <div className="cantidad">
                <button className="disminuir" onClick={()=>disminuir()}>-</button>
                <h3 className="numeroCantidad">{count}</h3>	
                <button className="aumentar" onClick={()=>aumentar()}>+</button>
            </div>
        </>
    )
}

export default ItemCount