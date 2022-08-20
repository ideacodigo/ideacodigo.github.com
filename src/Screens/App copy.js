import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import { Body } from './Body/Body';
import { NavBar } from '../Components/NavBar/NavBar';
import { Footer } from '../Components/Footer/Footer';

export const ScreensApp = () => {

   const [modals, setModals] = useState({ modal: null })

   const { modal } = modals;

   useEffect(() => {

      const prepareModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
         keyboard: false
      })

      setModals(
         {
            modal: prepareModal
         }
      )

      setTimeout(() => {
         prepareModal.show();
      }, 2000)

   }, [])

   const handleShow = () => {
      modal.show();
   }

   return (
      <>

         {/* <!-- Modal --> */}
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Estamos trabajando en ello</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-primary">
                     Nos alegra que estes interesado, estamos trabajando en algunas actualizaciones,

                     <span className="text-primary-variant pt-2 ">
                        no olvides suscribirte para notificarte de las nuevas actualizaciones 

                     </span>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                     <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={() => window.location = "/#BodyContact"}>Notificarme</button>
                  </div>
               </div>
            </div>
         </div>

         <NavBar />

         <Body handleShow={handleShow} />

         <Footer />


      </>
   )
}
