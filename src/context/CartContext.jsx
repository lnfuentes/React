import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        if(isInCart(item.id)) {
            const actualizarProd = [...cartList];
            actualizarProd.map(element => {
                console.log(element)
                if(element.id === item.id){
                    console.log(element.cantidad)
                    console.log(cantidad)
                }
            });
            setCartList(actualizarProd);
        }
        setCartList([
            ...cartList,
            item
        ])
    }

    const clear = () => {
        setCartList([])
    }

    const isInCart = (id) => cartList.find(element => element.id === id)

    return(
        <>
            <CartContext.Provider value={{
                cartList,
                addToCart,
                clear
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider