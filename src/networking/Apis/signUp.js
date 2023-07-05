import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endPoints';

export const signUp = async (data) =>
  Promise.resolve(axios.post(endpoints.signUp, data));
