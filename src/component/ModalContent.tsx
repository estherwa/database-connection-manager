import React, { useState, FC } from 'react';
import { Container, Typography, Button as MuiButton, Autocomplete } from '@mui/material';
import GeneralModal from '../component/GeneralModal/GeneralModal';
import Table from '../component/Table/Table';
import { Button } from '../styles/button';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

const typeOptions = [
    { label: 'Snowflake', value: 'Snowflake' },
    { label: 'Trino', value: 'Trino' },
    { label: 'MySQL', value: 'MySQL' }
];

interface ModalContentProps {
    handleCloseModal: () => void;
}

const ModalContent: FC<ModalContentProps> = ({ handleCloseModal }) => {
    const [databaseName, setDatabaseName] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [type, setType] = useState('');



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ databaseName, url, username, userPassword, type });
        handleCloseModal();
    };

    return (
        <Container>
            <>
                <Typography style={{ display: 'flex', justifyContent: 'center', paddingBottom: '15px', alignSelf: 'center' }} variant="h4" gutterBottom>
                    Add Database
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                    <TextField
                        label="Database Name"
                        value={databaseName}
                        onChange={(e) => setDatabaseName(e.target.value)}
                        required
                    />
                    <TextField
                        label="URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="User Password"
                        type="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                    <FormControl required>
                        <Autocomplete
                            style={{ width: "220px", right: "230%" }}
                            value={type}

                            onChange={(event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
                                if (newValue) {
                                    setType(newValue);
                                }
                            }}
                            options={typeOptions.map((option) => option.label)}
                            renderInput={(params) => <TextField {...params} label="Type" />}
                        />

                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Button width="30px" paddingVertical={10} paddingHorizontal={15} onClick={() => handleCloseModal()}>
                            Close
                        </Button>
                        <Button background={"blue"} width="30px" paddingVertical={10} paddingHorizontal={15}>
                            Add
                        </Button>
                    </div>
                </form>
            </>

        </Container>
    );
};

export default ModalContent;
