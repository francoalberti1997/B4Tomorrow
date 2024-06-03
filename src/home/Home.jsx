import React from 'react'
import Dna from "../home/Dna.jsx"

import logo from "../home/logo.jpg"

import Owners from '../owners/Owners.jsx'
const Home = () => {
  return (
      
    //     
<>
    <div className="home">
        <div id="dna">
            <Dna/>
        </div>
        <div className="contacto">
            <i class="fa-solid fa-headset"></i>
        </div>
        <div className="home-logo">
            <div className="home-logo-title">
                <p id='b4'>B4</p><p id='Tomorrow'>Tomorrow</p>
            </div>  

            <div className="home-logo-footer">
                <div className="home-logo-soon">
                    <p>
                        Coming Soon
                    </p>
                </div>
                
                <div className="home-logo-medias">
                    <div><i class="fa-brands fa-instagram"></i></div>
                    <div><i class="fa-brands fa-linkedin-in"></i></div>
                    <div><i class="fa-brands fa-instagram"></i></div>
                    <div><i class="fa-brands fa-linkedin-in"></i></div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Home
