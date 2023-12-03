import React, { memo } from 'react';

import Layout from './Layout';
import { LayoutType } from './Layout.types';

export const LayoutContainer: React.FC<LayoutType> = ({ children }) => {
  return <Layout>
            {children}
         </Layout>;
};

export default memo(LayoutContainer);
