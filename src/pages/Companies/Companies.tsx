import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridRowParams, GridToolbar } from '@mui/x-data-grid';
import { Layout, RightPanel } from 'components';

import { columns } from './Companies.constants';
import { COMPANIES } from './Companies.data';
import { Company } from './components/Company';

export default function Companies() {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState(null);

  const handleShowPanel = (params: GridRowParams) => {
      const { row } = params;
      setCompany(row);
      setOpen(true);
  };

  const handleClosePanel = () => {
    setCompany(null);
      setOpen(false);
  };

  return (
    <Layout>
      <Stack direction="row" spacing={2} sx={{ paddingBottom: '1rem'}}>
        <Button variant="contained">Add Company</Button>
        <Button variant="contained">Edit Company</Button>
        <Button variant="contained">Remove Company</Button>
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
          rows={COMPANIES}
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
            <Company company={company} />
        </Box>
      </RightPanel>}
    </Layout>
  );
}
