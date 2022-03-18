import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
import { Details } from '@mui/icons-material';

export default function MyCard({localtime,icon, }) {

  const[cardState, setcardState] = useState(false)

  function Details(){
    
    return(
      <div>
        <h1>{localtime}</h1>
      </div>
    )
  }

  return (
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

        {cardState? Details() : null}
  
    </div>
  );
}



