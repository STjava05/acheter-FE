import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMerce, createMerce, updateMerce, deleteMerce } from '../reducers/apiSlice';
import { Container, Row,Col,Table } from 'react-bootstrap';

const Merce = () => {
    const [formData, setFormData] = useState({
        nom: '',
        descrizione: '',
        url: '',
        Categoria: '',
        provezienza: '',
        prezzo: 0,
        quantitaDisponibile: 0,
    });

    const merceData = useSelector((state) => state.api.Merce); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMerce());
    }, [dispatch]);

    const handleCreateMerce = () => {
        dispatch(createMerce(formData));
        // Pulisci il form dopo la creazione
        setFormData({
            nom: '',
            descrizione: '',
            url: '',
            Categoria: '',
            provezienza: '',
            prezzo: 0,
            quantitaDisponibile: 0,
        });
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
            <h4>Merce</h4>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col md={6}>
            <form>
                <label htmlFor="nom">Nome</label>
                <input type="text" id="nom" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                <label htmlFor="descrizione">Descrizione</label>
                <input type="text" id="descrizione" value={formData.descrizione} onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })} />
                <label htmlFor="url">Url</label>
                <input type="text" id="url" value={formData.url} onChange={(e) => setFormData({ ...formData, url: e.target.value })} />
                <label htmlFor="Categoria">Categoria</label>
                <input type="text" id="Categoria" value={formData.Categoria} onChange={(e) => setFormData({ ...formData, Categoria: e.target.value })} />
                <label htmlFor="provezienza">Provenienza</label>
                <input type="text" id="provezienza" value={formData.provezienza} onChange={(e) => setFormData({ ...formData, provezienza: e.target.value })} />
                <label htmlFor="prezzo">Prezzo</label>
                <input type="number" id="prezzo" value={formData.prezzo} onChange={(e) => setFormData({ ...formData, prezzo: e.target.value })} />
                <label htmlFor="quantitaDisponibile">Quantità disponibile</label>
                <input type="number" id="quantitaDisponibile" value={formData.quantitaDisponibile} onChange={(e) => setFormData({ ...formData, quantitaDisponibile: e.target.value })} />
                <button type="button" onClick={handleCreateMerce}>
                    Crea
                </button>
            </form>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrizione</th>
                        <th>Url</th>
                        <th>Categoria</th>
                        <th>Provenienza</th>
                        <th>Prezzo</th>
                        <th>Quantità disponibile</th>
                        <th>Modifica</th>
                        <th>Elimina</th>
                    </tr>
                </thead>
                <tbody>
                    {merceData&&merceData.map((merce) => (
                        <tr key={merce.id}>
                            <td>{merce.nom}</td>
                            <td>{merce.descrizione}</td>
                            <td>{merce.url}</td>
                            <td>{merce.Categoria}</td>
                            <td>{merce.provezienza}</td>
                            <td>{merce.prezzo}</td>
                            <td>{merce.quantitaDisponibile}</td>
                            <td>
                                <button type="button" onClick={() => handleUpdateMerce(merce.id)}>
                                    Modifica
                                </button>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDeleteMerce(merce.id)}>
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


export default Merce;