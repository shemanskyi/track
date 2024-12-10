import * as React from 'react';

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import {GridRenderCellParams} from '@mui/x-data-grid';

export function TextCell(
    props: GridRenderCellParams ,
  ) {
  
    return <Stack alignItems="flex-start" direction="column" height="100%" justifyContent="center" width="100%">
        <Typography variant='body2'>
            {props.value}
        </Typography>
    </Stack>;
  }
