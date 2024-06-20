import React from "react"
import './navbar.css'
import Cartwidget from "../cartwidget/cartwidget"
import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <div className="header">
            <Link to={'/'}>
                <p className="logo">MiTienda</p>
            </Link>
            <div className="navbar">
                <Link to={'/categoria/electronics'}>
                    <p>Electrodomesticos</p>
                </Link>
                <Link to={'/categoria/jewelery'}>
                    <p>Joyeria</p>
                </Link>
                <Link to={`/categoria/men's clothing`}>
                    <p>Ropa Hombre</p>
                </Link>
                <Link to={`/categoria/women's clothing`}>
                    <p>Ropa Mujer</p>
                </Link>
                <p><Cartwidget/></p>
            </div>
        </div>
    )
}

export default Navbar