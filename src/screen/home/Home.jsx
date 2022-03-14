import React from 'react'
import { TextField } from '@mui/material'
import background from ".../images/"


function Home() {
  return (
    <div className='container' style={{backgroundImage: `url(${background})`}}>
        <TextField
        style={{width: "100%"}}
          id="filled-textarea"
          label="Inserisci la Città"
          placeholder="Città"
          multiline
          variant="filled"
        />
    </div>
  )
}

export default Home