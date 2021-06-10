import {React} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const Item = ({prod}) => {

    const linkDetalle= `/detalle/${prod.id}`;
    
    return(
        <Card key={prod.id} style={{ width: '18rem', height: '32rem'}} className="mx-3 my-2">
            <Card.Img variant="top" src={prod.image} className="p-1"></Card.Img> 
            <Card.Body>
                <Card.Title><Link to={linkDetalle}>{prod.title}</Link></Card.Title>
                <Card.Text>{prod.text}. (Stock: {prod.stock}) </Card.Text>
                <ItemCount item={prod} initial={prod.quantity} view={"L"}/>
            </Card.Body>

        </Card>
    )
};

export default Item;