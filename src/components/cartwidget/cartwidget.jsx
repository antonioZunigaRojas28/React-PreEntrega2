import React from "react";
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'
import './cartwidget.css'

const Cartwidget=()=>{
    return(
      <>
      <Badge count={8}>
        <ShoppingCartOutlined className="carrito" />
      </Badge>
    </>
    )
}
export default Cartwidget