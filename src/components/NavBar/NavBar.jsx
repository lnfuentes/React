import React from 'react'

function NavBar() {
  return (
    <header className='header'>
        <div className='contenedor navBar'>
            <a href="/" className='logo'>ReactCommerce</a>
            <nav className='navegacion'>
                <a href="#">Hombre</a>
                <a href="#">Mujer</a>
            </nav>
            <div className="carrito">
                carrito    
            </div>
        </div>
    </header>
  )
}

export default NavBar