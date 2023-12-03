import * as React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export const Header: React.FC<object> = () => {
  return (
    <Paper>
      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        spacing={{ md: 4, sm: 2, xs: 1 }}
      >
       
      </Stack>
    </Paper>
  );
};