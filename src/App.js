import React, { useEffect } from 'react';

import {Container, Typography, AppBar,  Grid} from '@mui/material';

import image from './images/image.png';

import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

import { makeStyles } from '@mui/styles';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';






const useStyles = makeStyles({
  appBar:{
    borderRadius:15,
    margin:'30px 0',
    display:'flex',
    
    justifyContent:'center',
    alignItems:'center'
  }
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
}, [dispatch]);

  const classes = useStyles();

  return (
  <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit" style={{flexDirection:'row'}}
    
    >

    <Typography  variant='h2' align='center' sx={{color:'rgba(0,183,255,1)'}}>
      Echo
    </Typography>
    <img src={image} alt="echo" height={60}
     style={{marginLeft:'15px'}}
    />

    </AppBar>

   
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

              <Grid item xs={12} sm={7}>
                    <Posts/>
                   
              </Grid>

              <Grid item xs={12} sm={4}>
                      <Form/>
              </Grid>

          </Grid>



          
        </Container>
    
  </Container>
  );
}

export default App;
