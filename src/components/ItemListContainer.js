import React from 'react';
import ItemList from './ItemList';
import Categories from './Categories';
import { Container,Row,Col } from 'react-bootstrap';

const ItemListContainer = () => {

    return(
        <>
            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Categories />
                    </Col>
                    <Col sm={10}>
                        <ItemList />
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default ItemListContainer;