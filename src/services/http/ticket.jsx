import axios from "axios"
import { ApiRoutes } from "../../utils/constants";
import { genApiUrl } from "./request"


export const getTickets= async ({params,role, setTickets})=>{
  const arrayPath = [ApiRoutes.tickets];
  const url = genApiUrl({arrayPath,params,role})
  const result = (await axios.get(url)).data;
  if (result.data){
    setTickets(result.data)
  }
}
export const getTicketStatus= async ({params,role, setTickets})=>{
  const arrayPath = [ApiRoutes.tickets,ApiRoutes.ticketsStatus];
  const url = genApiUrl({arrayPath,params,role})
  const result = (await axios.get(url)).data;
  if (result.data){
    setTickets(result.data)
  }
}

export const createTicket= async ({ticket, role})=>{
  const arrayPath = [ApiRoutes.tickets]
  const url = genApiUrl({arrayPath,role})
  const result = (await axios.post(url,ticket)).data;
  return result
}

export const rawAssignTicket= ({userAssigned,assigningTo,role})=>{
  const value = {
    in_charge_user_id: userAssigned.id,
    status_id: 2,
    changed_by_user_id: 0,
  }
  const id = assigningTo.id
  const action = 'assign'
  return changeTicket({value,id,action,role})
}

export const changeTicket= async({value,id,action,role})=>{
  const arrayPath = [ApiRoutes.tickets, id ,action]
  const url = genApiUrl({arrayPath,role})
  const result = (await  axios.put(url,value)).data;
  return result
}