import * as React from 'react';

import { GridColDef } from '@mui/x-data-grid';
import { EmailCell } from 'pages/Job/components/cells/EmailCell';
import { PhoneCell } from 'pages/Job/components/cells/PhoneCell';
import { StateCell } from 'pages/Job/components/cells/StateCell';
import { StatusCell } from 'pages/Job/components/cells/StatusCell';
import { TextCell } from 'pages/Job/components/cells/TextCell';

//@ts-ignore
export const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      editable: true,
      field: 'name',
      headerName: 'Name',
      width: 200,
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


//@ts-ignore
export const contactColumns: GridColDef<(typeof rows)[number]>[] = [
  {
    editable: true,
    field: 'state',
    headerName: 'State',
    renderCell: (params) => <StateCell {...params} />,
    type: 'singleSelect',
    valueOptions: ['On', 'Off'],
    width: 50,
  },
  {
    editable: true,
    field: 'name',
    headerName: 'Name',
    renderCell: (params) => <TextCell {...params} />,
    width: 200,
  },
  {
    editable: true,
    field: 'current_title',
    headerName: 'Current Title',
    renderCell: (params) => <TextCell {...params} />,
    //@ts-ignore
    valueGetter: (_value: never, row: { technologies: never[]; }) => row?.current_company?.position,
    width: 200,
  },
  {
    editable: true,
    field: 'current_company',
    headerName: 'Current Company',
    renderCell: (params) => <TextCell {...params} />,
    //@ts-ignore
    valueGetter: (_value: never, row: { technologies: never[]; }) => row?.current_company?.name,
    width: 200,
  },
  {
    editable: true,
    field: 'city',
    headerName: 'City',
    renderCell: (params) => <TextCell {...params} />,
    width: 150,
  },
  {
    editable: true,
    field: 'status',
    headerName: 'Status',
    renderCell: (params) => <StatusCell {...params} />,
    type: 'singleSelect',
    valueOptions: ['unset', 'good', 'maybe', 'bad'],
    width: 150,
  },
  {
    editable: true,
    field: 'emails',
    headerName: 'Emails',
    renderCell: (params) => <EmailCell {...params} />,
    width: 200,
  },
  {
    editable: true,
    field: 'phoneNumbers',
    headerName: 'Phones',
    renderCell: (params) => <PhoneCell {...params} />,
    width: 200,
  },
  {
    field: 'pass',
    headerName: 'Passed',
    renderCell: (params) => <TextCell {...params} />,
    sortable: false,
    //@ts-ignore
    valueGetter: (_value: never, row: { technologies: never[]; }) => row?.pass?.length,
    width: 75,
  },
  {
    field: 'totalCalls',
    headerName: 'Total Calls',
    renderCell: (params) => <TextCell {...params} />,
    sortable: false,
    width: 100,
  },
  {
    field: 'lastContactedBy',
    headerName: 'Last Contacted By',
    renderCell: (params) => <TextCell {...params} />,
    sortable: false,
    width: 150,
  },
  {
    field: 'technologies',
    headerName: 'Technologies',
    renderCell: (params) => <TextCell {...params} />,
    sortable: false,
    valueGetter: (_value: never, row: { technologies: never[]; }) => row?.technologies?.join(', '),
    width: 300,
  },
];