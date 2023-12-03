import { GridColDef } from '@mui/x-data-grid';

//@ts-ignore
export const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      editable: true,
      field: 'name',
      headerName: 'Name',
      width: 250,
    },
    {
      editable: true,
      field: 'address',
      headerName: 'Address',
      width: 350,
    },
    {
      editable: true,
      field: 'description',
      headerName: 'Description',
      width: 500,
    },
    {
      editable: true,
      field: 'employeeCount',
      headerName: 'Employees',
      width: 150,
    },
    {
      editable: true,
      field: 'openJobsCount',
      headerName: 'Open Jobs',
      width: 150,
    },
  ];