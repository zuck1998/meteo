import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
/* import background from "./images/109666,jpg"
 */

function Home() {

  const [filtro, setFiltro] = useState("");
  const [zona, setZona] = useState([]);
  const [previsioni, setPrevisioni] = useState([]);

  const  fetchZona=() => {
      fetch('http://api.weatherapi.com/v1/forecast.json?key=f656a3e4a7054753873211018220803&q='+ filtro + '&days=4')
        .then(response => {
          return response.json();
        })
        .then(data =>[
          setZona(data.location)
        ])
        .then(data1 => {
          setPrevisioni(data1.current)
        })
  };


  useEffect(() => {
    fetchZona();
},[filtro])


  return (
    <div className='container' >
        <TextField
        style={{width: "100%"}}
          id="filled-textarea"
          label="Inserisci la Città"
          placeholder="Città"
          multiline
          variant="filled"
          value={filtro}
          onChange={(ev) => {
            setFiltro(ev.target.value);
        }}
        />
    </div>
  )
}

export default Home