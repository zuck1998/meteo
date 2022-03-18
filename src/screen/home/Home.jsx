import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Card from '../../components/card/Card';
import "./Home.scss"

function Home() {

  const [filtro, setFiltro] = useState("");
  const [zona, setZona] = useState({});
  const [loading, setloading] = useState(true);
 

  const  fetchZona=() => {
      fetch('http://api.weatherapi.com/v1/forecast.json?key=f656a3e4a7054753873211018220803&q='+ filtro + '&days=3')
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
        <button className='btn' style={{width:'100px', height:'30px'}} onClick={
          () =>  {fetchZona()}
        } > Previsioni </button>
        
         <h3>Premi le Card per i dettagli</h3>

        <div className='navCard'>

         { loading? null :



          zona.forecast.forecastday.map((item) => {


            console.log(item);
            return (

              <div>
            <Card
                key= {item.date_epoch}
                name={item.name}
                localtime={item.date} 
                icon={item.day.condition.icon}
                stato={item.day.condition.text}
                
            />
                

                </div>
          )

          })} 
         </div>
        
    </div>
  )
}

export default Home