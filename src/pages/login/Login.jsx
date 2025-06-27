import React from 'react'
import {Box ,TextField, InputAdornment, Button} from '@mui/material'
import styles from './Login.module.css'
import Person3Icon from '@mui/icons-material/Person3';
import PasswordIcon from '@mui/icons-material/Password';
import DateRangeIcon from '@mui/icons-material/DateRange';
import  {useForm} from 'react-hook-form'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {
          const navigate = useNavigate();
  
  const {register, handleSubmit}= useForm();

  const loginUser= async(values)=>{
    const response= await axios.post(`https://mytshop.runasp.net/api/Account/Login`, values)
    console.log(response);
  }

  return (
    <Box component={'form'} className={styles.formContianer}
    onSubmit={handleSubmit(loginUser)}>
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

        <Box sx={{ m: 1, textAlign: 'right' }}>
  <Link to="/forgotpassword" style={{ textDecoration: 'none', color: '#1976d2' }}>
    Forget Password?
  </Link>
</Box>

<Button variant='outlined' type="submit" onClick={() => navigate('/')}>Login</Button>

        </Box>

  )
}

export default Login