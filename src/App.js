import {Grid} from '@mui/material';
import { Routes, Route,} from "react-router-dom";

import { ProtectedRoutes } from "./ProtectedRoutes";

import HomePage from './components/homePage/HomePage';
import Registration from './components/registration/Registration';
import CreateCardPage from './components/createCardPage/CreateCardPage';
import Authentication from './components/authentication/Authentication';

import MainAppBar from './shared/components/MainAppBar';

function App() {
  return (
    <Grid container direction="column" width="100%" justifyContent="center" alignItems="center">
      <Grid item width="100%" paddingLeft={10} paddingRight={10}>
        <MainAppBar/>
      </Grid>
      
      <Grid item width="100%">
        <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/register" element={<Registration />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/createcard" element={<CreateCardPage />} />
          </Route>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
