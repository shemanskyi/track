import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid,  GridToolbar } from '@mui/x-data-grid';
import { Layout } from 'components';
import { columns as candidatesColumns } from 'pages/Candidates/Candidates.constants';
import { CANDIDATES } from 'pages/Candidates/Candidates.data';
// import { COMPANIES } from 'pages/Companies/Companies.data';
// import { JOBS } from 'pages/Jobs/Jobs.data';

export default function Home() {
  return (
    <Layout>
      <Box sx={{ alignItems: 'center', width: '100%'}}>
      <Stack
          alignItems="center"
          direction="column"
          justifyContent="center"
          marginBottom="1rem"
        >
        <Typography gutterBottom variant="h6">
            Latest Candidates
          </Typography>
          <Box sx={{ height: 300, overflow: 'auto', width: '100%' }}>
            <DataGrid
                checkboxSelection
                columns={candidatesColumns}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                disableRowSelectionOnClick
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                rows={CANDIDATES}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
                slots={{ toolbar: GridToolbar }}
              />
          </Box>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          <Box sx={{ width: '50%'}}>
            <Stack
              alignItems="center"
              direction="column"
              justifyContent="space-between"
            >
              <Typography gutterBottom variant="h6">
                Latest Companies
              </Typography>
              <Box sx={{ height: 400 }}>
              
              </Box>
            </Stack>
          </Box>
          <Box sx={{ width: '50%'}}>
            <Stack
              alignItems="center"
              direction="column"
              justifyContent="space-between"
            >
              <Typography gutterBottom variant="h6">
                Latest Jobs
              </Typography>
              <Box sx={{ height: 400 }}></Box>
            </Stack>
          </Box>
        </Stack>
        </Box>
    </Layout>
  );
}
