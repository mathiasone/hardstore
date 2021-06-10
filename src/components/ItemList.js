import {React, useState, useEffect} from 'react';
import Item from './Item';
import loadProducts from './Catalogo';
import { useParams } from 'react-router';
import { Spinner, Button } from 'react-bootstrap';

const ItemListContainer = () => {

    const [productos, setProductos] = useState(null);
    const [loader, setLoader] = useState(true);
    const {catId} = useParams();
     
    useEffect(() => {
        const fetchProductos = async () => {
            try{
                setLoader(true);
                const response = await loadProducts();
                setProductos(
                    catId ? response.filter(p => p.categoryId === catId) : response
                );
            }catch(e){
                console.log(`error no controlado en la función fetchProductos: ${e}`);
            }finally{
                //console.log("fetchProductos finalizado");
            }
        };
        
                
        setTimeout(() => fetchProductos(), 500);
        fetchProductos().then(setLoader(false));
        
    }, [catId]);

    return(
        <>
            <div className="d-flex flex-row flex-wrap m-1 text-center">
                {!loader && <>
                <div className="m-auto">
                <Button className="m-auto" variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                </Button>{' '}
                <Button className="m-auto" variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                </Button>
                </div>
                </>}

                {loader && productos?.map((p) => (
                    <Item inline key={p.id}prod={p}/>
                ))}

            </div>            
        </>
    )
};

export default ItemListContainer;