import {React, useState} from 'react';
import {Card, Button, Form, FormControl} from 'react-bootstrap';

const MyProductCard = ({prod}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(prod.stock);
    
    const changeCounter = (value) =>{
        console.log(prod.stock);
        console.log(prod);
        if(counter + value < 1){
            setCounter(1)}
        else{
            setCounter(counter + value)
        };
    };

    const addToCart = () =>{
        
        if( stock < counter){
            alert(`Sólo quedan ${stock} unidades disponibles en stock`)
            setCounter(stock);
        }else{
            // EJECUTAR onAdd(counter);
            setStock(stock - counter);  // DESCUENTO DEL STOCK
            setCounter(1);
        }        
    };


    return(
        <Card key={prod.id} style={{ width: '18rem', heigth: '100rem'}} className="mx-3 my-2">
            <Card.Img variant="top" src={prod.image} style={{ width: '284px', heigth: '189px' }} className="p-1" />
            <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>{prod.text}</Card.Text>
            <Form inline>
                <Button onClick={() => changeCounter(-1)} variant="primary" style={{ width: '40px' }} className="mr-sm-2"> - </Button>
                <FormControl readOnly style={{width: "142px"}} type="text" value={counter} className="mr-sm-2 text-center" />
                <Button onClick={() => changeCounter(1)} variant="primary" style={{ width: '40px' }} className="mr-sm-2"> + </Button>
                <Button onClick={addToCart} variant="outline-success" style={{ width: '97%'}} className="mr-sm-2 mt-2">Agregar al carrito</Button>
            </Form>
            
            </Card.Body>
        </Card>
    )
};

export default MyProductCard;