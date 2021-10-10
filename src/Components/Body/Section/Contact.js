import React from 'react'

export const BodyContact = () => {
   return (
      <div id="BodyContact" className="container text-secondary text-center">
         <div className="row">
            <div className="col"></div>
            <div className="col-12 col-lg-6">
               <h4 className="border-bottom pb-2">Contact</h4>
               <form className="px-1 px-lg-5 pt-4 ">
                  <div className="text-start mb-3">
                     <label htmlFor="BodyContactEmail" className="form-label">Email address</label>
                     <input className="form-control mb-3" id="BodyContactEmail" type="email" placeholder="diego0at@gamil.com" name="Email" />

                     <label htmlFor="BodyContactEmail" className="form-label">Name user</label>

                     <input className="form-control mb-3" type="text" placeholder="diego0at" name="BodyContactName" />

                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Update page</label>
                     </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Update CodeLabs</label>
                     </div>
                     <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Update all</label>
                     </div>

                     {/* <a href="/#" className="link-secondary-variant text-center d-block">Send mail manually</a> */}

                  </div>
                  <button className="btn btn-secondary mb-4">Remember me</button>
               </form>
            </div>
            <div className="col"></div>
         </div>

      </div>
   )
}
