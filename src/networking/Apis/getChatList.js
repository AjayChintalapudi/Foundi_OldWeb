import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const getChatList = (id) =>
  Promise.resolve(axios.get(endpoints.getChatList.replace('{user_id}'), id));