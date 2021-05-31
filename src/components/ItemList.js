import {React, useState, useEffect} from 'react';
import Item from './Item';
import loadProducts from './Catalogo';
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const [productos, setProductos] = useState(null);
    const {catId} = useParams();
     
    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const response = await loadProducts();
                setProductos(
                    catId ? response.filter(p => p.categoryId === catId) : response
                );
            }catch(e){
                console.log(`error no controlado en la función fetchProductos: ${e}`);
            }finally{
                console.log("fetchProductos finalizado");
            }
        };
        
        setTimeout(() => fetchProductos(), 500);
        
    }, [catId]);

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