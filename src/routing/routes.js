import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CategoryDetailsPage from '../pages/CategoryDetailsPage';

const router = (categories) => createBrowserRouter([
  { path: '/', element: <HomePage categories={categories} />,},
  { path: 'category/:categoryId', element: <CategoryDetailsPage categories={categories} />,},
]);

export default router;
