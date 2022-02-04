import { createContext } from "react"

export const cartContext = createContext([])

function CartContextProvider({children}) {

    return <CartContext.Provider>{children}</CartContext.Provider>


}
