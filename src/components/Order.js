import {React, useState} from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { getFirestore } from "../firebase";
import { useCart }  from '../contexts/CartContext';

const BackToHome = styled.div`
    color: #ccff33;
    padding: 10px;
    border-radius: 10px;
    background: black;
    font-weight: bold;
`;

const CardProduct = {
    width: '18rem',
    height: '32rem',
    background: 'grey',
    margin: '8px 16px'
};

const divStyle = {
    display: "flex",
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 8
};

const labelStyle = { marginRight: 4 };

const inputs = [
    { label: "Nombre", name: "firstname" },
    { label: "Apellido", name: "lastname" },
    { label: "E-mail", name: "email" },
    { label: "Teléfono", name: "phone" }
];

const Order = () => {

    const [newOrderId, setNewOrderId] = useState(null);
    const [formFields, setFormFields] = useState({
        name: "",
        surname: "",
        age: ""
    });

    const cartUsed = useCart();
    const productos = cartUsed.cart.addedItems;
    cartUsed.cartTotalPrice();

    function onChange(event) {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const updateStock = (items) => {
        const db = getFirestore();
        const batch = db.batch();
        
        items.forEach(item => {
            batch.update(db.doc(`Items/${item.firebaseId}`), { stock: item.stock - item.quantity });
        });
        
        batch.commit().then((response) => {
            console.log(response, "response");
        });
    }
    
    function onSubmitClientForm() {
        console.log(
            `Your name is ${formFields.firstname} ${formFields.lastname}, email: ${formFields.email}, phone: ${formFields.phone}`
        );

        const db = getFirestore();
        const ordersCollections = db.collection("Orders");
        const newItems =    productos.map((p) => {
                                return { id: p.id, title: p.title, price: p.precio, quantity: p.quantity ,firebaseId: p.firebaseId }
                            });  

        console.log(newItems);

        const newOrder = {
          buyer:  { name: formFields.firstname, lastname: formFields.lastname, email: formFields.email, phone: formFields.phone },
          items: [...newItems],
          total: cartUsed.cart.totalPrice
        };
        
        console.log(productos);
        updateStock(productos);

        ordersCollections.add(newOrder).then(({ id }) => {
            if(id){
                setNewOrderId(id);
                cartUsed.clear();
            }
        });   
    }

    console.log(formFields);

    return (

        <>
        { newOrderId !== null ?
            <Card style={CardProduct}>
                <h4 className="m-auto text-light">La orden nro. <p style={{color: "#ccff33"}}> {newOrderId} </p> se ha generado exitosamente</h4>
                <Link to="/"><BackToHome>Volver al inicio</BackToHome></Link> 
            </Card>
            :
            <>
            {inputs.map(({ label, name }) => (
                <div key={name} style={divStyle}>
                    <label style={labelStyle}>{label}</label>
                    <input
                        type="text"
                        value={formFields[name]}
                        name={name}
                        onChange={onChange}
                    />
                </div>
            ))}

            <div style={divStyle}>
                <button disabled={!(formFields.firstname && formFields.lastname && formFields.email && formFields.phone)}
                    onClick={onSubmitClientForm}>
                    Crear orden
                </button>
            </div>
            </> 
        }
        </>           
    );
}

export default Order;