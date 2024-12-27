import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/common/Loader';
import Layout from './components/common/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminLayout from './components/admin/common/AdminLayout';

const AppRoutes = (): JSX.Element => {
  const Login = lazy(() => import('./pages/Login'));
  const Home = lazy(() => import('./pages/Home'));
  const MyScrap = lazy(() => import('./pages/MyScrap'));
  const ContentDetail = lazy(() => import('./pages/ContentDetail'));
  const Profile = lazy(() => import('./pages/Profile'));
  const WithDrawSuccess = lazy(() => import('./pages/WithDrawSuccess'));
  const ContentList = lazy(() => import('./pages/ContentList'));
  const NotFound = lazy(() => import('./pages/NotFound'));
  const LinkUpload = lazy(() => import('./pages/admin/contentUpload/LinkUpload'));
  const AdminHome = lazy(() => import('./pages/admin/home/AdminHome'));
  return (
    <Suspense
      fallback={
        <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center'>
          <Loader size={5} />
        </div>
      }
    >
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
    </Suspense>
  );
};

export default AppRoutes;
