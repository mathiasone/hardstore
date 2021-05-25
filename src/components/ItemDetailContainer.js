import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import cargarProductos from './Catalogo';

const MyItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try{
                const response = await cargarProductos().filter(p => p.id === 1);
                setItem(response);
            }catch(e){
                console.log(`error no controlado en la función fetchProducto: ${e}`);
            }finally{
                console.log("fetchProducto finalizado");
            }
        };

        fetchProducto();
    }, []);

    return(
        <>
            {item?.map((p) => (
                <ItemDetail inline key={p.id} item={p} />
            ))}                
        </>
    )
};

export default MyItemDetailContainer;