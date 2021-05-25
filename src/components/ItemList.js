import {React, useState, useEffect} from 'react';
import Item from './Item';
import cargarProductos from './Catalogo';

const ItemListContainer = () => {

    const [productos, setProductos] = useState(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const response = await cargarProductos();
                setProductos(response);
            }catch(e){
                console.log(`error no controlado en la función fetchProductos: ${e}`);
            }finally{
                console.log("fetchProductos finalizado")
            }
        };

        setTimeout(() => fetchProductos(), 2000);
    }, []);

    return(
        <>
            <div className="d-flex flex-row flex-wrap m-1">
                {productos?.map((p) => (
                    <Item inline key={p.id}prod={p}/>
                ))}
            </div>            
        </>
    )
};

export default ItemListContainer;