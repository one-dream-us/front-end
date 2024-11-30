import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/common/Layout';
import Home from './pages/Home';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
