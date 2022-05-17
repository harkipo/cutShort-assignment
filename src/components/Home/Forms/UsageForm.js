import React , {useState} from "react";
import { Grid, Typography ,Card , Box , CardContent } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';


export default function UsageForm(props) {

  const [active, setActive] = useState(0);


  return (
    <React.Fragment>

      <Grid container  spacing={2}>
                <Grid item xs={6}>
                <Box sx={{ minWidth: 275 }} onClick={()=>setActive(0)}>

                        <Card variant="outlined" style={{borderColor:active === 0 ? "#664de5" : ""}}>
                        <CardContent >
                        <PersonIcon/>
                        <Typography variant="h5" component="h2">
                            For Myself
                        </Typography>
                        <Typography variant="body2" component="p">
                            Write better , think more clearly. Stay organized.
                        </Typography>
                        </CardContent>
                        </Card>
                        </Box>
                </Grid>
                <Grid item xs={6}>
                <Box sx={{ minWidth: 275 }} onClick={()=>setActive(1)}>

                        <Card  variant="outlined" style={{borderColor:active === 1 ? "#664de5" : ""}}>
                        <CardContent>
                        <GroupIcon/>

                        <Typography variant="h5" component="h2">
                            With Team
                        </Typography>
                        <Typography variant="body2" component="p">
                            Wikis, docs, tasks and projects, all in one place.
                        </Typography>
                        </CardContent>
                       
                        </Card>
                        </Box>
                </Grid>
          </Grid>
   
    </React.Fragment>
  );
}
