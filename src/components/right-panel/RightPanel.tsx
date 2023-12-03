import * as React from 'react';

import Drawer from '@mui/material/Drawer';

// import { RightPanelType } from './RightPanel.types';

//@ts-ignore
export default function RightPanel({ children, onClose, open }) {
  return (
    <div>
      <Drawer anchor="right" onClose={onClose} open={open} sx={{ width: 700 }}>
        {children}
      </Drawer>
    </div>
  );
}
