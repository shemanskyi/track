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
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      editable: true,
      field: 'phone',
      headerName: 'Phone',
      width: 200,
    },
    {
      editable: true,
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      editable: true,
      field: 'current_company',
      headerName: 'Current Company',
      //@ts-ignore
      valueGetter: (_value: never, row: { technologies: never[]; }) => row?.current_company?.name,
      width: 150,
    },
    {
      field: 'technologies',
      headerName: 'Technologies',
      sortable: false,
      valueGetter: (_value: never, row: { technologies: never[]; }) => row?.technologies?.join(', '),
      width: 300,
    },
  ];