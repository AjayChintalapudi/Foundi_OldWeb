import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const sendMessage = (data) =>
  Promise.resolve(axios.post(endpoints.sendMessage, data));
