import React, { useState } from 'react';
import { Popover, Button } from '@material-ui/core';

const PopUp = ({ content, triggerElement }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div onClick={handleClick}>{triggerElement}</div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
        style={{ marginTop: '34px' }}
      >
        {content}
      </Popover>
    </>
  );
};

export default PopUp;
