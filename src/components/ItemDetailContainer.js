import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getFetch } from './mock';

const ItemDetalContainer = () => {
    const { idProducto } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getFetch
        .then(res=>setProductos(res))
        // .then(res => setProductos(res.find(prod=>prod.id===idProducto)))
        .catch(err=> console.log(err))
    }, [])    
    
    return (
        <div>Detalle del producto: { idProducto } 
        { productos.map(prod=><li>{prod.id}</li>)}
        
        </div>
    )

}

export default ItemDetalContainer