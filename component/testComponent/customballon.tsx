'use client'
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';

const CustomBalloon: React.FC = () => {
  return (
    <Tooltip title="This is a custom balloon" arrow>
      <IconButton>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CustomBalloon;