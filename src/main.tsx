import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { store } from './store';
import Home from './views/Home';
import Items from './views/Items';

const withAppLayout = (component: ReactNode) => <App>{component}</App>;

const router = createBrowserRouter([
  {
    path: '/',
    element: withAppLayout(<Home />)
  },
  {
    path: '/home',
    element: withAppLayout(<Home />)
  },
  {
    path: 'items',
    element: withAppLayout(<Items />)
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
