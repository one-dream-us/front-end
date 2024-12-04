import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import MyScrapPage from './pages/MyScrapPage';
import ContentDetail from './pages/ContentDetail';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-scrap' element={<MyScrapPage />} />
        <Route path='/content/:id' element={<ContentDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
