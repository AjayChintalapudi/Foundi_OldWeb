import * as endpoints from 'networking/EndPoints/endpoints';
import axios from 'networking/Axios/axios';

export const Userlogin = async (data) =>
  Promise.resolve(axios.post(endpoints.logIn, data));
