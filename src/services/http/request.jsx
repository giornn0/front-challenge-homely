import axios from 'axios';
import { URLS } from '../../environment/urls';
import { AUTH_TOKENS } from '../../utils/constants';

axios.defaults.headers.post['Content-Type'] = 'application/json';



export const getQueryParams = (paramsObject)=>{
  return '?'+Object.entries(paramsObject)?.map(([key,value])=>(`${key}=${value}`)).join('&');
}
export const genApiUrl = ({arrayPath, params,role})=>{
  axios.defaults.headers.common['Authorization'] = AUTH_TOKENS[role];
  return `${[URLS.apiUrl,'api',...arrayPath]?.join('/')}${params?getQueryParams(params):''}`;
}

