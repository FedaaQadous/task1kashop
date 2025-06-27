import React from 'react'
import {Button} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
function Home() {
  return (
    <>
    <Button variant="outlined" startIcon={<DeleteIcon />} >click</Button>
  
    </>
  )
}

export default Home