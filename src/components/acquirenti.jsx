
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAcquirenti, createAcquirenti, updateAcquirenti, deleteAcquirenti } from '../reducers/apiSlice'; // Assicurati che il percorso sia corretto



const Acquirenti = () => {
    const [formData, setFormData] = useState({});
    const acquirentiList = useSelector((state) => state.api.acquirenti);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAcquirenti());
    }, [dispatch]);

    return (
        <Container> 
            <h4>Acquirenti</h4>
            <Form>
                <Form.Group controlId="formDenominazione">
                    <Form.Label>denominazione</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci denominazione" onChange={(e) => setFormData({ ...formData, denominazione: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formPartitaIva">
                    <Form.Label>partitaIva</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci partitaIva" onChange={(e) => setFormData({ ...formData, partitaIva: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formIndirizzo">
                    <Form.Label>Indirizzo</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci indirizzo" onChange={(e) => setFormData({ ...formData, indirizzo: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formCodiceFiscale">
                    <Form.Label>codiceFiscale</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci codiceFiscale" onChange={(e) => setFormData({ ...formData, codiceFiscale: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formCap">
                    <Form.Label>Cap</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci cap" onChange={(e) => setFormData({ ...formData, cap: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formCitta">
                    <Form.Label>Citta</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci citta" onChange={(e) => setFormData({ ...formData, citta: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {
                    e.preventDefault();
                    dispatch(createAcquirenti(formData));
                }
                    }>

                 
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>denominazione</th>
                        <th>partita Iva</th>
                        <th>Indirizzo</th>
                        <th>codice Fiscale</th>
                        <th>Email</th>  
                        <th>cap</th>
                        <th>citta</th>
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    {acquirentiList.map((acquirenti) => (
                        <tr key={acquirenti.id}>
                            <td>{acquirenti.denominazione}</td>
                            <td>{acquirenti.partitaIva}</td>
                            <td>{acquirenti.indirizzo}</td>
                            <td>{acquirenti.codiceFiscale}</td>
                            <td>{acquirenti.email}</td>
                            <td>{acquirenti.cap}</td>
                            <td>{acquirenti.citta}</td>
                            <td><Button variant="primary" type="submit" onClick={(e) => {
                                e.preventDefault();
                                dispatch(updateAcquirenti(acquirenti.id, formData));
                            }
                            }>
                                Modifica
                            </Button></td>
                            <td><Button variant="primary" type="submit" onClick={(e) => {
                                e.preventDefault();
                                dispatch(deleteAcquirenti(acquirenti.id));
                            }
                            }>
                                Elimina
                            </Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Acquirenti;
                        
 

