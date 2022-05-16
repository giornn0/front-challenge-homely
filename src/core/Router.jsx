import React from "react"
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom"
import ServiceRouter from "../views/services/ServiceRouter";
import TicketRouter from "../views/tickets/TicketRouter";
import { ServiceCreate, ServiceList } from "../views/services";
import { TicketAssign, TicketCreate, TicketList } from "../views/tickets";


const ProjectRoutes = ()=>{
  return (
    <Routes>
      <Route path='/tickets' element={<TicketRouter/>} >
        <Route path='create' element={<TicketCreate/>}/>
        <Route path='list' element={<TicketList/>}/>
        <Route path='assign' element={<TicketAssign/>}/>
      </Route>
      <Route path='/services' element={<ServiceRouter/>} >
        <Route path='create' element={<ServiceCreate/>}/>
        <Route path='list' element={<ServiceList/>}/>
      </Route>
    </Routes>
  )
}
export default ProjectRoutes