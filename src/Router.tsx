import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import MyScrap from './pages/MyScrap';
import ContentDetail from './pages/ContentDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './components/common/ProtectedRoute';
import WithDrawSuccess from './pages/WithDrawSuccess';
import ContentList from './pages/ContentList';
import NotFound from './pages/NotFound';
import AdminLayout from './components/admin/common/AdminLayout';
import LinkUpload from './pages/admin/contentUpload/LinkUpload';
import AdminHome from './pages/admin/home/AdminHome';

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/content/:id' element={<ContentDetail />} />
        <Route path='/withdraw-success' element={<WithDrawSuccess />} />
        <Route path='/contents' element={<ContentList />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-scrap' element={<MyScrap />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>

      <Route element={<AdminLayout />}>
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/link-upload' element={<LinkUpload />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
