import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const getChatInfo = (id) =>
  Promise.resolve(axios.get(endpoints.getChatInfo.replace('{product_id}', id)));
