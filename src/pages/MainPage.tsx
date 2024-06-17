import React, { useState, FC } from 'react';
import { Container, Typography, Button as MuiButton, Autocomplete } from '@mui/material';
import GeneralModal from '../component/GeneralModal/GeneralModal';
import Table from '../component/Table/Table';
import { Button } from '../styles/button';
import ModalContent from '../component/ModalContent';

const typeOptions = [
    { label: 'Snowflake', value: 'Snowflake' },
    { label: 'Trino', value: 'Trino' },
    { label: 'MySQL', value: 'MySQL' }
];
const MainPage: FC = () => {
    const [handleOpen, setHandleOpen] = useState(false);

    const handleCloseModal = (): void => {
        setHandleOpen(false);
    };

    return (
        <Container>
            <Typography style={{ display: 'flex', justifyContent: 'center', paddingBottom: '15px', alignSelf: 'center' }} variant="h4" gutterBottom>
                Database Information
            </Typography>

            <div style={{ position: 'relative', height: '10vh', width: '100%', left: '42%' }}>
                <Button width={"30px"} background={"green"} color={"white"} paddingHorizontal={40} onClick={() => setHandleOpen(true)}>Add Database</Button>
            </div>

            <GeneralModal displayModal={handleOpen} handleCloseModal={handleCloseModal}>
                <ModalContent handleCloseModal={handleCloseModal} />
            </GeneralModal>

            <Table />
        </Container>
    );
};

export default MainPage;
