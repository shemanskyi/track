import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {GridRenderCellParams} from '@mui/x-data-grid';

export function StatusCell(
    props: GridRenderCellParams ,
  ) {
    const STATUSES = {
        bad: {
            color: 'error',
            name: 'Bad'
        },
        good: {
            color: 'success',
            name: 'GOOD'
        },
        maybe: {
            color: 'warning',
            name: 'MAYBE'
        },
        unset: {
            color: 'default',
            name: 'NOT SET'
        }
    };
    return <Stack alignItems="center" direction="row" height="100%" justifyContent="center" width="100%">
       <Button color={STATUSES[props.value].color} fullWidth size='small' variant="contained">{STATUSES[props.value].name}</Button>
    </Stack>;
  }
