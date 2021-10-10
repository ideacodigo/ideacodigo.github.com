import React from 'react'

export const NavBar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary animate__animated animate__fadeInDown" aria-label="Tenth navbar">
         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center py-lg-4" id="navBar">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <a href="/#BodySectionWork" className="nav-link active" aria-current="page">HOME</a>
                  </li>
                  <li className="nav-item">
                     <a href="/#BodySectionWork" className="nav-link">MY WORK</a>
                  </li>
                  <li className="nav-item">
                     <a href="/#BodySectionSkills" className="nav-link" aria-disabled="true">SKILLS</a>
                  </li>
                  <li className="nav-item">
                     <a href="/#BodyContact" className="nav-link" aria-disabled="true">CONTACTS</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}
