import * as endpoints from 'networking/EndPoints/endpoints';
import axios from 'networking/Axios/axios';

export const FeedBack = async (data) =>
  Promise.resolve(axios.post(endpoints.feedback, data));
