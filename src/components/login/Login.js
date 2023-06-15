import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit">
        DNC DB-VIEWER
      </Link>{' '}
     
    </Typography>
  );
}

async function loginUser(credentials, setToken) {
  console.log("Login Page")
  
  return fetch('https://dashboard.mouserat.io/dncserver/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
  .then(data => {
    if(data.hasOwnProperty("message"))
    {
      console.log(data.message)
      return "error"
    }
    else
    {
      console.log("Login Success")
      console.log(data.token)
      return {"result": "success", "token": data.token}
    }
  })
}

function cbloginsuccess(){
  console.log("Callback of Login success")
}


const defaultTheme = createTheme();

export default function Login({setToken}) {

  const [uname, setUserName] = useState();
  const [pwd, setPassword] = useState();
  const handleSubmit = async e => {
      e.preventDefault();
      console.log(uname, pwd)
      const logresp = await loginUser({
          uname,
          pwd
        });
        if(logresp.result === "success"){
          sessionStorage.setItem("myToken", logresp.token)
          setToken(logresp.token)
        }
        else
        {
          alert("Login Error!")
        }
      }  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LOG IN
          </Typography>
          <Typography component="h1" variant="h5">
            DNC DB-VIEWER
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={e => setUserName(e.target.value)}
                          required
                          id="outlined-required"
             
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={e => setPassword(e.target.value)} 
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login In
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}