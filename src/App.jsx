import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Shop from './pages/Shop';
import Product from './pages/Product';
import { Provider } from 'react-redux';
import store from './store';
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import Order from './pages/Order';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="shop/products/1" />} />
            <Route path="shop/products/:page" element={<Shop />} />
            <Route path="shop/product/:id" element={<Product />} />
            <Route path="shop/cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
