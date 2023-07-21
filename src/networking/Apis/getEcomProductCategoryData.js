import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const getEcomProductCategoryData = (data) =>
  Promise.resolve(axios.get(endpoints.getEcomProductCategoryData, data));
