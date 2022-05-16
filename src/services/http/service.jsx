import axios from "axios"
import { ApiRoutes } from "../../utils/constants"
import { genApiUrl } from "./request"

export const getServices= async ({params,role, setServices})=>{
  const arrayPath = [ApiRoutes.services]
  const url = genApiUrl({arrayPath,params,role})
  const result = (await axios.get(url)).data;
  if(result.data){
    setServices(result.data)
  }
    
}
export const getAllServiceTypes= async ({params,role, setServiceTypes})=>{
  const arrayPath = [ApiRoutes.services,'types']
  const url = genApiUrl({arrayPath,params,role})
  const result = (await axios.get(url)).data;
  if(result.data){
    setServiceTypes(result.data);
  }
}

export const createService= async ({service, role})=>{
  const arrayPath = [ApiRoutes.services]
  const url = genApiUrl({arrayPath,role})
  const result = (await axios.post(url,service)).data;
  return result
}
