import React, { useState, useEffect } from 'react';
import '../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdine, createOrdine, updateOrdine, deleteOrdine } from '../reducers/apiSlice';
import { Container, Row,Col,Table } from 'react-bootstrap';

const Ordine = () => {
    const [formData, setFormData] = useState({
        numberOrdine: '',
        producteur: '',
        prodotto: '',
        quantita: 0,
        prezzoTotale: 0,
        dataOrdine: '',
    });

    const ordineData = useSelector((state) => state.api.Ordine); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrdine());
    }, [dispatch]);

    const handleCreateOrdine = () => {
        dispatch(createOrdine(formData));
        // Pulisci il form dopo la creazione
        setFormData({
            numberOrdine: '',
            producteur: '',
            prodotto: '',
            quantita: 0,
            prezzoTotale: 0,
            dataOrdine: '',
        });
    };

    const handleUpdateOrdine = (id) => {
        dispatch(updateOrdine(id, formData));
    };

    const handleDeleteOrdine = (id) => {
        dispatch(deleteOrdine(id));
    };

    return (
        <Container>
        <Row className='mt-4'>
        <Col>
            <h4 className='ordine'>Ordine</h4>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col md={6}>
            <form>
                <label htmlFor="numberOrdine">numero Ordine</label>
                <input type="text" id="numberOrdine" value={formData.numberOrdine} onChange={(e) => setFormData({ ...formData, numberOrdine: e.target.value })} /><br/>
                <label htmlFor="producteur">Producteur</label>
                <input type="text" id="producteur" value={formData.producteur} onChange={(e) => setFormData({ ...formData, producteur: e.target.value })} /><br/> 
                <label htmlFor="prodotto"> Prodotto</label>
                <input type="text" id="prodotto" value={formData.prodotto} onChange={(e) => setFormData({ ...formData, prodotto: e.target.value })} /><br/>
                <label htmlFor="quantita">Quantita</label>
                <input type="text" id="quantita" value={formData.quantita} onChange={(e) => setFormData({ ...formData, quantita: e.target.value })} /><br/>
                <label htmlFor="prezzoTotale">Prezzo Totale</label>
                <input type="text" id="prezzoTotale" value={formData.prezzoTotale} onChange={(e) => setFormData({ ...formData, prezzoTotale: e.target.value })} /><br/>
                <label htmlFor="dataOrdine">Data Ordine</label>
                <input type="text" id="dataOrdine" value={formData.dataOrdine} onChange={(e) => setFormData({ ...formData, dataOrdine: e.target.value })} /><br/><br/>
                <button type="button" onClick={handleCreateOrdine}>Crea</button>
            </form>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col>
            <Table  striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    {ordineData&&ordineData.map((ordine) => (
                        <tr key={ordine.id}>
                            <td>{ordine.numberOrdine}</td>
                            <td>{ordine.producteur}</td>
                            <td>{ordine.prodotto}</td>
                            <td>{ordine.quantita}</td>
                            <td>{ordine.prezzoTotale}</td>
                            <td>{ordine.dataOrdine}</td>
                            <td>
                                <button type="button" onClick={() => handleUpdateOrdine(ordine.id)}>
                                    Modifica
                                </button>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDeleteOrdine(ordine.id)}>
                                    Elimina
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Col>
            </Row>
        
        </Container>
    );
};

export default Ordine;
