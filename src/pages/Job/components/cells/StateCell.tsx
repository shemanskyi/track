import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {GridRenderCellParams} from '@mui/x-data-grid';

export function StateCell(
    props: GridRenderCellParams ,
  ) {
  
    return <Stack alignItems="center" direction="row" height="100%" justifyContent="center" width="100%">
        {props.value === 'On' 
        ? <Button color='success' fullWidth size='small' variant="contained">
            On
          </Button>
        : <Button color='error' fullWidth size='small' variant="contained">
            Off
          </Button>}
    </Stack>;
  }
