import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import loadProducts from './Catalogo';
import { useParams } from 'react-router';


const MyItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const {prodId} = useParams();
                
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await loadProducts().filter(p => p.id === prodId);
                setItem(response);
            }catch(e){
                console.log(`error no controlado en la función fetchProducts: ${e}`);
            }finally{
                console.log("fetchProducts finalizado");
            }
        };

        setTimeout(() => fetchProducts(), 2000);

    }, [prodId]);



    return(
        <>
            {
                 item?.map((p) => (
                     <ItemDetail key={p.id} item={p} />
                 ))
            }                
        </>
    )
};

export default MyItemDetailContainer;