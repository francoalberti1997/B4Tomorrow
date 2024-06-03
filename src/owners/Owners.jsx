import React from 'react'
import Staff from './Staff'
import seba from "../owners/Seba.png"
import Delfina from "../owners/Delfina.png"
import Rodolfo from "../owners/Rodolfo.png"
import Daniela from "../owners/Daniela.png"


const Owners = () => {
  return (
    <div id='owners'>
        <div className="home-logo">
            <div className="home-logo-title">
                <p id='b4' className='team'>Our Team</p>
            </div>  
        </div>        
        
        <Staff imagen={Delfina} nombre={"Delfina"}/>
        <Staff imagen={seba}/>
    </div>
  )
}

export default Owners
