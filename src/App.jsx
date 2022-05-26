import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';


function App() {

  const {register, handleSubmit} = useForm();

  const [endereco, setendereco] = useState([]);

  const [cep, setCep] = useState();

  const onSubmit = (data) => {
    console.log(data);
    if (!endereco.includes(data)){
      setendereco([...endereco,data])
    }
    console.log(endereco)
    setCep(data.cep)
  }
  
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        CEP:
        <input type="text" {...register("cep")} onBlur={checkCEP} />
      </label>
      
      <button type="submit">Enviar</button>
      </form>

  
    <iframe
      width="450"
      height="250"
      frameBorder="0"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD66v8jQcjLUaf9Nty25_HBhM6i8Lcqcrc&q=${cep}`}
      allowFullScreen>
    </iframe>
  </div>
  )
}

export default App
