import React from "react";
import { Grid, Typography } from "@material-ui/core";
import InputField from "../../FormFields/InputField";


export default function WorkspaceForm(props) {
  const {
    formField: {
      workspaceName,
      workspaceUrl
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Lets set up a home for all your work
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <InputField name={workspaceName.name} label={workspaceName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputField name={workspaceUrl.name} label={workspaceUrl.label} fullWidth />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
