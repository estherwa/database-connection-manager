import React, { useState, FC } from 'react';
import { Container, Typography, Button as MuiButton, Autocomplete } from '@mui/material';
import { Button } from '../styles/button';
import { TextField,  FormControl, FormHelperText } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';
const URL = 'http://localhost:4000/databases'
interface ModalContentProps {
    handleCloseModal: (isSubmitted?: boolean) => void;
}

const ModalContent: FC<ModalContentProps> = ({ handleCloseModal }) => {
    const [databaseName, setDatabaseName] = useState('');
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const handleClose = (e: React.FormEvent) => {
        e.preventDefault();
         setUrl("");
         setUsername("");
         setUserPassword("");
         setType("");
         navigate("/")
        handleCloseModal();
    
    };

    const addDatabase = async (databaseDetails: DatabaseBody): Promise<void> => {
        try {
          const response = await axios.post(URL, databaseDetails);
          console.log('Database added successfully:', response.data);
    
        } catch (error) {
          console.error('Error adding database:', error);

        }
      };
   
    const handleSubmit = async(e: React.FormEvent) => {
        const databaseDetails:DatabaseBody = {
            name: databaseName,
            url: url,
            username: username,
            password: userPassword,
            type: type
          };
          await addDatabase(databaseDetails);
        handleCloseModal(true);
    };

    return (
        <Container>
            <>
                <Typography style={{ display: 'flex', justifyContent: 'center', paddingBottom: '15px', alignSelf: 'center' }} variant="h4" gutterBottom>
                    Add Database
                </Typography>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
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
                        <Button width="30px" paddingVertical={10} paddingHorizontal={15} onClick={(e) => handleClose(e)}>
                            Close
                        </Button>
                        <Button onClick={handleSubmit} background={"blue"} width="30px" paddingVertical={10} paddingHorizontal={15}>
                            Add
                        </Button>
                    </div>
                </form>
            </>

        </Container>
    );
};

export default ModalContent;
export interface DatabaseBody {
    name: string;
    url: string;
    username: string;
    password: string;
    type: string;
  }

const typeOptions = [
    { label: 'Snowflake', value: 'Snowflake' },
    { label: 'Trino', value: 'Trino' },
    { label: 'MySQL', value: 'MySQL' }
];