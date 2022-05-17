import React from 'react';
import { Typography , Grid , Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ProcessSuccess(props) {
  return (
    <React.Fragment>
      <br/>

      <Grid container spacing={2} justify="center">
      <CheckCircleIcon color='primary' style={{fontSize:"70px"}} />

</Grid>
      <br/><br/>
      <Grid container spacing={2} justify="center">
     

      <Typography variant="h4" gutterBottom>
        <strong>Congratulations, <span style={{textTransform: "uppercase"}}>{props?.values?.fullName}</span> !</strong>
      </Typography>
      <Typography variant="subtitle1">
       You have completed onboarding, you can start using cutShort 
      </Typography>

      </Grid>
      <br/>
      <br/>
      <Grid container spacing={2} justify="center">
      <Button variant="contained" color="primary" size='large'>
        Launch CutShort
      </Button>
        </Grid>
     
    </React.Fragment>
  );
}

export default ProcessSuccess;
