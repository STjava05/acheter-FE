import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Card, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { createProducteur, updateProducteur, deleteProducteur, fetchProducteurPage } from '../reducers/apiSlice';

const Producteur = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        avatarUrl: '',
        nome: '',
        cognome: '',
        paese: '',
        numeriDiEttari: 0,
        orticolturaSpecializato: '',
    });

    const producteurData = useSelector((state) => state.api.Data);
    const totalPages = useSelector((state) => state.api.totalPages);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducteurPage(currentPage));
    }, [dispatch, currentPage]);


    const handleNextPage = () => {

        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {

        setCurrentPage(currentPage - 1);

    };

    const handleCreateProducteur = () => {
        dispatch(createProducteur(formData));

        // Pulisci il form dopo la creazione
        setFormData({
            avatarUrl: '',
            nome: '',
            cognome: '',
            paese: '',
            numeriDiEttari: 0,
            orticolturaSpecializato: '',
        });
    };

    const handleUpdateProducteur = (id) => {
        dispatch(updateProducteur(id, formData));
    };

    const handleDeleteProducteur = (id) => {
        dispatch(deleteProducteur(id));
    };

    return (
        <Container>
            <Row className='mt-4'>

                <h4 className='categoria'>Producteur</h4>

            </Row>
            <Row className='mt-4 d-flex justify-content-center'>

                {producteurData && producteurData.map((producteur) => (

                    <Card key={producteur.id} className='mb-3 border-dark shadow m-1 p-1' style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={producteur.avatarUrl} alt={producteur.nome} style={{ width: '100%', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{producteur.nome}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>{producteur.cognome}</Card.Subtitle>
                            <Card.Text>Paese: {producteur.paese}</Card.Text>
                            <Card.Text>Numeri Di Ettari: {producteur.numeriDiEttari}</Card.Text>
                            <Card.Text>Orticoltura Specializato: {producteur.orticolturaSpecializato}</Card.Text>
                            <Button
                                variant='primary'
                                onClick={() => {
                                    handleUpdateProducteur(producteur.id);
                                }}
                            >
                                Update
                            </Button>
                            <Button
                                variant='danger'
                                onClick={() => {
                                    handleDeleteProducteur(producteur.id);
                                }}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
                <Form onSubmit={handleCreateProducteur}>

                    <Form.Group>
                        <Form.Label>avatar</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci url'
                            value={formData.avatarUrl}
                            onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci Nome'
                            value={formData.nome}
                            onChange={(e) => { setFormData({ ...formData, nome: e.target.value }); console.log(producteurData) }}
                        />

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci Cognome'
                            value={formData.cognome}
                            onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Paese</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci Paese'
                            value={formData.paese}
                            onChange={(e) => setFormData({ ...formData, paese: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Numeri Di Ettari</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci Numeri Di Ettari'
                            value={formData.numeriDiEttari}
                            onChange={(e) => setFormData({ ...formData, numeriDiEttari: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Orticoltura Specializato</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Inserisci Orticoltura Specializato'
                            value={formData.orticolturaSpecializato}
                            onChange={(e) =>
                                setFormData({ ...formData, orticolturaSpecializato: e.target.value })
                            }
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit' className='mb-5'>
                        Submit
                    </Button>
                </Form>

                <Col md={6} className='text-center'>
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <span className='mx-2'>
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </Button>
                </Col>

            </Row>
        </Container>
    )
}


export default Producteur