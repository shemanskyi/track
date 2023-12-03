import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CANDIDATES } from 'pages/Candidates/Candidates.data'; 

import { JobTypes } from '../../Jobs.types';
//@ts-ignore
export const Job: React.FC<JobTypes | null> = ({ job }) => {
  const proposals = job.technologies?.map((tech: string) => CANDIDATES.filter((cdt) => cdt.technologies?.includes(tech))).flat(2);
  return(
    <Box sx={{ padding: '1rem', width: 700 }}>
      <Box>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
        <Typography gutterBottom variant="h4">
            {job.title}
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
        <Typography gutterBottom variant="body2">
            {job.description}
          </Typography>
        </Stack>

        <Divider sx={{ background: 'white', margin: '1rem 0'}} />
          <Typography gutterBottom variant="h6">
              Candidates:
            </Typography>
            {proposals?.map((cdt: any) => (
              <Box key={cdt.id} sx={{ paddingBottom: '0.5rem'}}>
                <a href='#' style={{ color: 'white' }}>{cdt.name} | {cdt.phone} | {cdt.email}</a>
              </Box>
            ))}
  
      </Box>
    </Box>);
};

export default memo(Job);
