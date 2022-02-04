import { useState } from "react"

function ItemCount({initial, stock, onAdd}) {
    
    const [contador, setcontador] = useState(initial)

    const handleAdd=()=>{
        if (contador<stock) {
            setcontador(contador+1)
        }
    }

    const handleSubstrac=()=>{
        if (contador>initial) {
            setcontador(contador-1)
        }
    }

    const agregarCarrito=()=>{
        onAdd(contador)
    }

    return (
        <div className="container w-50">

            <button className="btn btn-info" onClick={handleSubstrac}> - </button>
                {contador} 
            <button className="btn btn-primary" onClick={handleAdd}> + </button> 
            <br />
            <button className="btn btn-success" onClick={agregarCarrito}> Agregar al Carrito </button>
        
        </div>

    )
}

export default ItemCount;