import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const RemoveCart = async (data) =>
  Promise.resolve(axios.post(endpoints.removeCart, data));
