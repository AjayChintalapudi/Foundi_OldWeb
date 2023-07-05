import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endPoints';

export const googleAuth = async (data) =>
  Promise.resolve(axios.post(endpoints.googleSignUp, data));
