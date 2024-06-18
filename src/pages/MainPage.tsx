import React, { useState, FC, useEffect } from 'react';
import { Container, Typography, Button as MuiButton, Autocomplete } from '@mui/material';
import GeneralModal from '../component/GeneralModal/GeneralModal';
import Table from '../component/Table/Table';
import { Button } from '../styles/button';
import ModalContent from '../component/ModalContent';
import { GridRowsProp } from '@mui/x-data-grid';
import axios from 'axios';
const URL = 'http://localhost:4000/databases'


const MainPage: FC = () => {
    const [handleOpen, setHandleOpen] = useState(false);
    const [rows, setRows] = useState<GridRowsProp<RowData>>([]);
    const [loading, setLoading] = useState(true);

    const handleCloseModal = (isSubmitted = false): void => {
        setHandleOpen(false);
        if (isSubmitted) {
            setLoading(true);
            fetchData().then((data) => {
                setRows(data);
                setLoading(false);
            })
        }
    };

    const fetchData = async (): Promise<RowData[]> => {
        try {
            const response = await axios.get(URL);
            const data: DatabaseItem[] = response.data;
            return data.map((item) => ({
                id: item.id,
                databaseType: item.type,
                name: item.name,
                username: item.username,
            }));

        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };

    useEffect(() => {
        fetchData().then((data) => {
            setRows(data);
            setLoading(false);
        });
    }, []);


    return (
        <Container sx={styles.StyledContainer}>
            <Typography style={styles.StyledTitle } variant="h4" gutterBottom>
                Database Information
            </Typography>

            <div style={{ position: 'relative', height: '10vh', width: '100%', left: '42%' }}>
                <Button width={"30px"} background={"green"} color={"white"} paddingHorizontal={40} onClick={() => setHandleOpen(true)}>Add Database</Button>
            </div>

            <GeneralModal displayModal={handleOpen} handleCloseModal={handleCloseModal}>
                <ModalContent handleCloseModal={handleCloseModal} />
            </GeneralModal>

            <Table loading={loading} rows={rows} />
        </Container>
    );
};

export default MainPage;
//---------------------------------------------------------------------------
export interface RowData {
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
//------------------------------------------------------------------------------------------------
const styles = {
    StyledContainer: {
      background: '#e5fbe5',
      borderRadius: '12px',

    },
    StyledButtonContainer: {
      position: 'relative',
      height: '10vh',
      width: '100%',
      left: '42%',

    },
    StyledTitle: {
        display: 'flex', 
        justifyContent: 'center',
         paddingBottom: '15px', 
         paddingTop: '15px',
          alignSelf: 'center'
      }

  };
  