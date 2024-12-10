import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SearchIcon from '@mui/icons-material/Search';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { DataGridPremium,
    GridColumnVisibilityModel,
    GridRowParams, GridRowSelectionModel, useGridApiRef, useKeepGroupedColumnsHidden } from '@mui/x-data-grid-premium';
import { Layout, RightPanel } from 'components';
import { contactColumns } from 'pages/Candidates/Candidates.constants';
import { CANDIDATES } from 'pages/Candidates/Candidates.data';
import { JOBS } from 'pages/Jobs/Jobs.data';

import { CONTACTS } from './Job.data';
import { AddCandidate } from './components/AddCandidates';

export default function Jobs() {

  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const { jobId } = useParams();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const [columnVisibilityModel, setColumnVisibilityModel] =
  React.useState<GridColumnVisibilityModel>({
    city: true,
    current_company: true,
    current_title: true,
    emails: true,
    lastContactedBy: true,
    name: true,
    pass: true,
    phoneNumbers: true,
    state: true,
    status: true,
    technologies: true,
    totalCalls: true
  });
    const [rowSelectionModel, setRowSelectionModel] =
        React.useState<GridRowSelectionModel>([]);
    const [byStatus, setByStatus] =
        React.useState<string>('');
    const [byState, setByState] =
        React.useState<string>('');
    
    const [openPanel, setOpenPanel] = React.useState(false);
    const [openContactPanel, setOpenContactPanel] = React.useState(false);

  //@ts-ignore
  const job = JOBS.find((_job) => _job.id === +jobId);
  const candidates = CANDIDATES.map((candidate) => ({
    current_company: candidate.current_company,
    previous_companies: candidate.previous_companies,
    state: candidate.status === 'Passive' ? 'Off' : 'On',
    technologies: candidate.technologies,
  }));
  const contacts = CONTACTS.map((contact, index) => ({...contact, ...candidates[index]}));

  const handleRowClick = (params: GridRowParams, event) => {
      if (event.target.type === 'button') return;
      handleShowContactPanel();
      console.log(event.target);
  };

  const handleToggleVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnVisibilityModel({
      ...columnVisibilityModel,
      [event.target.name]: event.target.checked,
    });
  };

  const handleGroupByStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked }  = event.target;
    if (checked) return setByStatus('status');
    setByStatus('');
  };

  const handleShowColumnsPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHideColumnsPicker = () => {
    setAnchorEl(null);
  };

  const handleGroupByState = (event) => {
    const { checked }  = event.target;
    if (checked) return setByState('state');
    setByState('');
  };

  const handleReturnToList = () => navigate('/jobs');

  const handleShowPanel = () => {
      setOpenPanel(true);
  };

  const handleClosePanel = () => {
    setOpenPanel(false);
  };

  const handleShowContactPanel = () => {
      setOpenContactPanel(true);
  };

  const handleCloseContactPanel = () => {
    setOpenContactPanel(false);
  };

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 10,
        },
      },
    },
  });

  return (
    <Layout>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={2} sx={{ margin: '0 0 1rem 0'}} width="100%">
            <Stack direction="column" display="flex">
                <Typography gutterBottom={false} variant="h4">Job Requisition Summary - {job?.title}</Typography>
                <Typography variant="body2">{job?.description}</Typography>
            </Stack>
            <Stack alignItems="center" direction="row" display="flex" spacing={1} sx={{ margin: '0 0 1rem 0'}}>
                <IconButton aria-label="add" onClick={handleShowPanel} title='Add candidates'>
                    <PersonAddIcon />
                </IconButton>
                <Divider flexItem orientation="vertical" variant="middle" />
                <IconButton aria-label="edit" title='Edit Job'>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" title='remove Job'>
                    <DeleteIcon />
                </IconButton>
                <Divider flexItem orientation="vertical" variant="middle" />
                <Typography variant="body2">Date started - 11/13/2024</Typography>
                <Divider flexItem orientation="vertical" variant="middle" />
                <IconButton aria-label="return" onClick={handleReturnToList} title='Back To The List'>
                    <LowPriorityIcon />
                </IconButton>
            </Stack>    
        </Stack>
        <Stack alignItems="center" direction="row" justifyContent="space-between" sx={{ paddingBottom: '1rem'}} width="100%">
         <Stack direction="row" spacing={2}>
            <Button onClick={handleShowPanel} size="small" startIcon={<PersonAddIcon />}>Add Candidates</Button>
            {rowSelectionModel.length > 0 && <Button size="small" startIcon={<PersonRemoveIcon />}>Remove Candidates</Button>}
         </Stack>
         <Stack direction="row" spacing={2} >
            <FormGroup>
                <FormControlLabel control={<Switch checked={byState !== ''} onChange={handleGroupByState} />} label="Group by state"  />
            </FormGroup>
            <FormGroup>
                <FormControlLabel control={<Switch checked={byStatus !== ''} onChange={handleGroupByStatus} />} label="Group by status"  />
            </FormGroup>
            <IconButton aria-label="columns-picker" onClick={handleShowColumnsPicker} title='Show/Hide Columns'>
                <ViewColumnIcon />
            </IconButton>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
                }}
                id="columns-picker"
                onClose={handleHideColumnsPicker}
                open={open}
            >
                <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.name} name="name" onChange={handleToggleVisibility} />
                        }
                        label="Name"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.current_title} name="current_title" onChange={handleToggleVisibility} />
                        }
                        label="Current Title"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.current_company} name="current_company" onChange={handleToggleVisibility} />
                        }
                        label="Current Company"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.city} name="city" onChange={handleToggleVisibility} />
                        }
                        label="City"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.state} name="state" onChange={handleToggleVisibility} />
                        }
                        label="State"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.status} name="status" onChange={handleToggleVisibility} />
                        }
                        label="Status"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.emails} name="emails" onChange={handleToggleVisibility} />
                        }
                        label="Emails"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.phoneNumbers} name="phoneNumbers" onChange={handleToggleVisibility} />
                        }
                        label="Phones"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.pass} name="pass" onChange={handleToggleVisibility} />
                        }
                        label="Passed"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.totalCalls} name="totalCalls" onChange={handleToggleVisibility} />
                        }
                        label="Total Calls"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.lastContactedBy} name="lastContactedBy" onChange={handleToggleVisibility} />
                        }
                        label="Last Contacted By"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={columnVisibilityModel.technologies} name="technologies" onChange={handleToggleVisibility} />
                        }
                        label="Technologies"
                    />
                    </FormGroup>
                </FormControl>
            </Popover>
            <TextField
                id="outlined-size-small"
                label="Quick search"
                size="small"
                slotProps={{
                    input: {
                    endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                    },
                }}
            />
         </Stack>
        </Stack>
       <Box sx={{ height: '100%', overflow: 'scroll', width: '100%' }}>
        <DataGridPremium
          apiRef={apiRef}
          autoPageSize
          checkboxSelection
          /*@ts-ignore */
          columns={contactColumns}
          columnVisibilityModel={columnVisibilityModel}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableRowSelectionOnClick
          getRowHeight={() => 'auto'}
          initialState={initialState}
        //   onColumnVisibilityModelChange={(newModel) =>
        //     setColumnVisibilityModel(newModel)
        //   }
          onRowClick={(params: GridRowParams, event) => {
            handleRowClick(params, event);
          }}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          pageSizeOptions={[5]}
          pagination
          rowGroupingModel={[byStatus, byState]}
          rows={contacts}
          rowSelectionModel={rowSelectionModel}
        />
      </Box>
      {openPanel && <RightPanel onClose={handleClosePanel} open={openPanel} title="Candidate">
        <Box sx={{ marginTop: '64px' }}>
            {/*@ts-ignore*/}
            <AddCandidate />
        </Box>
      </RightPanel>}
      {openContactPanel && <RightPanel onClose={handleCloseContactPanel} open={openContactPanel} title="Candidate">
        <Box sx={{ marginTop: '64px' }}>
            {/*@ts-ignore*/}
            <AddCandidate />
        </Box>
      </RightPanel>}
    
    </Layout>
  );
}
