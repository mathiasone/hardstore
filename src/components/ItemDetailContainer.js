import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router';
import { getFirestore } from "../firebase";


const MyItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const {prodId} = useParams();
                
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const db = await getFirestore(); 
                const itemsCollection = await db.collection("Items");
                
                itemsCollection
                    .where('id', '==', prodId)
                    .get()
                    .then((snapshot) => {
                        setItem(snapshot.docs.map((doc) => doc.data()));
                    })

            }catch(e){
                console.log(`error no controlado en la función fetchProducts: ${e}`);
            }finally{
                //console.log("fetchProducts finalizado");
            }
        };

        fetchProducts();

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