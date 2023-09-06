import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';

import { fetchCategoria, createCategoria, updateCategoria, deleteCategoria } from '../reducers/apiSlice';
import { Container, Row, Col } from 'react-bootstrap';

const Categoria = () => {
    const [formData, setFormData] = useState({
        codiceCategoria: '',
        descrizione: '',
        categoria: 'alimenmtari'
    });

    const categoriaData = useSelector((state) => state.api.categoria);

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
                    <h4 className='categoria'>Categoria</h4>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={6}>
                    <form>
                        <label htmlFor="codiceCategoria">Codice Categoria</label>
                        <input type="text" id="codiceCategoria" value={formData.codiceCategoria} onChange={(e) => setFormData({ ...formData, codiceCategoria: e.target.value })} /><br />   
                        <label htmlFor="descrizione">Descrizione</label>
                        <input type="text" id="descrizione" value={formData.descrizione} onChange={(e) => setFormData({ ...formData, descrizione: e.target.value })} /><br  />

                        <label htmlFor="categoria">Categoria</label>
                        <select id="categoria" value={formData.categoria} onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}><br />
                            <option value="alimentari">Alimentari</option>
                            <option value="bellezza">Bellezza</option>
                            <option value="elettronica">Elettronica</option>
                        </select>
                        <br /><br />

                        <button type="button" onClick={handleCreateCategoria}>Crea</button>
                        </form>
                        {/* {categoriaData && categoriaData.map((categoria) => (
                            <div key={categoria.codiceCategoria}>
                                <h1>{categoria.codiceCategoria}</h1>
                                <h1>{categoria.descrizione}</h1>
                                <h1>{categoria.categoria}</h1>
                                <button type="button" onClick={() => handleUpdateCategoria(categoria.codiceCategoria)}>Modifica</button>
                                <button type="button" onClick={() => handleDeleteCategoria(categoria.codiceCategoria)}>Elimina</button>
                            </div>
                        ))}
 */}

                  <div className='category-list'>
                    {categoriaData && categoriaData.map((categoria) => (
                        <div key={categoria.codiceCategoria}>
                            <h1>{categoria.codiceCategoria}</h1>
                            <h1>{categoria.descrizione}</h1>
                            <h1>{categoria.categoria}</h1>
                            <button type="button" onClick={() => handleUpdateCategoria(categoria.codiceCategoria)}>Modifica</button>
                            <button type="button" onClick={() => handleDeleteCategoria(categoria.codiceCategoria)}>Elimina</button>
                        </div>
                    ))}
                </div>
                   
                </Col>
            </Row>

        </Container>
    );
};

export default Categoria;