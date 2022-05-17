import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../../FormFields/InputField";


export default function PersonalInfoForm(props) {
  const {
    formField: {
      fullName,
      displayName
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Welcome! First things first ...
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField name={fullName.name} label={fullName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField name={displayName.name} label={displayName.label} fullWidth />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
