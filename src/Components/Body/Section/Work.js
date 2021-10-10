import React from 'react';

export const BodySectionWork = ({ url = "diego0at.github.io", urlSource = "", title = "diego0at.github.io", description = "Proyectos en los cuales e trabajdo para aprender nuevas habilidades y crear novedosas y grandiosas aplicaciones, observa el historial, contirbuye y aprendamos", img = "assets/icons/coding.png", handleShow }) => {
   
   return (
      <div className="container mt-5 mb-3" id="BodySectionWork">
         <div className="row">
            <div className="col-12 col-lg-8">
               <div className="border-bottom">
                  <h4><a href="/#" className="text-secondary">{title}</a></h4>
               </div>
               <div className="">
                  <p className="fs-6">{description}</p>
                  <button className="btn btn-secondary-variant me-3" onClick={handleShow}>Projects</button>
                  <button className="btn btn-outline-secondary" onClick={handleShow}>Contribute</button>
               </div>
            </div>
            <div className="col-12 col-lg-4 text-center mt-4 mt-lg-0">
               <img src={img} alt="programing" width="150rem" />
            </div>
         </div>
      </div>
      // <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

   )
}
