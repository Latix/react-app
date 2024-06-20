import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AppContextProvider } from './AppContextProvider';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import BaseLayout from "./routes/BaseLayout";
import CounterLayout from "./routes/CounterLayout";
import HooksLayout from "./routes/HooksLayout";
import NotFound from "./routes/NotFound";
import ProductsPage from "./routes/Products";
import SingleProduct from "./routes/SingleProduct";

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
    <AppContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
