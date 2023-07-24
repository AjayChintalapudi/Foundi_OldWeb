import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const updateMessageReadStatus = (data) =>
  Promise.resolve(axios.put(endpoints.updateMessageReadStatus, data));
