import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Table from './component/Table/Table';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';



interface IProps {}

type status = 'WORKING' | 'NOT WORKING' | 'LOADING'

const statusInfo = {
  'WORKING': {
    statusMessage: 'Fake server is working',
    statusColor: 'green',
  },
  'NOT WORKING': {
    statusMessage: 'Fake server is not working',
    statusColor: 'red',
  },
  'LOADING': {
    statusMessage: 'Loading...',
    statusColor: 'yellow',
  },
};

const App: FunctionComponent<IProps> = () => {
  const [serverStatus, setServerStatus] = useState<status>('LOADING');

  const { statusMessage, statusColor } = useMemo(() => statusInfo[serverStatus], [serverStatus]);

  useEffect(() => {
    const fakeServerUrl = 'http://localhost:4000/databases';

    axios.get(fakeServerUrl)
      .then((response) => {
        setServerStatus('WORKING');
        console.log(response.data);
      })
      .catch(() => {
        setServerStatus('NOT WORKING');
      });
  }, []);

  return (
    <div>
      <h5 style={{ color: statusColor }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" >
              <Route index element={<MainPage/>}/>
              <Route path="/details/:id" element={<DetailsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </h5>
    </div>
  );
}

export default App;
