import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const InputCount = () => {
  return(
    <div className='flex'>
      <Link to='/carrito' >
        <button className='btn btn-finalizar'
                onClick={() => console.log('ir al cart')}>
          Finalizar Compra
        </button>
      </Link>

      <Link to='/' >
        <button className='btn btn-continuar'
                onClick={() => console.log('ir al home')}>
          Continuar Comprando
        </button>
      </Link>
    </div>
  )
}

function Intercambiabilidad({contador, onAdd}) {

  const ButtonCount = ({handleInter}) => {
    return(
      <button className='count__añadir' 
              onClick={onAdd}
              disabled={contador === 0 ? true : null}
      >Añadir
      </button>
    )
  }
  
  const [inputType, setInputType ] = useState('button')
  
  const handleInter=()=>{
      setInputType('input')
  }
  
  return (
      <div>
          
          {
              inputType === 'button' ? 
                  <ButtonCount handleInter={handleInter} />
              : 
                  <InputCount />
          }
      </div>
  )

}

export default Intercambiabilidad