import { createBrowserRouter } from 'react-router-dom';
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
import QuizPage from './pages/QuizPage';
import QuizErrorPage from './components/quiz/QuizErrorPage';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/content/:id', element: <ContentDetail /> },
        { path: '/withdraw-success', element: <WithDrawSuccess /> },
        { path: '/contents', element: <ContentList /> },
        { path: '/quiz', element: <QuizPage />, errorElement: <QuizErrorPage /> },
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/profile', element: <Profile /> },
            { path: '/my-scrap', element: <MyScrap /> },
          ],
        },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        { path: '/admin/home', element: <AdminHome /> },
        { path: '/admin/link-upload', element: <LinkUpload /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);
