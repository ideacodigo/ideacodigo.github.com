import React from 'react'

export const BodyHome = () => {
   return (
      <div id="BodyHome" className="container-fluid bg-primary mt-5 mt-md-2">
         <div className="row animate__animated animate__slideInRight">

            <div className="col-12 text-secondary-variant position-relative h-auto h-md-0">
               <div className="row">
                  <div className="col-md-5"></div>
                  <div className="col-md-6 text-center text-md-start">
                     <h3>compartamos experiencias</h3>
                     <h1 className="ms-5">¡Bienvenidos!</h1>
                  </div>
                  <div className="col"></div>
               </div>
            </div>

            <div className="col-12 text-decoration-line-through display-1 text-secondary pe-0 text-end" style={{ fontSize: "20vw"}}>
               oO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;
            </div>

            <div className="col-12 text-secondary h-auto h-md-0">
               <div className="row">
                  <div className="col-0 col-md-5"></div>

                  <div className="col-12 col-md-6 text-center fs-4 text-md-start position-relative top-0 top-md-m20vh">
                     <div className="d-inline-block">
                        <p>Desarrollador de aplicaciones web y moviles</p>
                        <div className="row mx-auto text-center">
                           <div className="col-0 col-md-1"></div>
                           <div className="col">
                              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/diego0at/"><img src="./assets/icons/linkedin.png" alt="linkedin" /></a>
                           </div>
                           <div className="col">
                              <a rel="noreferrer" target="_blank" href="https://github.com/diego0at"><img src="./assets/icons/github.png" alt="github" /></a>
                           </div>
                           <div className="col">
                              <a rel="noreferrer" target="_blank" href="#footer"><img src="./assets/icons/medium.png" alt="medium" /></a>
                           </div>
                           <div className="col">
                              <a rel="noreferrer" target="_blank" href="https://www.instagram.com/diego0at/"><img src="./assets/icons/instagram.png" alt="instagram" /></a>
                           </div>
                           <div className="col-0 col-md-1"></div>

                        </div>
                     </div>
                  </div>
                  <div className="col"></div>
               </div>
            </div>

         </div>
      </div>
   )
}
