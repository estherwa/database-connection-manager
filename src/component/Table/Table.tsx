
import React, { useState, useEffect, FC } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { dataGridStyles } from './Table.style';
import axios from 'axios';
const URL = 'http://localhost:4000/databases'

interface RowData {
  id: number;
  databaseType: string;
  name: string;
  username: string;
}
export interface DatabaseItem {
  id: number;
  name: string;
  url: string;
  username: string;
  password: string;
  type: string;
}

const columns: GridColDef[] = [
  { field: 'databaseType', headerName: 'Database Type', width: 200 },
  { field: 'name', headerName: 'Database Name', width: 200 },
  { field: 'username', headerName: 'Username', width: 200 },
];

const fetchData = async (): Promise<RowData[]> => {
  const response = await axios.get(URL);
  const data: DatabaseItem[] = response.data;
      return data.map((item) => ({
        id: item.id,
        databaseType: item.type,
        name: item.name,
        username: item.username,
      }));
};

const Table: FC = () => {
  const [rows, setRows] = useState<GridRowsProp<RowData>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((data) => {
      setRows(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Typography style={{ display: 'flex', justifyContent: 'center', paddingBottom: "15px", alignSelf: 'center'}} variant="h4" gutterBottom>
        Database Information
      </Typography>
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
