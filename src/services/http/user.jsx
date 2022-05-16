import axios from 'axios'
import { ApiRoutes } from '../../utils/constants';
import { genApiUrl } from './request';

export const getUsers = async ({params,role, setUsers})=>{
  const arrayPath = [ApiRoutes.users]
  const url = genApiUrl({arrayPath,params,role});
  const result = (await axios.get(url)).data;
  setUsers(result.data)
}