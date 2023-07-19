import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';
import About from 'pages/About/About';
import Products from 'pages/Products/Products';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import ForGotPassWord from 'pages/ForGotPassWord/ForGotPassWord';
import PrivacyPolicy from 'pages/PrivacyPolicy/PrivacyPolicy';
import CheckOut from 'pages/CheckOut/CheckOut';
import ProductsReview from 'pages/ProductsReview/ProductsReview';
import Sutainability from 'pages/Sustainability/Sutainability';
import SnoProductDetails from 'pages/SnoProductDetails/SnoProductDetails';
import Chat from 'pages/Chat/Chat';
import PrivateRoutes from './PrivateRoutes';
import OrderHistory from 'pages/OrderHistory/OrderHistory';

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
        <Route element={<PrivateRoutes />}>
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Route>
        <Route path="/forgotpassword" element={<ForGotPassWord />}></Route>
        <Route path="/sustainability" element={<Sutainability />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/lostproduct" element={<SnoProductDetails />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
