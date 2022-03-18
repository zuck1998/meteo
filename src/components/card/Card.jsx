import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
import "./Details.scss"

export default function MyCard({localtime,icon, temp}) {

  const[cardState, setcardState] = useState(false)

  function Details(){
    
    return(
      <div className='details'>
        <h1>{temp}</h1>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Card onClick={() => {

        setcardState(!cardState);
      
      }}>
            <CardActionArea >
                  <CardHeader
                  title={localtime}
  
                />
                <CardMedia 
                  component="img"
                  height="200"
                  image={icon}
                  alt=""
                />
            </CardActionArea>      

        </Card>
      </div>
      <div className='details'>
        {cardState? Details() : null}
      </div>
    </div>
  );
}



