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
import AdminHome from './pages/admin/home/AdminHome';
import QuizPage from './pages/quiz/QuizPage';
import QuizErrorPage from './components/quiz/QuizErrorPage';
import QuizLoadingPage from './pages/quiz/QuizLoadingPage';
import QuizLayout from './components/common/layout/QuizLayout';
import QuizResultPage from './pages/quiz/QuizResultPage';
import MyWordList from './pages/MyWordList';
import RandomQuizResultPage from './pages/quiz/randomQuiz/RandomQuizResultPage';
import NewsList from './pages/NewsList';
import NewsDetailLayout from './components/common/layout/NewsDetailLayout';
import NewsCompletePage from './pages/newsDetail/NewsCompletePage';
import Write from './pages/admin/write/Write';
import AdminContentDetail from './pages/admin/contentDetail/AdminContentDetail';
import NewsDetailContainer from './components/course/main/NewsDetailContainer';
import UpdatePage from './pages/admin/update/UpdatePage';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/news-list', element: <NewsList /> },
        { path: '/login', element: <Login />, errorElement: <QuizErrorPage /> },
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
        {
          element: <ProtectedRoute />,
          children: [
            { path: '/quiz', element: <QuizPage />, errorElement: <QuizErrorPage /> },
            {
              path: '/quiz-loading',
              element: <QuizLoadingPage />,
              errorElement: <QuizErrorPage />,
            },
            { path: '/quiz-result', element: <QuizResultPage />, errorElement: <QuizErrorPage /> },
            {
              path: '/random-quiz-result',
              element: <RandomQuizResultPage />,
              errorElement: <QuizErrorPage />,
            },
          ],
        },
      ],
    },
    {
      element: <NewsDetailLayout />,
      children: [
        { path: '/news/:id', element: <NewsDetailContainer /> },
        { path: '/newsComplete/:id', element: <NewsCompletePage /> },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        { path: '/admin/home', element: <AdminHome /> },
        { path: '/admin/write', element: <Write /> },
        { path: '/admin/content/:id', element: <AdminContentDetail /> },
        { path: '/admin/update/:id', element: <UpdatePage /> },
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
