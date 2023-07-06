import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const EcomProducts = async () =>
  Promise.resolve(axios.get(endpoints.products));
