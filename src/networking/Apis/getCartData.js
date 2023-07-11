import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const getCartData = async (id) =>
  Promise.resolve(axios.get(endpoints.getCartData.replace('{user_id}', id)));
