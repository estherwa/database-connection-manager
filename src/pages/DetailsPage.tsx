import React, { useState, FC, useEffect } from 'react';
import { Container, Typography, CircularProgress, Alert, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../styles/button';
const URL = 'http://localhost:4000/databases'


const DetailsPage: FC = () => {
  const { id } = useParams<DatabaseDetailParams>();
  const [loading, setLoading] = useState<boolean>(true);
  const [database, setDatabase] = useState<DatabaseItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getDatabaseById(id)
        .then((data) => {
          setDatabase(data);
          setLoading(false);
        })
        .catch((error) => {
          setError('Error fetching the database details');
          setLoading(false);
        });
    }
  }, [id]);

  const navigateBack = () => {
    navigate("/");
  };

  const getDatabaseById = async (id: string | number): Promise<DatabaseItem> => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching the database:', error);
      throw error;
    }
  };

  const displayFields: { key: keyof DatabaseItem; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'url', label: 'URL' },
    { key: 'username', label: 'Username' },
    { key: 'password', label: 'Password' },
    { key: 'type', label: 'Type' },
  ];


  return (
    <Container>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : database ? (
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Database Details
          </Typography>
          {displayFields.map((field) => (
            <Typography key={field.key} variant="h6">
              {field.label}: {database[field.key]}
            </Typography>
          ))}
        </Box>
      ) : (
        <Alert severity="info">No database found</Alert>
      )}

      <Button width="30px" paddingVertical={10} paddingHorizontal={15} onClick={() => navigateBack()}>
        Go back to main page
      </Button>
    </Container>
  );
};

export default DetailsPage;
export interface DatabaseItem {
  id: number;
  name: string;
  url: string;
  username: string;
  password: string;
  type: string;
}

type DatabaseDetailParams = {
  id: string;
};