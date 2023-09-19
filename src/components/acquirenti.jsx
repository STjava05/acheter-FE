
import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
import { Link } from 'react-router-dom';

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
            <h4 className='acquirenti'>Profilo</h4>
            <Form>
                <Form.Group controlId="formDenominazione">
                    <Form.Label>Ragione Sociale/Cognome Nome</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Ragione Sociale/Cognome Nome" value={formData.denominazione || ''} onChange={(e) => setFormData({ ...formData, denominazione: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formPartitaIva">
                    <Form.Label>Partita Iva</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Partita Iva" value={formData.partitaIva || ''} onChange={(e) => setFormData({ ...formData, partitaIva: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formCodiceFiscale">
                    <Form.Label>Codice Fiscale</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Codice Fiscale" value={formData.codiceFiscale || ''} onChange={(e) => setFormData({ ...formData, codiceFiscale: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Email" value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci password" value={formData.password || ''} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formIndirizzo">
                    <Form.Label>Indirizzo</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci indirizzo" value={formData.indirizzo || ''} onChange={(e) => setFormData({ ...formData, indirizzo: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formCap">
                    <Form.Label>Cap</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Cap" value={formData.cap || ''} onChange={(e) => setFormData({ ...formData, cap: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formCitta">
                    <Form.Label>Città</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Città" value={formData.citta || ''} onChange={(e) => setFormData({ ...formData, citta: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {
                    e.preventDefault();
                    dispatch(createAcquirenti(formData));

                    setFormData({
                        denominazione: '',
                        partitaIva: '',
                        codiceFiscale: '',
                        email: '',
                        password: '',
                        indirizzo: '',
                        cap: '',
                        citta: '',
                    });
                }
                }>
                    invia

                </Button>
                <p>Have an account already? <Link to="/login">Login</Link></p>

                {acquirentiList.map((acquirenti) => (
                    <div key={acquirenti.id}>
                        <h1>{acquirenti.denominazione}</h1>
                        <h1>{acquirenti.email}</h1>
                        <h1>{acquirenti.password}</h1>
                        <h1>{acquirenti.partitaIva}</h1>
                        <h1>{acquirenti.indirizzo}</h1>
                        <h1>{acquirenti.codiceFiscale}</h1>
                        <h1>{acquirenti.cap}</h1>
                        <h1>{acquirenti.citta}</h1>

                        <Button variant="primary" type="submit" onClick={(e) => {
                            e.preventDefault();
                            dispatch(updateAcquirenti(acquirenti.id, formData));
                        }
                        }>
                            Modifica
                        </Button>
                        <Button variant="primary" type="submit" onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteAcquirenti(acquirenti.id));
                        }
                        }>
                            Elimina
                        </Button>

                    </div>

                )

                )}

            </Form>


        </Container>
    );
};

export default Acquirenti;



