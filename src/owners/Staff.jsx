import React from 'react'

const Staff = ({imagen, nombre}) => {
  return (
    <div class="person-container">

        <div class="person">
            <img src={imagen} alt=""/>
            <div class="info">
            <div className="home-logo-soon person">
                <p>
                    {nombre}
                </p>
            </div>
                <p>Profession</p>

                <div class="social-media">
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="person">
        <img src={imagen} alt=""/>
            <div class="info">
                <h3>Person Two</h3>
                <p>Profession</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor similique quia pariatur ex laudantium voluptas non aut </p>
                <div class="social-media">
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Staff
