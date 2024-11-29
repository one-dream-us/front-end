import { Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Layout from './components/common/Layout';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<DashBoard />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
