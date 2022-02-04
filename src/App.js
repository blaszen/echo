import {Container, Typography, AppBar, Grow, Grid} from '@mui/material';

import image from './images/image.png';

import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';



function App() {

 

  return (
  <Container maxWidth="lg">
    <AppBar position="static" color="inherit"
    sx={{
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >

    <Typography  variant='h2' align='center'>
      Echo
    </Typography>
    <img src={image} alt="echo" height={60}/>

    </AppBar>

    <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

              <Grid item xs={12} sm={7}>
                    <Posts/>
              </Grid>

              <Grid item xs={12} sm={7}>
                      <Form/>
              </Grid>

          </Grid>



          
        </Container>
    </Grow>
  </Container>
  );
}

export default App;
