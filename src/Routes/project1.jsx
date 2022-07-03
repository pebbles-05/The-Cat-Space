import React, { useState } from 'react';
import Project1Web from "../Routesubcomponets/Project1Components/project1Web";
import Project1App from "../Routesubcomponets/Project1Components/project1App";
import Nextprojectbtn from '../Routesubcomponets/nextprojectbtn';
import Creditfooter from "../Routesubcomponets/creditfooter";
import Scrolltotopbtn from '../Routesubcomponets/scrolltotopbtn';





export default function Project1() {
  const [isactive, setisactive] = useState(0)

  

  return (
    <div className='project1' >
     
       <div className="project1_nav">
        <button onClick={()=>{setisactive(0)}} className={isactive===0 ? "active" : null}>zifcare web  </button>
        <button onClick={()=>{setisactive(1)}} className={isactive===1 ? "active" : null}>zifcare app</button>
       </div>

    {/*  using conditional rendering to select components  */}
    {isactive===0 ? <Project1Web/> : <Project1App/>}


    <Scrolltotopbtn />

    <Nextprojectbtn nextpath="/project_Personal_Portfolio_Design" prevpath=''  nextbtn={true} prevbtn={false}/>
    <Creditfooter/>
   
    </div>
  )
}
