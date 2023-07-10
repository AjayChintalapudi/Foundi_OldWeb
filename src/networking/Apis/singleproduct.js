import * as endpoints from 'networking/EndPoints/endpoints';
import axios from 'networking/Axios/axios';

export const ProductDetails = async (id) =>
  Promise.resolve(
    axios.get(endpoints.individualProduct.replace('{product_id}', id))
  );
