import React from 'react'
import {Box ,TextField, InputAdornment, Button} from '@mui/material'
import styles from './Forgotpass.module.css'
import Person3Icon from '@mui/icons-material/Person3';
import { useNavigate } from 'react-router-dom';
import  {useForm} from 'react-hook-form'
import axios from 'axios';


function Forgotpass() {
    const navigate = useNavigate();

  const {register, handleSubmit}= useForm();

  const reset= async(values)=>{
    const response= await axios.post(`https://mytshop.runasp.net/api/Account/ForgotPassword`, values)
    console.log(response);
  }

  return (
    <Box component={'form'} className={styles.formContianer}
    onSubmit={handleSubmit(reset)}>
   
        <TextField
        {...register('email')}
          label="email"
          type='email'
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <Person3Icon />
              </InputAdornment>,
            },
          }}
        />
      

<Button variant='outlined' type="submit"  onClick={() => navigate('/resetpass')}>Send Code</Button>

        </Box>

  )
}

export default Forgotpass