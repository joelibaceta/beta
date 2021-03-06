import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
    footer,
    header,
        
} from './components';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    }
}));

const Inicio = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={12}
            sm={6}
            xl={3}
            xs={12}
          >
            <header />
          </Grid>
  
          <Grid
            item
            lg={12}
            sm={6}
            xl={3}
            xs={12}
          >
            <footer />
          </Grid>
  
          
          
        </Grid>
      </div>
    );
  };
  
  export default Inicio;
  

