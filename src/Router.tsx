import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import MyScrapPage from './pages/MyScrapPage';
import Contents from './pages/Contents';
import Profile from './pages/Profile';
import ProtectedRoute from './components/common/ProtectedRoute';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-scrap' element={<MyScrapPage />} />
        <Route path='/contents' element={<Contents />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
