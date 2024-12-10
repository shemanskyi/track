import * as React from 'react';

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import {GridRenderCellParams} from '@mui/x-data-grid';

export function PhoneCell(
    props: GridRenderCellParams ,
  ) {
    const phones = props.value?.filter((phone) => phone);
    if (!phones) {
      return null;
    }
  
    return <Stack alignItems="flex-start" direction="column" height="100%" justifyContent="center" width="100%">
        {phones.map((phone) => (
            <Typography color='red' key={phone} variant='body1'>
                <a href={`tel:${phone}`} style={{ color: 'lightgray', fontSize: 12}}>{phone}</a>
            </Typography>
        ))}
    </Stack>;
  }
