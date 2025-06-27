import React from 'react'
import {Box ,TextField, InputAdornment, Button} from '@mui/material'
import styles from './Register.module.css'
import Person3Icon from '@mui/icons-material/Person3';
import PasswordIcon from '@mui/icons-material/Password';
import DateRangeIcon from '@mui/icons-material/DateRange';
import  {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
          const navigate = useNavigate();

  const {register, handleSubmit}= useForm();

  const registerUser= async(values)=>{
    const response= await axios.post(`https://mytshop.runasp.net/api/Account/register`, values)
    console.log(response);
  }

  return (
    <Box component={'form'} className={styles.formContianer}
    onSubmit={handleSubmit(registerUser)}>
      <TextField
      {...register('firstName')}
          label="firstName"
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
        {...register('lastName')}
          label="lastName"
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
        {...register('userName')}
          label="userName"
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
        {...register('confirmPassword')}
          label="confirmPassword"
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
         {...register('birthOfDate')}
          label="birth Of Date"
          type='date'
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>,
            },
          }}
        />
<Button variant='outlined' type="submit" onClick={() => navigate('/Login')} >Register</Button>

        </Box>

  )
}

export default Register