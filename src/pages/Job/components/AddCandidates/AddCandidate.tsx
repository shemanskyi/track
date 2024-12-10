import React, { memo } from 'react';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack'; 
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from 'pages/Candidates/Candidates.constants';
import { CANDIDATES } from 'pages/Candidates/Candidates.data';

//@ts-ignore
export const AddCandidate: React.FC<JobTypes | null> = () => {
  return(
    <Box sx={{ padding: '1rem', width: 700 }}>
      <Box>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
        <Typography gutterBottom variant="h4">
            Add Candidates
          </Typography>
          <Button size="small" startIcon={<PersonAddIcon />}>Add Selected Candidates</Button>
        </Stack>
        <Divider />
        <Box sx={{ height: '100%', overflow: 'auto', width: '100%' }}>
            <DataGrid
                checkboxSelection
                columns={columns}
                columnVisibilityModel={{
                  current_company: false,
                  id: false,
                  status: false,
                  technologies: false,
                }}
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
                pageSizeOptions={[5]}
                rows={CANDIDATES}
                slotProps={{
                    toolbar: {
                    showQuickFilter: true,
                    },
                }}
                />
        </Box>
      </Box>
    </Box>);
};

export default memo(AddCandidate);
