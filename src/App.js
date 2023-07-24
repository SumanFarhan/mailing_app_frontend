import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Signin';
import Signup from './Components/Signup';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main/*" element={<MainRoutes />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;













// import React, { useEffect, useState } from 'react'
// import './App.css'
// import Login from './Components/Signin'
// import Signup from './Components/Signup'
// import Main from './Components/Dashobard/Main'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


// const App = () => {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Signup />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/main" element={<Main />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App




// import React, { Suspense, lazy } from 'react';
// import { Router, Routes, Route, Navigate, RouterProvider } from 'react-router-dom';
// import { routes } from "./routes/routes";
// import './App.css';
// import Login from './Components/Signin'
// import Signup from './Components/Signup'
// import SuspenseLoader from './Components/common/SuspenseLoader'
// import Main from './Components/Dashobard/Main'; 

// const ErrorComponent = lazy(() => import('./Components/common/ErrorComponent'));

// const router = (
//   <Routes>
//     <Route path="/" element={<Navigate to="/signup" />} />
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/main/*" element={<Main />} />
//     <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
//     <Route path={routes.main.path} element={<routes.main.element />}>
//       <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
//       <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
//     </Route>
//     <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
//   </Routes>
// );

// function App() {
//   return (
//     <>
//       <Router>
//         <Suspense fallback={<SuspenseLoader />}>
//         <RouterProvider router={router} />
//         </Suspense>
//       </Router>
//     </>
//   );
// }

// export default App;