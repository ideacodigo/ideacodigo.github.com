import React from 'react'

export const BodyContact = () => {
   return (
      <div id="BodyContact" className="container text-secondary text-center">
         <div className="row">
            <div className="col"></div>
            <div className="col-12 col-lg-6">

               <h4 className="border-bottom pb-2">Contacto</h4>
               <p className='text-secondary-variant text-start'>
                  Si te gustar las aportes, quieres contribuir o eres de parte de una empresa y quieres ver como podemos colaborar escríbeme acá abajo para que nos pongamos en contacto.
               </p>
               <form className="px-1 px-lg-5 pt-4 pb-5 ">
                  <div className="text-start mb-3">

                     <label htmlFor="BodyContactEmail" className="form-label">Nombre</label>
                     <input className="form-control mb-3" type="text" placeholder="" name="BodyContactName" />

                     <label htmlFor="BodyContactEmail" className="form-label">Correo electronico</label>
                     <input className="form-control mb-3" id="BodyContactEmail" type="email" placeholder="" name="Email" />

                     <label className="form-label" htmlFor="contacto-mensaje">Mensaje</label>
                     <textarea className='form-control'>

                     </textarea>

                  </div>
                  <button className="btn btn-secondary mb-4 w-100">ENVIAR</button>
               </form>

               <h4 className="border-bottom pb-2">Suscríbete</h4>
               <p className='text-secondary-variant text-start'>
                  Suscríbete a la lista para notificar temas de interes. No enviaremos maas de un correo semanal</p>
               <form className="px-1 px-lg-5 pt-4 pb-5">
                  <div className="text-start mb-3">

                     <label htmlFor="BodyContactEmail" className="form-label">Correo electronico</label>
                     <input className="form-control mb-3" id="BodyContactEmail" type="email" placeholder="" name="Email" />

                     <label htmlFor="BodyContactEmail" className="form-label">Notificarme</label><br />
                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Cambios en la página</label>
                     </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">CodeLabs</label>
                     </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Cualquier novedad</label>
                     </div>

                     {/* <a href="/#" className="link-secondary-variant text-center d-block">Send mail manually</a> */}

                  </div>
                  <button className="btn btn-secondary mb-4 w-100">SUSCRIBIRME</button>
               </form>
            </div>
            <div className="col"></div>
         </div>

      </div>
   )
}
