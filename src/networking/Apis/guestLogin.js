import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const guestLogin = async (data) =>
  Promise.resolve(axios.post(endpoints.guestLogin, data));
