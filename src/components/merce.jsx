import React, { useState, useEffect } from 'react';
import '../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMerce, createMerce, updateMerce, deleteMerce } from '../reducers/apiSlice';
import { Container, Row, Col } from 'react-bootstrap';

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

    const merceData = useSelector((state) => state.api.merce);
    console.log(merceData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMerce());
    }, [dispatch]);

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
                        <button type="submit" >
                            Crea
                        </button>
                    </form>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>

                    {merceData && merceData.map((merce) => (
                       
                        <div key={merce.id}>
                            <h1>{merce.nome}</h1>
                            <h1>{merce.descrizione}</h1>
                            <h1>{merce.url}</h1>
                            <h1>{merce.categoria}</h1>
                            <h1>{merce.provenienza}</h1>
                            <h1>{merce.prezzo}</h1>
                            <h1>{merce.quantitaDisponibile}</h1>
                            <button type="button" onClick={() => handleUpdateMerce(merce.id)}>
                                Modifica
                            </button>
                            <button type="button" onClick={() => handleDeleteMerce(merce.id)}>
                                Elimina
                            </button>
                        </div>
                    ))}

                </Col>
            </Row>

        </Container>
    );
};


export default Merce;