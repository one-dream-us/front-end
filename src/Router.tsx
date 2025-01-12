import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/common/layout/Layout';
import Dashboard from './pages/Dashboard';
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
import QuizPage from './pages/quiz/QuizPage';
import QuizErrorPage from './components/quiz/QuizErrorPage';
import QuizLoadingPage from './pages/quiz/QuizLoadingPage';
import QuizLayout from './components/common/layout/QuizLayout';
import QuizResultPage from './pages/quiz/QuizResultPage';
import MyWordList from './pages/MyWordList';
import ContentDetailLayout from './components/common/layout/ContentDetailLayout';
import CourseStart from './pages/contentDetail-phase2/CourseStart';
import Course from './pages/contentDetail-phase2/Course';
import CourseComplete from './pages/contentDetail-phase2/CourseComplete';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/login', element: <Login /> },
        { path: '/content/:id', element: <ContentDetail /> },
        { path: '/withdraw-success', element: <WithDrawSuccess /> },
        { path: '/contents', element: <ContentList /> },
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/profile', element: <Profile /> },
            { path: '/my-scrap', element: <MyScrap /> },
            { path: '/my-word-list', element: <MyWordList /> },
          ],
        },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      element: <QuizLayout />,
      children: [
        { path: '/quiz', element: <QuizPage />, errorElement: <QuizErrorPage /> },
        { path: '/quiz-loading', element: <QuizLoadingPage />, errorElement: <QuizErrorPage /> },
        { path: '/quiz-result', element: <QuizResultPage />, errorElement: <QuizErrorPage /> },
      ],
    },
    {
      element: <ContentDetailLayout />,
      children: [
        { path: '/course-start', element: <CourseStart /> },
        { path: '/course', element: <Course /> },
        { path: '/course-complete', element: <CourseComplete /> },
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
