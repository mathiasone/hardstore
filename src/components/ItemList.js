import {React, useState, useEffect} from 'react';
import Item from './Item';
import { useParams } from 'react-router';
import { Spinner, Button } from 'react-bootstrap';
import { getFirestore } from "../firebase";

const ItemListContainer = () => {

    const [productos, setProductos] = useState(null);
    const [loader, setLoader] = useState(true);
    const {catId} = useParams();
     
    useEffect(() => {
        const fetchProductos = async () => {
            try{

                setLoader(true);
                const db = await getFirestore(); 
                const itemsCollection = await db.collection("Items");
                
                // si catId tiene algo filtro
                catId ?
                                
                itemsCollection
                    .where('categoryId', '==', catId)
                    .get()
                    .then((snap) => {
                        setProductos(snap.docs.map((doc) => {
                            return {firebaseId: doc.id, ...doc.data()}
                        }));
                    })
                :   
                itemsCollection
                    .orderBy("id")
                    .get()
                    .then((snap) => {
                        setProductos(snap.docs.map((doc) => {
                            return {firebaseId: doc.id, ...doc.data()}
                        }));
                    })


                
            }catch(e){
                console.log(`error no controlado en la función fetchProductos: ${e}`);
            }finally{
                setLoader(false);
            }
        };
                
        fetchProductos();        
        
    }, [catId]);

    return(
        <>
            <div className="d-flex flex-row flex-wrap m-1 text-center">
                {loader &&
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
                }

                {!loader && productos?.map((p) => (
                    <Item inline key={p.id}prod={p}/>
                ))}

            </div>            
        </>
    )
};

export default ItemListContainer;