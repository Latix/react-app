import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductsPage from "./routes/Products";
import BaseLayout from "./routes/BaseLayout";
import SingleProduct from "./routes/SingleProduct";
import NotFound from "./routes/NotFound";
import HooksLayout from "./routes/HooksLayout";
import store from './redux/store';
import { Provider } from 'react-redux';
import CounterLayout from "./routes/CounterLayout";

const router = createBrowserRouter([
  { path: '/', element: <BaseLayout />, 
    children: [
      { path: '/', element: <App /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <SingleProduct /> },
      { path: '/hooks', element: <HooksLayout /> },
      { path: '/counter', element: <CounterLayout /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
