import { GridColDef } from '@mui/x-data-grid';

//@ts-ignore
export const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      editable: true,
      field: 'title',
      headerName: 'Title',
      width: 250,
    },
    {
      editable: true,
      field: 'department',
      headerName: 'Department',
      width: 250,
    },
    {
      editable: true,
      field: 'description',
      headerName: 'Description',
      width: 500,
    },
    {
      field: 'technologies',
      headerName: 'Technologies',
      sortable: false,
      valueGetter: (_value: never, row: { technologies: never[]; }) => row?.technologies?.join(', '),
      width: 300,
    },
  ];