import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { DataGrid, GridRowParams, GridToolbar } from '@mui/x-data-grid';
import { Layout } from 'components';

import { columns } from './Jobs.constants';
import { JOBS } from './Jobs.data';

export default function Jobs() {

  const navigate = useNavigate();

  const handleRowClick = (params: GridRowParams) => {
      const { id } = params.row;
      navigate(`${id}`);
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
            handleRowClick(params);
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
    </Layout>
  );
}
