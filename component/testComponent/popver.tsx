'use client'
import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

interface BalloonProps {
  text: string;
}

const BalloonComponent: React.FC<BalloonProps> = ({ text }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Balloon
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ padding: '10px' }}>
          <p>{text}</p>
        </div>
      </Popover>
    </div>
  );
};

export default BalloonComponent;
