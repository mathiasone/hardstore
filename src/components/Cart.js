import {React, useState, useEffect} from 'react';
import Item from './Item';
import { useCart }  from '../contexts/CartContext';
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { getFirestore } from "../firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  div,
  button {
    font-size: 32px;
  }
`;

const NoItemsDiv = styled.div`
    color: black;
    margin: 10px auto 0;
    padding: 10px;
    border-radius: 10px;
    width: 75%;
    background: #ccff33;
    font-weight: bold;
`;

const BackToHome = styled.div`
    color: #ccff33;
    padding: 10px;
    border-radius: 10px;
    background: black;
    font-weight: bold;
`;

const Cart = () => {

    const cartUsed = useCart();
    const productos = cartUsed.cart.addedItems;
    cartUsed.cartTotalPrice();
        
    const [newOrderId, setNewOrderId] = useState(null);
                
    useEffect(() => {
        const commitOrder = async () => {
            try{
                console.log(`Id orden: ${newOrderId}`);
                if(newOrderId){
                    cartUsed.clear();
                }
                
            }catch(e){
                console.log(`consolear: ${e}`);
            }finally{
                //console.log("fetchProducts finalizado");
            }
        };

        commitOrder();

    }, [newOrderId]);

   
    const uploadOrders = () => {

        const db = getFirestore();
        const ordersCollections = db.collection("Orders");
        const newItems =    productos.map((p) => {
                                return { id: p.id, title: p.title, price: p.precio, quantity: p.quantity ,firebaseId: p.firebaseId }
                            });  

        console.log(newItems);

        const newOrder = {
          buyer: { name: "Matias", phone: "1137094567", email: "matias123857@gmail.com" },
          items: [...newItems],
          total: cartUsed.cart.totalPrice
        };
        
        console.log(productos);
        updateStock(productos);

        ordersCollections.add(newOrder).then(({ id }) => {
            setNewOrderId(id);
        });
        
        

    };

    const updateStock = (items) => {
        const db = getFirestore();
        const batch = db.batch();
        
        items.map((item) =>{
            batch.update(db.doc(`Items/${item.firebaseId}`), { stock: item.stock - item.quantity });
         })
        
        batch.commit().then((response) => {
            console.log(response, "response");
        });
    }
    
    return(        
        <>
            <div className="d-flex flex-row flex-wrap m-1 text-center">
                {
                    productos.map((p) => (
                        <>
                            <Item inline key={p.id}  prod={p}/>
                        </>
                    ))
                }
                {
                    productos.length !== 0 ?
                    <>
                        <Card style={{ width: '18rem', height: '32rem', background: 'grey'}} className="mx-3 my-2">
                            <h4 className="m-auto text-light"> Total: $ {cartUsed.cart.totalPrice}</h4>

                                    <Button onClick={uploadOrders} style={{ width: "240px"}} className="m-auto text-light">Generar orden de compra</Button>
      
                        </Card>

                        <Card style={{ width: '18rem', height: '32rem', background: 'grey'}} className="mx-3 my-2">
                            <Container className="m-auto">
                                <Button onClick={cartUsed.clear} style={{ background: "black", color: "#ccff33", border: "0"}} >Limpiar carrito</Button>
                                <Link to="/"><BackToHome>Volver al inicio</BackToHome></Link> 
                            </Container>
                        </Card>
                        
                    </>    
                    : 
                    <>
                        <Container className="m-auto">
                            {
                                newOrderId === null ?
                                    <NoItemsDiv>No hay productos en su carrito</NoItemsDiv>
                                :
                                <Card style={{ width: '36rem', height: '32rem', background: 'grey'}} className="mx-3 my-2">
                                    <h4 className="m-auto text-light">La orden nro. <p style={{color: "#ccff33"}}>{newOrderId}</p> se ha generado exitosamente</h4>
                                </Card>
                            }        
                            <Link to="/"><BackToHome>Volver al inicio</BackToHome></Link> 
                        </Container>
                    </>
                } 
            </div>
        </>
    );
}

export default Cart;