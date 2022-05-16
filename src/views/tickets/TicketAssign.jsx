import React, { useContext, useEffect, useState } from "react";
import { CardCompo, ListCompo, SimpleDialog } from "../../components";
import { changeTicket, getTickets, rawAssignTicket } from "../../services/http/ticket";
import { RoleContext } from "../../states/context";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { getUsers } from "../../services/http/user";
import { useSearchParams } from "react-router-dom";
import { adminActions, details } from "./utils/constants";


const TicketList = ()=> {
  const [tickets, setTickets] = useState(null);
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const [assigningTo, setAssigningTo] = useState(null);
  const [searchParams] = useSearchParams();
  const [action, setAction] = useState(adminActions.assignTicket)
  const {role} = useContext(RoleContext);

  useEffect(()=>{
    let status_id = 1;
    if (searchParams.get('en_progreso')){
      status_id = 2;
      setAction(adminActions.checkTicket)
    }else{
      setAction(adminActions.assignTicket)

    }
    const params = {page:1, take:100, status_id};
    getTickets({role,params, setTickets})
    getUsers({role,params:{role_id:2}, setUsers});
  },[searchParams])


  const handleClick=(index)=>{
    setAssigningTo(tickets[index]);
    setOpen(true);
  }
  const assignOnClose=async (userAssigned)=>{
    if(userAssigned){
      const result = await rawAssignTicket({userAssigned,assigningTo,role})
    }
    setOpen(false)
  }

  const props = {
    mainIcon: <CleaningServicesIcon/>,
    title: 'Listado Tickets',
    list: tickets,
    details: details,
    header:'description',
    handleClick
  }
  

  return(
    <div className="w-full flex justify-center">
      <ListCompo {...props} />
      {
        action==adminActions.assignTicket?
        <SimpleDialog
          open={open}
          onClose={assignOnClose}
          list={users}
          title="Assignar ticket a"
        />:
        <SimpleDialog
          open={open}
          onClose={assignOnClose}
          title="Viendo Ticket"
          card={<CardCompo title={assigningTo?.description} details={assigningTo?.status.name}/>}
        />
      }
    </div>
  )
}

export default TicketList