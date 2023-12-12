import React, {useState } from 'react';
import axios from 'axios';


import './JediesForm.css';

const src = "http://localhost:8000/jedies";

function GetForm({onChange}) {

  const [data, setData] = useState({ count: "", name: "", batallion: "" }, []);
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
   const { name, value } = event.target;
   setData((prevData) => ({
     ...prevData,
     [name]: value
   }));
 };

  const handleOnClick = (event) => {
   onChange(data);
   axios
      .post(src, data)
      .then((response) => {
        setResponse(response.data);
        onChange(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  return (
     <form>
        <input placeholder='Количество записей' name='count' value={data.count} onChange={handleChange}></input>
        <input placeholder='Имя' name='name' value={data.name} onChange={handleChange}></input>
        <input placeholder='Батальон' name='batallion' value={data.batallion} onChange={handleChange}></input>
        <button type='button' onClick={() => handleOnClick()}>Отправить</button>
     </form>
  );
}

export default GetForm;
