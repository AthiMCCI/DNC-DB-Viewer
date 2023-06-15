import { Route, Routes } from "react-router-dom";

import Dashboard from './../dashboard/Dashboard';


function AppRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    );
  }
  export default AppRoutes;