import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { COMPANIES } from 'pages/Companies/Companies.data'; 
import { JOBS } from 'pages/Jobs/Jobs.data'; 

import { CandidateTypes } from '../../Candidates.types';
//@ts-ignore
export const Candidate: React.FC<CandidateTypes | null> = ({ candidate }) => {
  const proposals = candidate.technologies?.map((tech: string) => JOBS.filter((job) => job.technologies?.includes(tech))).flat(2);

  const companiesTechnologies = COMPANIES.map((company) => ({
    ...company,
    technologies: company.openJobs.map((job) => job.technologies).flat(2)
  }));
  const companies = candidate.technologies?.map((tech: string) => companiesTechnologies.filter((company) => company.technologies?.includes(tech))).flat(2);

  return(
    <Box sx={{ padding: '1rem', width: 700 }}>
      <Box>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
        <Typography gutterBottom variant="h4">
            {candidate.name}
          </Typography>

        <Typography gutterBottom sx={{ color: candidate.status === 'Passive' ? '#f04438' : '#039855'}} variant="h6">
            {candidate.status}
          </Typography>
        </Stack>
        <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-start"
            >
              <Box sx={{ width: 150 }}>Phone:</Box>
              <Box>
                <Typography gutterBottom variant="body2">
                  {candidate?.phone}
                </Typography>  
              </Box>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-start"
            >
              <Box sx={{ width: 150 }}>Email:</Box>
              <Box>
                <Typography gutterBottom variant="body2">
                  {candidate?.email}
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
                  {candidate?.technologies?.join(', ')}
                </Typography>  
              </Box>
            </Stack>


        <Divider sx={{ background: 'white', margin: '1rem 0'}} />

        {!candidate.current_company && 'No current job'}
        {candidate.current_company && <Box>
          <Typography gutterBottom variant="h6">
                  Current job:
                </Typography>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Box sx={{ width: 150 }}>Company:</Box>
              <Box>
                <Typography gutterBottom variant="h6">
                  {candidate.current_company?.name}
                </Typography>  
              </Box>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Box sx={{ width: 150 }}>Position:</Box>
              <Box>
                <Typography gutterBottom variant="body2">
                  {candidate.current_company?.position}
                </Typography>  
              </Box>
            </Stack>
          </Box>}
          <Divider sx={{ background: 'white', margin: '1rem 0'}} />
          <Typography gutterBottom variant="h6">
            Job history:
          </Typography>

          {candidate?.previous_companies?.map((job: any) => (
            <Box key={job.name} sx={{ paddingBottom: '0.5rem' }}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
              >
                <Box sx={{ width: 150 }}>Company:</Box>
                <Box>
                  <Typography gutterBottom variant="body2">
                    {job?.name}
                  </Typography>  
                </Box>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
              >
                <Box sx={{ width: 150 }}>Position:</Box>
                <Box>
                  <Typography gutterBottom variant="body2">
                    {job?.position}
                  </Typography>  
                </Box>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
              >
                <Box sx={{ width: 150 }}>Period:</Box>
                <Box>
                  <Typography gutterBottom variant="body2">
                    {job?.start_date} - {job?.end_date}
                  </Typography>  
                </Box>
              </Stack>
            </Box>
          ))}
          <Divider sx={{ background: 'white', margin: '1rem 0'}} />
          <Typography gutterBottom variant="h6">
            Jobs proposals:
          </Typography>
          {proposals.map((job: any) => (
            <Box key={job.id} sx={{ paddingBottom: '0.5rem'}}>
              <a href='#' style={{ color: 'white' }}>{job.title} / {job.location}</a>
            </Box>
          ))}
          <Divider sx={{ background: 'white', margin: '1rem 0'}} />
          <Typography gutterBottom variant="h6">
            Company proposals:
          </Typography>
          {companies.map((company: any) => (
            <Box key={company.id} sx={{ paddingBottom: '0.5rem'}}>
              <a href='#' style={{ color: 'white' }}>{company.name} / {company.address}</a>
            </Box>
          ))}
      </Box>
    </Box>);
};

export default memo(Candidate);
