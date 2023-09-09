import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Card } from 'react-bootstrap';
import { removeToCart } from '../reducers/apiSlice';
import { BsTrash3Fill } from 'react-icons/bs';



function ShoppingCart() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.api.cart);




    return (
        <Row className='mt-4 d-flex justify-content-center align-items-center'>
            {cartItem.map((merce) => (
                <Card className='border-dark shadow m-1 p-1' style={{ width: '18rem' }} key={merce.id}>
                    <Card.Img variant="top" src={merce.url} style={{ height: '150px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>{merce.nome}</Card.Title>
                        <Card.Text>{merce.descrizione}</Card.Text>
                        <Card.Text>{merce.categoria}</Card.Text>
                        <Card.Text>{merce.provenienza}</Card.Text>
                        <Card.Text>Prezzo: {merce.prezzo}€</Card.Text>
                        <Card.Text>Quantità Disponibile: {merce.quantitaDisponibile}</Card.Text>

                        <Button className='m-2' type="button" onClick={() => dispatch(removeToCart(merce.id))}>
                            < BsTrash3Fill size={20} />
                        </Button>

                    </Card.Body>
                </Card>
            ))}
        </Row>
    )
}
export default ShoppingCart
