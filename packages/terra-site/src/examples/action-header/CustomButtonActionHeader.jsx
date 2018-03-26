/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader title="Custom Button Action Header">
      <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */