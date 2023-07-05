import React from 'react';
import { Button, Typography, Popover, useMediaQuery } from '@mui/material';

const PopUp = ({ triggerElement, content }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isScreenSmall = useMediaQuery('(max-width: 867px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  const popoverStyle = {
    margin: '35px',
  };

  return (
    <div>
      <span onClick={handleClick}>{triggerElement}</span>
      <Popover
        id={id}
        open={open && !isScreenSmall}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={popoverStyle}
      >
        {content}
      </Popover>
    </div>
  );
};

export default PopUp;
