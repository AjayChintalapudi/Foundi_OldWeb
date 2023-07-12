import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const checkOut = async (data) =>
  Promise.resolve(axios.post(endpoints.checkOut, data));
