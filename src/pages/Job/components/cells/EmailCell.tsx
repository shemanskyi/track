import * as React from 'react';

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import {GridRenderCellParams} from '@mui/x-data-grid';

export function EmailCell(
    props: GridRenderCellParams ,
  ) {
    const emails = props.value?.filter((email) => email);
    if (!emails) {
      return null;
    }
  
    return <Stack alignItems="flex-start" direction="column" height="100%" justifyContent="center" width="100%">
        {emails.map((email) => (
             <Typography key={email} variant='body1'>
             <a href={`mailto:${email}`} style={{ color: 'lightgray', fontSize: 12}}>{email}</a>
         </Typography>
        ))}
    </Stack>;
  }
