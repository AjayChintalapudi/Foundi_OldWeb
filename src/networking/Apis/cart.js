import * as endpoints from 'networking/EndPoints/endpoints';
import axios from 'networking/Axios/axios';

export const Cart = async (data) =>
  Promise.resolve(axios.post(endpoints.cart, data));
