import React,{useEffect} from 'react';
import '../App.css';

import {useSelector,useDispatch} from 'react-redux';

import {setMerce} from '../reducers/apiSlice'




export default function Home() {
  const dispatch = useDispatch();

const merceData = useSelector((state) => state.api.merce);
console.log(merceData);

  useEffect(() => {
    dispatch(setMerce());
  }, [dispatch]);




return (
    <>
      <h1 className='home'>Ou6nu</h1>

      <h2>Elenco degli articoli:</h2>
      <ul>
        {merceData&&merceData.map((merce) => (
          
         <li key={merce.id}>
            <strong>Nome: </strong> {merce.nome} <br />
            <strong>Descrizione: </strong> {merce.descrizione} <br />
            <strong>Url: </strong> {merce.url} <br />
            <strong>Categoria: </strong> {merce.Categoria} <br />
            <strong>Provenienza: </strong> {merce.provezienza} <br />
            <strong>Prezzo: </strong> {merce.prezzo} <br />
            <strong>Quantità disponibile: </strong> {merce.quantitaDisponibile} <br />
          </li>
        ))}
      </ul>

    </>
  );
}