import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const upLoads = async (data) =>
  Promise.resolve(axios.post(endpoints.upLoads, data));
