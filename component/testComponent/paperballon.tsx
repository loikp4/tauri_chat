'use client'
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  balloon: {
    position: 'relative',
    display: 'inline-block',
    padding: theme.spacing(2),
    backgroundColor: '#00f500',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[1],
    /*'&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: theme.spacing(-2),
      transform: 'translateY(-50%)',
      borderTop: `${theme.spacing(2)}px solid transparent`,
      borderRight: `${theme.spacing(2)}px solid #f5f5f5`,
      borderBottom: `${theme.spacing(2)}px solid transparent`,
    },*/
  },
}));
type BalloonProps = React.PropsWithChildren<{}>;
function PaperBalloon(props:BalloonProps) {
    const classes = useStyles();
  
    return (
      <Paper className={classes.balloon}>
        {props.children}
      </Paper>
    );
  }
  
  export default PaperBalloon;