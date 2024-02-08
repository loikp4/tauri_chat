'use client'
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { CSSProperties } from 'react';

interface BalloonContainerProps {
  style?: CSSProperties;
  alignRight?: boolean;
  color?: string;
  message?: string;
}
const useStyles = makeStyles((theme) => ({
  balloonContainer:{
    display: 'flex',
    flexDirection : 'column',
    alignItems: 'flex-start'
  },
  balloon: {
    position: 'relative',
    display: 'flex',
    padding: theme.spacing(2),
    backgroundColor: (props: BalloonContainerProps) => props.color ||'#00f500',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[1],
    ...(props: BalloonContainerProps) =>
      props.alignRight && {
        alignSelf: 'flex-end',
      },
      //先端に三角形がつくがコメントアウト
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

type BalloonProps = React.PropsWithChildren<BalloonContainerProps>;
function PaperBalloon({alignRight,color ,children,message}:BalloonProps) {
    console.log("childr4en:",children)
    const classes = useStyles({alignRight,color});
  
    return (
    <div className={classes.balloonContainer}>
      <Paper className={classes.balloon}>
        {children}
        <Typography>{message}</Typography>
      </Paper>
    </div>
    );
  }
  
  export default PaperBalloon;