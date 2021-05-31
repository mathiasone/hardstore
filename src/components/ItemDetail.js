import {React} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyItemDetail = ({item}) => {

    return(
        <Card key={item.id} style={{ width: '98%', height: '50rem'}} className="mx-3 my-2 text-center">
            <Card.Img src={item.image} className="p-1 m-auto" style={{ width: '30rem', height: '30rem'}}></Card.Img> 
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}. (Stock: {item.stock}) </Card.Text>
                <Card.Text>Precio: $ {item.precio}</Card.Text>
            </Card.Body>
            <Link to="/">Volver al Inicio</Link>    
        </Card>
    )
};

export default MyItemDetail;
