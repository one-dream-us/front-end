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
  // const Login = lazy(() => import('./pages/Login'));
  // const Home = lazy(() => import('./pages/Home'));
  // const MyScrap = lazy(() => import('./pages/MyScrap'));
  // const ContentDetail = lazy(() => import('./pages/ContentDetail'));
  // const Profile = lazy(() => import('./pages/Profile'));
  // const WithDrawSuccess = lazy(() => import('./pages/WithDrawSuccess'));
  // const ContentList = lazy(() => import('./pages/ContentList'));
  // const NotFound = lazy(() => import('./pages/NotFound'));
  // const Layout = lazy(() => import('./components/common/Layout'));
  // const ProtectedRoute = lazy(() => import('./components/common/ProtectedRoute'));
  // const AdminLayout = lazy(() => import('./components/admin/common/AdminLayout'));
  // const LinkUpload = lazy(() => import('./pages/admin/contentUpload/LinkUpload'));
  // const AdminHome = lazy(() => import('./pages/admin/home/AdminHome'));
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
