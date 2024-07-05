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
                <Link to={'/categoria/Electrohogar'}>
                    <p>ElectroHogar</p>
                </Link>
                <Link to={'/categoria/Muebles'}>
                    <p>Muebles</p>
                </Link>
                <Link to={`/categoria/Herramientas`}>
                    <p>Herramientas</p>
                </Link>
                <Link to={`/categoria/Celulares`}>
                    <p>Celulares</p>
                </Link>
                <p><Cartwidget/></p>
            </div>
        </div>
    )
}

export default Navbar