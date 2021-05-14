import {React, useState} from 'react';
import {Card, Button, Form, FormControl} from 'react-bootstrap';
import fuente from '../images/Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular.jpg'; // with import

const MyProductCard = ({stck}) => {

    const [counter, setCounter] = useState(0);
    const [stock, setStock] = useState(stck);
    
    const changeCounter = (value) =>{
        
        if(counter + value < 0){
            setCounter(0)}
        else{
            setCounter(counter + value)
        };
    };

    const resetCounter = () =>{
        
        if( stock < counter){
            alert(`Sólo quedan ${stock} unidades disponibles en stock`)
        }else{
            // EJECUTAR onAdd
            setStock(stock - counter);  // DESCUENTO DEL STOCK
            setCounter(0);
        }        
    };


    return(
        <Card style={{ width: '18rem', heigth: '100rem'}} className="mx-auto my-3 text-center">
            <Card.Img variant="top" src={fuente} style={{ width: '284px', heigth: '189px' }} className="p-1" />
            <Card.Body>
            <Card.Title>Fuente ASUS 750W</Card.Title>
            <Card.Text>
                Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular
            </Card.Text>
            <Form inline>
                <Button onClick={() => changeCounter(-1)} variant="primary" style={{ width: '40px' }} className="mr-sm-2"> - </Button>
                <FormControl readOnly style={{width: "142px"}} type="text" value={counter} className="mr-sm-2 text-center" />
                <Button onClick={() => changeCounter(1)} variant="primary" style={{ width: '40px' }} className="mr-sm-2"> + </Button>
                <Button onClick={resetCounter} variant="outline-success" style={{ width: '97%'}} className="mr-sm-2 mt-2">Agregar al carrito</Button>
            </Form>
            
            </Card.Body>
        </Card>
    )
};

export default MyProductCard;