import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import DonatePage from './donate/DonatePage';
import ProductPage from './products/ProductPage';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/donate', element: <DonatePage /> },
  { path: '/products/:productId', element: <ProductPage /> },
];