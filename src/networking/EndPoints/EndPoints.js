//login Endpoint
export const logIn = '/auth/login';
// signUp  EndPoint
export const signUp = '/auth/register';
// googleAuth Endpoint
export const googleSignUp = 'auth/googleSignin';
// products Endpoint
export const products = 'admin/ecom/product/get/all';

// snocode EndPoint
export const snoCode = '/products/getproductdetails';

// guestLogin EndPoint

export const guestLogin = '/auth/isguest';
// individual Endpoint
export const individualProduct = 'admin/ecom/product/get/{product_id}';
// feedback Endpoint
export const feedback = 'feedback/post';
// cart Endpoint
export const cart = 'cart/add';
// stripe ednpoint

export const checkOut = 'stripe/order-checkout';

// getting cart data

export const getCartData = 'cart/get/{user_id}';
// remove product from cart
export const removeProductFromCart = 'cart/remove';
// getting ordered history data

export const getOrderHistory = 'orders/get/{user_id}';

// get categories data api

export const getEcomProductCategoryData = 'admin/ecom/category/get/all';
