import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Options } from "../utils/constants";

const ButtonCompo = ({label, value, toCompare, toSet})=>{
  const [active, setActive] = useState(false);

  let navigate = useNavigate();

  useEffect(()=>{
    if(toCompare === value){
      setActive(true);
    }
  },[])

  const set = ()=>{
    toSet(value)
    const options = Options[value];
    if(options?.length){
      navigate(options[0].path);
    }
  }

  return (
    <button className={`${active?'active':''} `} onClick={set} >{label}</button>
  )
}
export default ButtonCompo;