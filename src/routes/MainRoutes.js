// mainroute.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Emails from '../Components/Emails';
import ViewEmail from '../Components/ViewEmail';
import Main from '../Components/Dashobard/Main';

const MainRoutes = () => (
  <Routes>
    {/* Use "/" as the base path */}
    <Route path="/" element={<Main />}>
      {/* Redirect to the default email type */}
      <Route index element={<Navigate to="emails/inbox" />} />

      {/* Single route for each email type */}
      <Route path="emails/:type" element={<Emails />} />
      <Route path="view/:emailId" element={<ViewEmail />} />
    </Route>
  </Routes>
);

export default MainRoutes;
