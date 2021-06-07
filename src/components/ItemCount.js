import {React, useState} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import LinkButton from './LinkButton';

// view es para saber si voy a renderizar el componente en la lista 'L' de productos o en el detalle 'D' de un producto
const ItemCount = ({istock, initial, view, onAdd}) => {

    const [counter, setCounter] = useState(initial);
    const [stock, setStock] = useState(istock);
    const [items, setItems] = useState(onAdd); // Cantidad de items agregados al carrito de un producto.

    const changeCounter = (value) =>{
        if(counter + value < 1){
            setCounter(1)}
        else if(counter + value > stock){
            setCounter(stock)}
        else{
            setCounter(counter + value)
        };
    };

    const addToCart = () =>{
        setStock(stock - counter);
        setItems(counter);
    };

    // estilo para la botonera del counter antes de apretar el botón agregar al carrito (default)
    const formStyleAddToCart = {
        width: '18rem',
        margin: 'auto',
        position: view === "L" ? "absolute":"relative",
        bottom: view === "L" ? 10:-20
    };

    // estilo para la botonera del counter después de apretar el botón agregar al carrito, mostrando el botón Finaliza compra
    const formStyleEndShop = {
        width: '100%',
        margin: 'auto',
        position: view === "L" ? "absolute":"initial",
        bottom: view === "L" ? 10:-20,
        left: view === "L" ? 0: 10,

    };

    const linkStyle = {
        background: 'red',
        width: view === "L" ? "15rem":"18rem",
    };
    
   return(
         
        <>   
        
                {!items ?
                <>
                        <Form inline style={formStyleAddToCart}>
                            <Button onClick={() => changeCounter(-1)} variant="primary" style={{ width: '40px' }} className="mr-sm-2"> - </Button>
                            <FormControl readOnly style={{width: "142px"}} type="text" value={counter} className="mr-sm-2 text-center" />
                            <Button onClick={() => changeCounter(1)} variant="primary" style={{ width: '40px' }} className="mr-sm-2"> + </Button>
                            <Button onClick={addToCart} variant="outline-success" style={{ width: "240px"}} className="mr-sm-2 mt-2">Agregar al carrito</Button>
                        </Form>
                        
                </>    
                    :
                <> 
                    <Form style={formStyleEndShop}> 
                        <LinkButton style={linkStyle} to='/cart'>Finalizar compra</LinkButton>
                    </Form>  
                </>  
                }
        
        </>                    
    )
};

export default ItemCount;
