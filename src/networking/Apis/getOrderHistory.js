import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const getOrderHistory = async (id) =>
  Promise.resolve(
    axios.get(endpoints.getOrderHistory.replace('{user_id}', id))
  );
