import {Grid} from '@mui/material';
import { Routes, Route,} from "react-router-dom";

import { ProtectedRoutes } from "./ProtectedRoutes";



import HomePage from './components/homePage/HomePage';
import Authentication from './components/authentication/Authentication';

function App() {
  return (
    <Grid container direction="column" width="100%" height="100vh" justifyContent="center" alignItems="center">
      
      <Grid item>
        <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<HomePage />} />
          </Route>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/auth" element={<Authentication />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
