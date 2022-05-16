import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ListCompo } from '../../components';
import { getServices } from "../../services/http/service";
import { RoleContext } from "../../states/context";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { details } from "./utils/details";


const ServiceList= ()=>{
  const [services, setServices] = useState(null);
  const {role} = useContext(RoleContext);

  useEffect(()=>{
    getServices({setServices,role})
  },[])

  const props = {
    mainIcon: <CleaningServicesIcon/>,
    title: 'Listado Servicios',
    collapsable: true,
    list: services,
    details: details
  }

  return(
    <div className="w-full flex justify-center">
      <ListCompo {...props} />
    </div>

  )
}

export default ServiceList;