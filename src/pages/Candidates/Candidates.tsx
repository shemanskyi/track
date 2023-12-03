import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridRowParams, GridToolbar } from '@mui/x-data-grid';
import { Layout, RightPanel } from 'components';

import { columns } from './Candidates.constants';
import { CANDIDATES } from './Candidates.data';
import { Candidate } from './components/Candidate';

export default function Candidates() {
    const [open, setOpen] = useState(false);
    const [candidate, setCandidate] = useState(null);

    const handleShowPanel = (params: GridRowParams) => {
        const { row } = params;
        setCandidate(row);
        setOpen(true);
    };

    const handleClosePanel = () => {
        setCandidate(null);
        setOpen(false);
    };

    return (
    <Layout>
      <Stack direction="row" spacing={2} sx={{ paddingBottom: '1rem'}}>
        <Button variant="contained">Add Candidate</Button>
        <Button variant="contained">Edit Candidate</Button>
        <Button variant="contained">Remove Candidate</Button>
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
          rows={CANDIDATES}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
      {open && <RightPanel onClose={handleClosePanel} open={open} title="Candidate">
        <Box sx={{ marginTop: '64px' }}>
            {/*@ts-ignore*/}
            <Candidate candidate={candidate} />
        </Box>
      </RightPanel>}
    </Layout>
  );
}

