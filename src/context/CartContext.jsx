import { createContext, useContext, useState } from "react";
import { sumaTotal } from "../components/SumaTotal/SumaTotal";


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);
    
    const addToCart = (item, cantidad) => {

        if (isInCart(item.id)) {
        
            const actualizarProd = [...cartList];
            
            actualizarProd.map((element) => {
            
                if (element.id === item.id) {
                
                    element.cantidad += cantidad;
                
                }
            
            });
        
        setCartList(actualizarProd);
        
        } else {
        
            setCartList([...cartList, { ...item, cantidad }]);
        
        }
    };

    const clear = () => {
        setCartList([])
    }

    const isInCart = (id) => cartList.find(element => element.id === id);

    const eliminar = producto => {
        let contador = 0;
        const actualizarCart = [...cartList];
            
        actualizarCart.map((element) => {
            if(element.id === producto.id){
                actualizarCart.splice(contador, 1);
            }
            contador++;
        });

        setCartList(actualizarCart);
    }

    return(
        <>
            <CartContext.Provider value={{
                cartList,
                addToCart,
                clear,
                eliminar
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider