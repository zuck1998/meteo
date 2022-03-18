import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';

export default function MyCard({localtime,icon, }) {

  const[cardState, setcardState] = useState(false)

  return (
    <div>
      
        <Card onClick={() => 
        <div>
          {setcardState(true)}
          
        </div>

        }>
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
  );
}



