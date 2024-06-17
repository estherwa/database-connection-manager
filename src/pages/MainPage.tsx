

import React, { useState, useEffect, FC } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import { Button } from '../styles/button';
import GeneralModal from '../component/GeneralModal/GeneralModal';
import { Route } from 'react-router-dom';
import Table from '../component/Table/Table';


const MainPage: FC = () => {

  const [handleOpen, setHandleOpen]= useState(false);

  const handleCloseModal = () => {
    setHandleOpen(false)
  }


  return (
    <Container>
      <Typography style={{ display: 'flex', justifyContent: 'center', paddingBottom: "15px", alignSelf: 'center'}} variant="h4" gutterBottom>
        Database Information 
      </Typography>

      <div style={{ position: 'relative', height: '10vh', width: '100%' , left:1 }}>
      <Button    width={"30px"} background={"green"}  color={"white"} paddingHorizontal={40}    onClick={()=> setHandleOpen(true)}>Add Database</Button>
       </div>
      <GeneralModal displayModal={handleOpen} handleCloseModal={handleCloseModal}>

         <Button  width={"30px"}  paddingVertical={50} paddingHorizontal={40}  onClick={()=> setHandleOpen(false)}>Close</Button>
      </GeneralModal>

      <Table/>

    </Container>
  );
};

export default MainPage;
