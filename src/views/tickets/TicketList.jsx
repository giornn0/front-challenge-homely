import React, { useContext, useEffect, useState } from "react";
import { ListCompo } from "../../components";
import { getTickets } from "../../services/http/ticket";
import { RoleContext } from "../../states/context";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { details } from "./utils/constants";
import { Roles } from "../../utils/constants";


const TicketList = ()=> {
  const [tickets, setTickets] = useState(null);
  const {role} = useContext(RoleContext);

  useEffect(()=>{
    const params = {page:1, take:100};
    getTickets({role,params, setTickets})
    if(role==Roles.Operador){
      getTicket({role,params, setTickets})
    }
  },[])

  const props = {
    mainIcon: <CleaningServicesIcon/>,
    title: 'Listado Tickets',
    collapsable: true,
    list: tickets,
    details: details,
    header:'description'
  }

  return(
    <div className="w-full flex justify-center">
      <ListCompo {...props} />
    </div>

  )
}

export default TicketList