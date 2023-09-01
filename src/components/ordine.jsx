import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdine, createOrdine, updateOrdine, deleteOrdine } from '../reducers/apiSlice';
import { Container, Row,Col,Table } from 'react-bootstrap';

const Ordine = () => {
    const [formData, setFormData] = useState({
        codiceOrdine: '',
        codiceAcquirenti: '',
        codiceProdotto: '',
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
            codiceOrdine: '',
            codiceAcquirenti: '',
            codiceProdotto: '',
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
            <h4>Ordine</h4>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col md={6}>
            <form>
                <label htmlFor="codiceOrdine">Codice Ordine</label>
                <input type="text" id="codiceOrdine" value={formData.codiceOrdine} onChange={(e) => setFormData({ ...formData, codiceOrdine: e.target.value })} />
                <label htmlFor="codiceAcquirenti">Codice Acquirenti</label>
                <input type="text" id="codiceAcquirenti" value={formData.codiceAcquirenti} onChange={(e) => setFormData({ ...formData, codiceAcquirenti: e.target.value })} />
                <label htmlFor="codiceProdotto">Codice Prodotto</label>
                <input type="text" id="codiceProdotto" value={formData.codiceProdotto} onChange={(e) => setFormData({ ...formData, codiceProdotto: e.target.value })} />
                <label htmlFor="quantita">Quantita</label>
                <input type="text" id="quantita" value={formData.quantita} onChange={(e) => setFormData({ ...formData, quantita: e.target.value })} />
                <label htmlFor="prezzoTotale">Prezzo Totale</label>
                <input type="text" id="prezzoTotale" value={formData.prezzoTotale} onChange={(e) => setFormData({ ...formData, prezzoTotale: e.target.value })} />
                <label htmlFor="dataOrdine">Data Ordine</label>
                <input type="text" id="dataOrdine" value={formData.dataOrdine} onChange={(e) => setFormData({ ...formData, dataOrdine: e.target.value })} />
                <button type="button" onClick={handleCreateOrdine}>Crea</button>
            </form>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col>
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Codice Ordine</th>
                        <th>Codice Acquirenti</th>
                        <th>Codice Prodotto</th>
                        <th>Quantita</th>
                        <th>Prezzo Totale</th>
                        <th>Data Ordine</th>
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    {ordineData&&ordineData.map((ordine) => (
                        <tr key={ordine.id}>
                            <td>{ordine.codiceOrdine}</td>
                            <td>{ordine.codiceAcquirenti}</td>
                            <td>{ordine.codiceProdotto}</td>
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
