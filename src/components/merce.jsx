import React, { useState, useEffect } from 'react';
import '../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { createMerce, updateMerce, deleteMerce, addToCart, fetchMerce} from '../reducers/apiSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsFillPencilFill, BsTrash3Fill, BsCart4, BsFillSendFill } from 'react-icons/bs';



const Merce = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState({
        nome: '',
        url: '',
        categoria: '',
        provenienza: '',
        prezzo: 0,
        quantitaDisponibile: 0,
    });

    const merceData = useSelector((state) => state.api.apiArray);
    const totalPages = useSelector((state) => state.api.totalPages);



    useEffect(() => {

        dispatch(fetchMerce(currentPage));

    }, [dispatch , currentPage]);

    const handleNextPage = () => {

        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {

        setCurrentPage(currentPage - 1);

    };


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

    const handleUpdateMerce = (merce) => {
        setFormData({
            
            nome: merce.nome,
            descrizione: merce.descrizione,
            url: merce.url,
            categoria: merce.categoria,
            provenienza: merce.provenienza,
            prezzo: merce.prezzo,
            quantitaDisponibile: merce.quantitaDisponibile,
        });

        dispatch(updateMerce(merce.id, formData));

    };

    const handleDeleteMerce = (merceId) => {
        if(merceId){
            console.log(merceId);
        }
        dispatch(deleteMerce(merceId));
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
                 <Card className='border-dark shadow m-1 p-1 select' style={{ width: '18rem' }} key={merce._id}>
                        <Card.Img variant="top" src={merce.url} style={{ height: '150px', objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>{merce.nome}</Card.Title>
                            <Card.Text>{merce.descrizione}</Card.Text>
                            <Card.Text>{merce.categoria}</Card.Text>
                            <Card.Text>{merce.provenienza}</Card.Text>
                            <Card.Text>Prezzo: {merce.prezzo}€/kg</Card.Text>
                            <Card.Text>Quantità Disponibile: {merce.quantitaDisponibile} kg</Card.Text>
                            <Button variant='' className='updmerce' type="button" onClick={() => handleUpdateMerce(merce)}>
                                < BsFillPencilFill size={15} />
                            </Button>
                            <Button variant='' className='m-1 dltmerce' type="button" onClick={() => handleDeleteMerce(merce._id)}>
                                < BsTrash3Fill size={15} />
                            </Button>
                            <Button variant='' className='m-1 addmerce' type="button" onClick={() => dispatch(addToCart(merce))}>
                                < BsCart4 size={15} />
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>

            <Row className='mt-4'>
                <Col md={6} className='text-center'>
                    <form onSubmit={handleCreateMerce}>
                        <label htmlFor="nom">Nome</label>
                        <input type="text" id="nom" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} /><br />
                        <label htmlFor="descrizione">Descrizione</label>
                        <input type="text" id="descrizione" value={formData.descrizione} onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })} /><br />
                        <label htmlFor="url">Url</label>
                        <input type="text" id="url" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} /><br />
                        <label htmlFor="Categoria">Categoria</label>
                        <input type="text" id="Categoria" value={formData.categoria} onChange={(e) => setFormData({ ...formData, categoria: e.target.value })} /><br />
                        <label htmlFor="provenienza">Provenienza</label>
                        <input type="text" id="provenienza" value={formData.provenienza} onChange={(e) => setFormData({ ...formData, provenienza: e.target.value })} /><br />
                        <label htmlFor="prezzo">Prezzo</label>
                        <input type="number" id="prezzo" value={formData.prezzo} onChange={(e) => setFormData({ ...formData, prezzo: e.target.value })} /><br />
                        <label htmlFor="quantitaDisponibile">Quantità disponibile</label>
                        <input type="number" id="quantitaDisponibile" value={formData.quantitaDisponibile} onChange={(e) => setFormData({ ...formData, quantitaDisponibile: e.target.value })} /><br /><br />
                        <Button type="submit" className='mb-5' >
                            < BsFillSendFill size={20} />
                        </Button>
                    </form>

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
    );
};


export default Merce;