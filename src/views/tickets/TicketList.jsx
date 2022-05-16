import React, { useContext, useEffect, useState } from "react";
import { ListCompo } from "../../components";
import { getTickets } from "../../services/http/ticket";
import { RoleContext } from "../../states/context";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { details } from "./utils/constants";
import { Roles } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";


const TicketList = ()=> {
  const [tickets, setTickets] = useState(null);
  const {role} = useContext(RoleContext);
  const [refresh] = useSearchParams();


  useEffect(()=>{
      setTickets(null)
      const params = {page:1, take:100};
      getTickets({role,params, setTickets})
    
  },[refresh])

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