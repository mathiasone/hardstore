import {React, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { getFirestore } from "../firebase";
import { Spinner, Button } from 'react-bootstrap';

const Categories = () =>{

    const [categories, setCategories] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try{

                setLoader(true);
                const db = await getFirestore(); 
                const itemsCollection = await db.collection("Categories");
                
                // si catId tiene algo filtro
                                
                itemsCollection
                    .orderBy("id")
                    .get()
                    .then((snapshot) => {
                        setCategories(snapshot.docs.map((doc) => doc.data()));
                    })
                
            }catch(e){
                console.log(`error no controlado en la función fetchCategories: ${e}`);
            }finally{
                setLoader(false);
            }
        };
                
        fetchCategories();        
        
    }, []);

    return(
        <>
            <div className="d-flex flex-column mt-3 bg-warning text-center bg-dark">
                { !loader ?

                    categories?.map((c) => {
                        return(
                            
                                    <NavLink key={c.id} to={c.address}>
                                            <p  className="category my-2 text-light">{c.category}</p>
                                    </NavLink>
                                        
                        );
                    })
                    :
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
                }
            </div>
        </>
    )

}

export default Categories;