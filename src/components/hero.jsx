import React, { useState } from 'react';
import hoverimg from '../utils/hoverimages';
import useMousePosition from "../hooks/useMousePosition";




export default function Hero() {

const {x , y}=useMousePosition();
const [isactive,setactive]=useState(-1);





return (
    <div  className="hero"  >

        <div className="hero__intro"  >
        
            <p data-aos="fade-up" data-aos-duration="500"> <span onMouseEnter={()=>{ setactive(0)}}  onMouseLeave={()=>{ setactive(-1)}}> <span>Ishika is</span>  <img   style={isactive===0? {transform:`translate(${x/10}% , ${y/10}%)`} :  {transform:"translate(0 , 0)"}} className={isactive===0 ? "first active" : "first"} src={hoverimg[0]} alt="hoverimg" /> </span>   a <span onMouseEnter={()=>{ setactive(1)}}  onMouseLeave={()=>{ setactive(-1)}}> <span>UX and Visual Designer</span> <img   style={isactive===1? {transform:`translate(${x/10}% , ${y/10}%)`} :  {transform:"translate(0 , 0)"}} className={isactive===1 ? "second  active" : "second"} src={hoverimg[1]} alt="hoverimg" /> </span>  who </p> 
      
            <p data-aos="fade-up" data-aos-duration="800">creates experiences that are </p>
          
            <p data-aos="fade-up" data-aos-duration="1000"><span  onMouseEnter={()=>{ setactive(2)}}  onMouseLeave={()=>{ setactive(-1)}}> <span>creative</span> <img   style={isactive===2? {transform:`translate(${x/10}% , ${y/10}%)`} :  {transform:"translate(0 , 0)"}} className={isactive===2 ? "third active" : "third"} src={hoverimg[2]} alt="hoverimg" /> </span>  but <span  onMouseEnter={()=>{ setactive(3)}}  onMouseLeave={()=>{ setactive(-1)}}> <span>human-centric</span> <img   style={isactive===3? {transform:`translate(${x/10}% , ${y/10}%)`} :  {transform:"translate(0 , 0)"}} className={isactive===3 ? "fourth active" : "fourth"} src={hoverimg[3]} alt="hoverimg" /> </span> </p>

        </div>

        

       
        <div  className="hero__footer" data-aos="fade" data-aos-duration="1500" data-aos-offset="0">
            <div></div>

            <div  className="hero__footer_scrolltext" >
                <p>scroll</p>
            </div>

            <div className="hero__footer_img" >
            <img  src="https://ik.imagekit.io/thecatspace/catspace_media/hero-illustration.png" alt="greet" />
            </div>
            

        </div>
    

    </div>
  )
}
