import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';
import About from 'pages/About/About';
import Products from 'pages/Products/Products';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import ProductsReview from 'pages/ProductsReview/ProductsReview';
import CheckOut from 'pages/CheckOut/CheckOut';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/productreview" element={<ProductsReview />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
