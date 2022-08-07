import React from 'react'
import Header from './Header'
import Logo from '../assets/Logo_ML_2x.png'

function LayoutView() {
  return (
    <div>
        <Header />
        <div className='container d-block'>
            <div className='d-center-screen'>
                <div className='box-img'>
                   <img src={ Logo } alt='img-logo'></img>
                </div>
                <div className='txt-welcome'>
                    Bienvenido a la página de Mercado Libre
                </div>
                <div className='txt-sub-welcome'>
                    Realiza la busqueda de tus productos aquí
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayoutView