import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);
    
    const addToCart = (item, cantidad) => {

        if (isInCart(item.id)) {
        
            const updateProduct = [...cartList];
            
            updateProduct.map((element) => {
            
                if (element.id === item.id) {
                
                    element.cantidad += cantidad;
                
                }
            
            });
        
        setCartList(updateProduct);
        
        } else {
        
            setCartList([...cartList, { ...item, cantidad }]);
        
        }
    };

    const clear = () => {
        setCartList([])
    }

    const isInCart = (id) => cartList.find(element => element.id === id);

    const remove = product => {
        let counter = 0;
        const updateCart = [...cartList];
            
        updateCart.map((element) => {
            if(element.id === product.id){
                updateCart.splice(counter, 1);
            }
            counter++;
        });

        setCartList(updateCart);
    }

    const totalPrice = ()=> {
        
        let total = 0;
        const endCart = [...cartList];
        endCart.forEach(element => {
            const precio = element.precio
            total = total + precio*element.cantidad;
        })

        return total;
    }

    return(
        <>
            <CartContext.Provider value={{
                cartList,
                addToCart,
                clear,
                remove,
                totalPrice
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider