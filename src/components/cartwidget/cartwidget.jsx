import React, { useContext } from "react";
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import './cartwidget.css'
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


const Cartwidget=()=>{
    const {getQuantytiProducts}=useContext(CartContext)
    
    return(
      <>
        <Link to={"/cart"}>
          <Badge count={getQuantytiProducts()}>
            <ShoppingCartOutlined className="carrito" />
          </Badge>
        </Link>
    </>
    )
}
export default Cartwidget
