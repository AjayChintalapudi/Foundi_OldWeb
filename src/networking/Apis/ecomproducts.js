import * as endpoints from 'networking/EndPoints/endpoints';
import axios from 'networking/Axios/axios';

export const EcomProducts = async () =>
  Promise.resolve(axios.get(endpoints.products));
