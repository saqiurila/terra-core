import React from 'react';

import Overlay from '../../../lib/Overlay';

const OverlayExample = () => (
  <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.CLEAR} id="clear-overlay" >
    <h1>Clear Overlay</h1>
  </Overlay>
);

export default OverlayExample;
