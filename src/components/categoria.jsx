import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoria, createCategoria, updateCategoria, deleteCategoria } from '../reducers/apiSlice';
import { Container, Row,Col,Table } from 'react-bootstrap';

const Categorie = () => {
    const [formData, setFormData] = useState({
        codiceCategoria: '',
        descrizione: '',
    });

    const categoriaData = useSelector((state) => state.api.Categoria); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoria());
    }, [dispatch]);

    const handleCreateCategoria = () => {
        dispatch(createCategoria(formData));
        // Pulisci il form dopo la creazione
        setFormData({
            codiceCategoria: '',
            descrizione: '',
        });
    };

    const handleUpdateCategoria = (id) => {
        dispatch(updateCategoria(id, formData));
    };

    const handleDeleteCategoria = (id) => {
        dispatch(deleteCategoria(id));
    };

    return (
        <Container>
         <Row className='mt-4'>
            <Col>
            <h4>Categoria</h4>
            </Col>
            </Row>
            <Row className='mt-4'>
            <Col md={6}>
            <form>
                <label htmlFor="codiceCategoria">Codice Categoria</label>
                <input type="text" id="codiceCategoria" value={formData.codiceCategoria} onChange={(e) => setFormData({ ...formData, codiceCategoria: e.target.value })} />
                <label htmlFor="descrizione">Descrizione</label>
                <input type="text" id="descrizione" value={formData.descrizione} onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })} />
                <button type="button" onClick={handleCreateCategoria}>Crea</button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Codice Categoria</th>
                            <th>Descrizione</th>
                            <th>Modifica</th>
                            <th>Elimina</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoriaData&&categoriaData.map((categoria) => (
                            <tr key={categoria.codiceCategoria}>
                                <td>{categoria.codiceCategoria}</td>
                                <td>{categoria.descrizione}</td>
                                <td>
                                    <button type="button" onClick={() => handleUpdateCategoria(categoria.codiceCategoria)}>Modifica</button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => handleDeleteCategoria(categoria.codiceCategoria)}>Elimina</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </form>
            </Col>
            </Row>
        
        </Container>
    );
};

export default Categorie;