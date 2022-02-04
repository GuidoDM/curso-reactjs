
import { useEffect, useState } from 'react';
import { getFetch } from './mock';
import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';

const producsImages = require.context('../img/Productos', true)

function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams() 

    useEffect(() => {
        if (idCategoria) {
            getFetch
            .then(res => setProductos(res.filter(prod=>prod.categoria===idCategoria)))
            .catch(err=> console.log(err))
            .finally(()=>setLoading(false))
        }else{
            getFetch
                .then(res => setProductos(res))
                .catch(err=> console.log(err))
                .finally(()=>setLoading(false))
        }
    }, [idCategoria])

    
    function onAdd(cant) {
        console.log(cant)
    }

    return (
        <div className='container'>
        <div className='row'>    
            { loading ? <h2>Cargando ...</h2> : productos.map( prod => <div key={prod.id} className='col-md-4'>                        
                        <div className="card w-100 mt-5" >
                            <div className="card-header">
                                {`${prod.producto} - ${prod.descripcion}`}
                            </div>
                            <div className="card-body">
                                                                
                                <img src={producsImages(`./${prod.imagen}.jpg`)} alt=""/>

                                {prod.precio}                                                            
                            </div>
                            <div className="card-footer">
                                <Link to={`/detalle/${prod.id}`}>  
                                    <button className="btn btn-outline-primary btn-block">
                                        detalle del producto
                                    </button>   
                                </Link>                                                           
                            </div>
                            {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
                        </div>
                    </div>                                    

            ) }  
        </div>         
        </div>
    )

}

export default ItemList