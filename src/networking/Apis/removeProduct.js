import * as endpoints from 'networking/EndPoints/endpoints';
import axios from 'networking/Axios/axios';

export const removeProductApi=async (data)=>
Promise.resolve(axios.post(endpoints.removeProductFromCart,data))
