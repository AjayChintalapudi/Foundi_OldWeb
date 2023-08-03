import axios from 'networking/Axios/axios';
import * as endpoints from 'networking/EndPoints/endpoints';

export const getMessages = (data) =>
  Promise.resolve(
    axios.get(
      endpoints.getMessages
        .replace('{chat_id}', data.product_id)
        .replace('{user_id}', data.user_id)
    )
  );
