import React , { useState }from 'react';
import { makeStyles } from '@mui/styles';

import { TextField, Button, Typography, Paper} from '@mui/material';

const useStyles = makeStyles({
  
});



const Form = () => {

    const { postData, setPostData } = useState({
      creator:'', title:'', message:'', tags:'',selectedFile:'',
    })

  const classes = useStyles();
  const handleSubmit = () => {

  }
  return (
      <Paper className={classes.paper}>
          <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField 
            name='creator' 
            variant="outlined" 
            label="creator" fullWidth 
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData,creator: e.target.value})}
            />
          </form>

      </Paper>
  )
  
};

export default Form;
