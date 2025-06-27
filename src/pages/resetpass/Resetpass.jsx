import React from 'react'
import {Box ,TextField, InputAdornment, Button} from '@mui/material'
import styles from './Resetpass.module.css'
import Person3Icon from '@mui/icons-material/Person3';
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate } from 'react-router-dom';
import  {useForm} from 'react-hook-form'
import axios from 'axios';


function Resetpass() {
        const navigate = useNavigate();
    
  const {register, handleSubmit}= useForm();

  const sendCode= async(values)=>{
    const response= await axios.patch(`https://mytshop.runasp.net/api/Account/SendCode`, values)
    console.log(response);
  }

  return (
    <Box component={'form'} className={styles.formContianer}
    onSubmit={handleSubmit(sendCode)}>
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

          <TextField
      {...register('code')}
          label="Code"
          type='text'
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


        <TextField
        {...register('password')}
          label="password"
          type='password'
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <PasswordIcon />
                
              </InputAdornment>,
            },
          }}
        />

           <TextField
        {...register('ConfirmPassword')}
          label="ConfirmPassword"
          type='password'
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>,
            },
          }}
        />


        

<Button variant='outlined' type="submit" onClick={() => navigate('/Login')}>Reset Password</Button>

        </Box>

  )
}

export default Resetpass