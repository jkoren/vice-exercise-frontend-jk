import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const vicelogo = '../images/vice-media-group-logo.svg'
export default function FooterBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={vicelogo} width="200"/>
        </IconButton>
      </Toolbar>
    </div>
  );
}
