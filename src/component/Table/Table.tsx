
import React, { useState, useEffect, FC } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { dataGridStyles } from './Table.style';
import axios from 'axios';
import GeneralModal from '../GeneralModal/GeneralModal';
import { Button } from '../../styles/button';
import { RowData } from '../../pages/MainPage';

const columns: GridColDef[] = [
  { field: 'databaseType', headerName: 'Database Type', width: 200 },
  { field: 'name', headerName: 'Database Name', width: 200 },
  { field: 'username', headerName: 'Username', width: 200 },
];



interface TableProps {
 loading : boolean;
 rows: readonly RowData[];
}


const Table: FC<TableProps> = ({loading, rows}) => {
  



  return (
    <Container>

      <Box sx={{ height: 400, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',alignSelf: 'center'}}>
        {loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            sx={dataGridStyles}
          />
        )}
      </Box>
    </Container>
  );
};

export default Table;
