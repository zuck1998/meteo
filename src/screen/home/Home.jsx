import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Card from '../../components/card/Card';
import { ZoomInMap } from '@mui/icons-material';

function Home() {

  const [filtro, setFiltro] = useState("");
  const [zona, setZona] = useState({});
  const [loading, setloading] = useState(true);
 

  const  fetchZona=() => {
      fetch('http://api.weatherapi.com/v1/forecast.json?key=f656a3e4a7054753873211018220803&q='+ filtro + '&days=4')
        .then(response => {
          return response.json();
        })
        .then(data =>[
          setZona(data),
          setloading(false),

        ])
        .catch(err => {
          setloading(true);
        })
        
  };

console.log(zona);


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
        <button onClick={
          () =>  {fetchZona()}
        }/>
        
        {
          loading? null :
          <div>
            <Card
            zona={zona}
                key= {zona.location.name}
                name={zona.location.name}
                localtime={zona.location.localtime} 
                icon={zona.current.condition.icon}
                stato={zona.current.condition.text}
            />
          
           
         </div>
        }
    </div>
  )
}

export default Home