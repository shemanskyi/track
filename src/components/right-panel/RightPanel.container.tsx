import React, { memo } from 'react';

import RightPanel from './RightPanel';
import { RightPanelType } from './RightPanel.types';

export const RightPanelContainer: React.FC<RightPanelType> = ({ children, onClose, open }) => {
  return <RightPanel onClose={onClose} open={open}>
            {children}
         </RightPanel>;
};

export default memo(RightPanelContainer);
