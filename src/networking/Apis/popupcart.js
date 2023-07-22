import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const PopUpCart = async (id) =>
  Promise.resolve(axios.get(endpoints.popupCart.replace('{user_id}', id)));
