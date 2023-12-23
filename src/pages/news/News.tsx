import React, { useState } from 'react';
// alerts
import DialogWrapper from '../../components/dialog/DialogWrapper';
import ConfirmationAlert from '../../components/alerts/ConfirmationAlert';
const News = () => {
  const [open, setOpen] = useState(false);
  const logoutUser = () => {
    console.log('done');
    setOpen(false);
  };
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <DialogWrapper open={open} setOpen={setOpen}>
        <ConfirmationAlert
          title="are you sure ??"
          description="you will delete"
          confirmFn={logoutUser}
          cancelFn={() => setOpen(false)}
        />
      </DialogWrapper>
    </div>
  );
};

export default News;
