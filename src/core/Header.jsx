import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { RoleContext } from "../states/context"
import { Options } from "../utils/constants"

import "./Core.css"

const Header = ()=>{
  const {role} = useContext(RoleContext);

  const [options, setOptions] = useState([]);

  useEffect(()=>{
    setOptions(Options[role])
  },[role])

  return (<>
      <header>
          <ul className="h-full w-full mx-auto px-4 flex flex-row border-x-4">
            {options?.map((option,index)=>(
              <li className="mx-4 flex content-center" key={'header-option-'+index} >
                  <Link className="pt-5" to={option.path} >
                    {option.label}
                  </Link>
              </li>
            ))}
          </ul>
      </header>
  </>)
}

export default Header
