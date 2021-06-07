import {React} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const MyItemDetail = ({item}) => {

    return(
        <Card key={item.id} style={{ width: '98%', height: '50rem'}} className="text-center">
            <Card.Img src={item.image} className="p-1 m-auto" style={{ width: '30rem', height: '30rem'}}></Card.Img> 
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}. (Stock: {item.stock}) </Card.Text>
                <Card.Text>Precio: $ {item.precio}</Card.Text>
                <ItemCount istock={item.stock} initial={1} view={"D"}/>
            </Card.Body>

            <Link to="/">Volver al Inicio</Link>    
        </Card>

    )
};

export default MyItemDetail;
