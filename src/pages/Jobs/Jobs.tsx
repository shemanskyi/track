import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridRowParams, GridToolbar } from '@mui/x-data-grid';
import { Layout, RightPanel } from 'components';

import { columns } from './Jobs.constants';
import { JOBS } from './Jobs.data';
import { Job } from './components/Job/Job';

export default function Jobs() {
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState(null);

  const handleShowPanel = (params: GridRowParams) => {
      const { row } = params;
      setJob(row);
      setOpen(true);
  };

  const handleClosePanel = () => {
    setJob(null);
      setOpen(false);
  };
  return (
    <Layout>
      <Stack direction="row" spacing={2} sx={{ paddingBottom: '1rem'}}>
        <Button variant="contained">Add Job</Button>
        <Button variant="contained">Edit Job</Button>
        <Button variant="contained">Remove Job</Button>
      </Stack>
       <Box sx={{ height: '100%', overflow: 'auto', width: '100%' }}>
        <DataGrid
          checkboxSelection
          columns={columns}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          onRowClick={(params: GridRowParams) => {
            handleShowPanel(params);
          }}
          pageSizeOptions={[5]}
          rows={JOBS}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
      {open && <RightPanel onClose={handleClosePanel} open={open}>
        <Box sx={{ marginTop: '64px' }}>
            {/*@ts-ignore*/}
            <Job job={job} />
        </Box>
      </RightPanel>}
    </Layout>
  );
}
