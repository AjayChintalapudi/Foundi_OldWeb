import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const snoCode = async (data) =>
  Promise.resolve(axios.post(endpoints.snoCode, data));
