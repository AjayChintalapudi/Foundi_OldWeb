import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/Axios/axios';

export const getMessages = (id) =>
  Promise.resolve(axios.get(endpoints.getMessages, id));
