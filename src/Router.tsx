import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Layout from './components/common/layout/Layout';
import Dashboard from './pages/Dashboard';
import MyScrap from './pages/MyScrap';
import ContentDetail from './pages/ContentDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './components/common/ProtectedRoute';
import ContentList from './pages/ContentList';
import NotFound from './pages/NotFound';
import AdminLayout from './components/admin/common/AdminLayout';
import QuizPage from './pages/quiz/QuizPage';
import QuizErrorPage from './components/quiz/QuizErrorPage';
import QuizLayout from './components/common/layout/QuizLayout';
import QuizResultPage from './pages/quiz/QuizResultPage';
import MyWordList from './pages/MyWordList';
import RandomQuizResultPage from './pages/quiz/randomQuiz/RandomQuizResultPage';
import NewsList from './pages/NewsList';
import NewsDetailLayout from './components/common/layout/NewsDetailLayout';
import NewsCompletePage from './pages/newsDetail/NewsCompletePage';
import NewsDetailContainer from './components/course/main/NewsDetailContainer';
import { lazy, Suspense } from 'react';
import Loader from './components/common/Loader';
import { QuizLoading } from './pages/quiz/QuizLoadingPage';

const PageLoader = () => (
  <div className='absolute left-0 top-0 flex h-screen w-full items-center justify-center'>
    <h1 className='text-xl'>로딩 ..~</h1>
  </div>
);

const AdminHome = lazy(() => import('./pages/admin/home/AdminHome'));
const Write = lazy(() => import('./pages/admin/write/Write'));
const AdminContentDetail = lazy(() => import('./pages/admin/contentDetail/AdminContentDetail'));
const UpdatePage = lazy(() => import('./pages/admin/update/UpdatePage'));
const QuizLoadingPage = lazy(() => import('./pages/quiz/QuizLoadingPage'));
const WithDrawSuccess = lazy(() => import('./pages/WithDrawSuccess'));
export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/news-list', element: <NewsList /> },
        { path: '/login', element: <Login />, errorElement: <QuizErrorPage /> },
        { path: '/content/:id', element: <ContentDetail /> },
        {
          path: '/withdraw-success',
          element: (
            <Suspense fallback={<Loader size={5} />}>
              <WithDrawSuccess />
            </Suspense>
          ),
        },
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
          errorElement: <NotFound />,
          children: [
            { path: '/quiz', element: <QuizPage /> },
            {
              path: '/quiz-loading',
              element: (
                <Suspense fallback={<QuizLoading />}>
                  <QuizLoadingPage />
                </Suspense>
              ),
            },
            { path: '/quiz-result', element: <QuizResultPage /> },
            {
              path: '/random-quiz-result',
              element: <RandomQuizResultPage />,
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
        {
          path: '/admin/home',
          element: (
            <Suspense fallback={<PageLoader />}>
              <AdminHome />
            </Suspense>
          ),
        },
        {
          path: '/admin/write',
          element: (
            <Suspense fallback={<PageLoader />}>
              <Write />
            </Suspense>
          ),
        },
        {
          path: '/admin/content/:id',
          element: (
            <Suspense fallback={<PageLoader />}>
              <AdminContentDetail />
            </Suspense>
          ),
        },
        {
          path: '/admin/update/:id',
          element: (
            <Suspense fallback={<PageLoader />}>
              <UpdatePage />
            </Suspense>
          ),
        },
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
