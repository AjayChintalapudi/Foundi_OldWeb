import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const googleAuth = async (data) =>
  Promise.resolve(axios.post(endpoints.googleSignUp, data));
