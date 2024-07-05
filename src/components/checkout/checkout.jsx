import './checkout.css'
import { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import {CartContext} from '../../context/cartContext'
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../../firebase/client'

const Checkout=()=>{
    const [id_ordenCompra, setId_ordenCompra] = useState()
    const {clearCart, cart, getTotal} = useContext(CartContext)

    const [nombre, setNombre] = useState()
    const [correo, setCorreo] = useState()
    const [telefono, setTelefono] = useState()
    const [fechaCompra, setFechaCompra] = useState()

    const finalizarCompra=(e)=>{
        e.preventDefault()
        const hoy = new Date()
        setFechaCompra(hoy)

        const ordenCompra ={
            buyer:{
                name: nombre,
                phone: telefono,
                email: correo,
                fecha: fechaCompra
            },
            items: cart,
            total: getTotal()
        }

        const orderCollection = collection(db, 'order')
        addDoc(orderCollection, ordenCompra).then(({id})=> {
            setId_ordenCompra(id)
            clearCart()
        })
    }

    return(
        <>            
            {!id_ordenCompra ?
                (<div>
                        <h1 className='titulo'>Finalizando Compra</h1>
                        <div className='contenedorFormulario'>
                            <h4 className='subtitulo'>Completar Datos:</h4>    
                            <form className='formulario' onSubmit={finalizarCompra} >
                                <div className="contenedorInput">
                                    <input type="text" name="Nombre" placeholder="Nombre" required onChange={(e)=>setNombre(e.target.value)} />
                                </div>
                                <div className="contenedorInput">
                                    <input type="email" name="Email" placeholder="Email" required onChange={(e)=>setCorreo(e.target.value)}/>
                                </div>
                                <div className="contenedorInput">
                                    <input type="number" name="Telefono" placeholder="Telefono" required onChange={(e)=>setTelefono(e.target.value)}/>
                                </div>
                                <div className="contenedorInput">
                                    <input type="submit" value="Realizar Compra" className="btn_finalizarCompra" />
                                </div>
                            </form>
                        </div>
                    </div>
                ):(
                    <div className='contenedorCompraFinalizada'>
                        <h4>Compra Finalizada con Exito</h4>
                        {/* <h4>{`Su código de compra es: ${orderID}`}</h4> */}
                        <h4>Su código de compra es:</h4>
                        <h4 className='codigoCompra'>{id_ordenCompra}</h4>
                        <Link to="/"><h4>Realizar otra compra</h4></Link>
                    </div>
                )
            }
        </>
    )
}

export default Checkout
