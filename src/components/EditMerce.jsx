import React, { useState,useEffect } from 'react';
import {Button,Form,Container} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import  {MerceDetail} from './EditSlice';

const EditMerce = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    // const [formData, setFormData] = useState({});  
    
    const merceDetailData = useSelector((state) => state.merce.detailMerce);
    
    // const [nome, setNome] = useState(merceDetailData.nome);
    // const [descrizione, setDescrizione] = useState(merceDetailData.descrizione);
    // const [url, setUrl] = useState(merceDetailData.url);
    // const [categoria, setCategoria] = useState(merceDetailData.categoria);
    // const [provenienza, setProvenienza] = useState(merceDetailData.provenienza);
    // const [prezzo, setPrezzo] = useState(merceDetailData.prezzo);
    // const [quantitaDisponibile, setQuantitaDisponibile] = useState(merceDetailData.quantitaDisponibile);
     // Inizializza gli stati solo se merceDetailData è disponibile
     const [nome, setNome] = useState(merceDetailData ? merceDetailData.nome : '');
     const [descrizione, setDescrizione] = useState(merceDetailData ? merceDetailData.descrizione : '');
     const [url, setUrl] = useState(merceDetailData ? merceDetailData.url : '');
     const [categoria, setCategoria] = useState(merceDetailData ? merceDetailData.categoria : '');
     const [provenienza, setProvenienza] = useState(merceDetailData ? merceDetailData.provenienza : '');
     const [prezzo, setPrezzo] = useState(merceDetailData ? merceDetailData.prezzo : '');
     const [quantitaDisponibile, setQuantitaDisponibile] = useState(merceDetailData ? merceDetailData.quantitaDisponibile : '');
 


    
    // useEffect(() => {
    //     setFormData(merceDetailData.nome);
    //     setFormData(merceDetailData.descrizione);
    //     setFormData(merceDetailData.url);
    //     setFormData(merceDetailData.categoria);
    //     setFormData(merceDetailData.provenienza);
    //     setFormData(merceDetailData.prezzo);
    //     setFormData(merceDetailData.quantitaDisponibile);
    // }, [merceDetailData]);

    useEffect(() => {
        // Aggiorna gli stati solo se merceDetailData è disponibile
        if (merceDetailData) {
            setNome(merceDetailData.nome);
            setDescrizione(merceDetailData.descrizione);
            setUrl(merceDetailData.url);
            setCategoria(merceDetailData.categoria);
            setProvenienza(merceDetailData.provenienza);
            setPrezzo(merceDetailData.prezzo);
            setQuantitaDisponibile(merceDetailData.quantitaDisponibile);
        }
    }, [merceDetailData]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const mercePayload = {
            nome: nome,
            descrizione: descrizione,
            url: url,
            categoria: categoria,
            provenienza: provenienza,
            prezzo: prezzo,
            quantitaDisponibile: quantitaDisponibile,

        };
        dispatch(MerceDetail(id, mercePayload));

        setNome('');
        setDescrizione('');
        setUrl('');
        setCategoria('');
        setProvenienza('');
        setPrezzo('');
        setQuantitaDisponibile('');
    };

    return (
        <Container>
            <h4 className='merce'>Modifica Merce</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formDescrizione">
                    <Form.Label>Descrizione</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Descrizione" value={descrizione} onChange={(e) => setDescrizione(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formUrl">
                    <Form.Label>Url</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Url" value={url} onChange={(e) => setUrl(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formProvenienza">
                    <Form.Label>Provenienza</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Provenienza" value={provenienza} onChange={(e) => setProvenienza(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPrezzo">
                    <Form.Label>Prezzo</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Prezzo" value={prezzo} onChange={(e) => setPrezzo(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formQuantitaDisponibile">
                    <Form.Label>Quantita Disponibile</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci Quantita Disponibile" value={quantitaDisponibile} onChange={(e) => setQuantitaDisponibile(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Modifica
                </Button>

            </Form>
        </Container>
    );




}

export default EditMerce;