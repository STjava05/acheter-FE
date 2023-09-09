import React, { useState, useEffect } from 'react';
import '../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMerce, createMerce, updateMerce, deleteMerce } from '../reducers/apiSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsFillPencilFill,BsTrash3Fill,BsCart4,BsFillSendFill } from 'react-icons/bs';
 import { addToCart } from '../reducers/apiSlice';

const Merce = () => {
    const [formData, setFormData] = useState({
        nome: '',
        descrizione: '',
        url: '',
        categoria: '',
        provenienza: '',
        prezzo: 0,
        quantitaDisponibile: 0,
    });

    const merceData = useSelector((state) => state.api.Data);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchMerce());

    }, [ dispatch]);

    const handleCreateMerce = (e) => {
        e.preventDefault();
        dispatch(createMerce(formData));

        // Pulisci il form dopo la creazione
        setFormData({
            nome: '',
            descrizione: '',
            url: '',
            categoria: '',
            provenienza: '',
            prezzo: 0,
            quantitaDisponibile: 0,
        });
        console.log(formData);
    };

    const handleUpdateMerce = (id) => {
        dispatch(updateMerce(id, formData));
    };

    const handleDeleteMerce = (id) => {
        dispatch(deleteMerce(id));
    };

    return (
        <Container>
            <Row className='mt-4'>
                <Col>
                    <h4 className='merce'>Merce</h4>
                </Col>
            </Row>

            <Row className='mt-4 d-flex justify-content-center align-items-center'>
                {merceData && merceData.map((merce) => (
                    <Card className='border-dark shadow m-1 p-1' style={{ width: '18rem' }} key={merce.id}>
                        <Card.Img variant="top" src={merce.url} style={{ height: '150px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{merce.nome}</Card.Title>
                            <Card.Text>{merce.descrizione}</Card.Text>
                            <Card.Text>{merce.categoria}</Card.Text>
                            <Card.Text>{merce.provenienza}</Card.Text>
                            <Card.Text>Prezzo: {merce.prezzo}€</Card.Text>
                            <Card.Text>Quantità Disponibile: {merce.quantitaDisponibile}</Card.Text>
                            <Button variant='danger' type="button" onClick={() => handleUpdateMerce(merce.id)}>
                            < BsFillPencilFill size={20} />
                            </Button>
                            <Button className='m-2' type="button" onClick={() => handleDeleteMerce(merce.id)}>
                             < BsTrash3Fill  size={20} />
                            </Button>
                            <Button variant='secondary' className='m-2' type="button" onClick={() => dispatch(addToCart(merce))}>
                             < BsCart4  size={20} />
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>

            <Row className='mt-4'>
                <Col md={6}>
                    <form onSubmit={handleCreateMerce}>
                        <label htmlFor="nom">Nome</label>
                        <input type="text" id="nom" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} /><br />
                        <label htmlFor="descrizione">Descrizione</label>
                        <input type="text" id="descrizione" value={formData.descrizione} onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })} /><br />
                        <label htmlFor="url">Url</label>
                        <input type="text" id="url" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} /><br />
                        <label htmlFor="Categoria">Categoria</label>
                        <input type="text" id="Categoria" value={formData.categoria} onChange={(e) => setFormData({ ...formData, categoria: e.target.value })} /><br />
                        <label htmlFor="provezienza">Provenienza</label>
                        <input type="text" id="provezienza" value={formData.provezienza} onChange={(e) => setFormData({ ...formData, provenienza: e.target.value })} /><br />
                        <label htmlFor="prezzo">Prezzo</label>
                        <input type="number" id="prezzo" value={formData.prezzo} onChange={(e) => setFormData({ ...formData, prezzo: e.target.value })} /><br />
                        <label htmlFor="quantitaDisponibile">Quantità disponibile</label>
                        <input type="number" id="quantitaDisponibile" value={formData.quantitaDisponibile} onChange={(e) => setFormData({ ...formData, quantitaDisponibile: e.target.value })} /><br /><br />
                        <Button type="submit" >
                        < BsFillSendFill size={20} />
                        </Button>
                    </form>
                </Col>
            </Row>


        </Container>
    );
};


export default Merce;