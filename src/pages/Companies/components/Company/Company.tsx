import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CANDIDATES } from 'pages/Candidates/Candidates.data'; 

import { CompanyTypes } from '../../Companies.types';
//@ts-ignore
export const Company: React.FC<CompanyTypes | null> = ({ company }) => {
  const technologies = company.openJobs.map((job) => job.technologies).flat(2);

  const proposals = technologies?.map((tech: string) => CANDIDATES.filter((cdt) => cdt.technologies?.includes(tech))).flat(2);
  return(
    <Box sx={{ padding: '1rem', width: 700 }}>
      <Box>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
        <Typography gutterBottom variant="h4">
            {company.name}
          </Typography>
        </Stack>
        <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-start"
            >
              <Box sx={{ width: 150 }}>Address:</Box>
              <Box>
                <Typography gutterBottom variant="body2">
                  {company?.address}
                </Typography>  
              </Box>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-start"
            >
              <Box sx={{ width: 150 }}>Technologies:</Box>
              <Box>
                <Typography gutterBottom variant="body2">
                  {technologies?.join(', ')}
                </Typography>  
              </Box>
            </Stack>

        <Divider sx={{ background: 'white', margin: '1rem 0'}} />
        <Typography gutterBottom variant="h6">
            Open Jobs:
          </Typography>
          {company.openJobs?.map((job: any) => (
            <Box key={job.id} sx={{ paddingBottom: '0.5rem'}}>
              <a href='#' style={{ color: 'white' }}>{job.title} / {job.location}</a>
            </Box>
          ))}

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

export default memo(Company);
