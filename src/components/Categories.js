import React from 'react';
import { NavLink } from 'react-router-dom';


const arrayCategories = [
    {
        id: 0,
        category: 'Todos',
        address:'/',
    },
    {
        id: 1,
        category: 'Fuentes',
        address:'/category/1',
    },
    {
        id: 2,
        category: 'Cooling',
        address:'/category/2',
    },
    {
        id: 3,
        category: 'Gabinetes',
        address:'/category/3',
    }
];

const Categories = () =>{

    return(
        <>
            <div className="d-flex flex-column mt-3 bg-warning text-center bg-dark">
                {
                    arrayCategories?.map((c) => {
                        return(
                            
                                    <NavLink key={c.id} to={c.address}>
                                            <p  className="category my-2 text-light">{c.category}</p>
                                    </NavLink>
                                        
                        );
                    })
                }
            </div>
        </>
    )

}

export default Categories;