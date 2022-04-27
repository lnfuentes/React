import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../logo.png'

import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <header className='header'>
        <div className='contenedor navBar'>
            <NavLink to="/" className='logo'>
              <img src={logo}/>
            </NavLink>

            <div className="categorias">
              <NavLink to='/categoria/indumentaria' className={({isActive})=> isActive ? 'btn-categoria-active' : 'btn-categoria'}>Indumentaria</NavLink>
              <NavLink to='/categoria/accesorios' className={({isActive})=> isActive ? 'btn-categoria-active' : 'btn-categoria'}>Accesorios</NavLink>            
            </div>

            <div className="carrito">
                <CartWidget />
            </div>
        </div>
    </header>
  )
}

export default NavBar