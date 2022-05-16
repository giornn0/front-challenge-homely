import React from "react"
import { useContext } from "react";
import { ButtonCompo } from "../components";
import { RoleContext } from "../states/context";
import { Roles } from "../utils/constants";

const Sidenav = ()=>{
  const {role, setRole} = useContext(RoleContext)

  const option = Object.entries(Roles);

  return (<>
    <aside className="w-1/5 text-center bg-green-500">
        <div className="px-4 py-2 mb-2 bg-red-300">Tipo Usuario</div>
        <ul>
        {option.map(([label, value])=>(
          <li key={label} >
            <ButtonCompo  label={label} value={value} toCompare={role} toSet={setRole} />
          </li>
        ))}

        </ul>
    </aside> 
  </>)
}

export default Sidenav
