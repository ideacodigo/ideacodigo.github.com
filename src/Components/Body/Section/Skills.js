import React from 'react'

export const BodySectionSkills = ({ handleShow }) => {
   return (

      <div id="BodySectionSkills" className="container mt-lg-4 pt-4">
         <div className="row justify-content-center">
            <div className="col-11 col-lg-6 border border-1 rounded-3 text-center">
               <div className="p-3">
                  <p className="fs-6">programming languages, databases and programs that I have used to create information systems.</p>
                  <h4 className="text-secondary">
                     There are some of my Skills
                  </h4>
               </div>
            </div>
            <div className="col-12 mt-5 text-center">
               <div>
                  <h5 className="border-bottom text-secondary pb-2">Application web</h5>
                  <div className="row align-items-end py-5">

                     <div className="col">
                        <div className="bg-primary border rounded-3 mb-3">
                           <div className="p-3">
                              <img src="assets/icons/html.jpg" alt="php" />
                              <h5 className="text-secondary text-start border-top pt-2 mt-3">HTML</h5>
                              <p className="m-0 text-start ">description my work with php is really good</p>
                           </div>
                           <div className="bg-secondary text-center py-1">
                              <a href="/#BodyContact" className="link-primary" onClick={handleShow}>Jobs</a>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="bg-primary border rounded-3 mb-3">
                           <div className="p-3">
                              <img src="assets/icons/laravel.jpg" alt="php" />
                              <h5 className="text-secondary text-start border-top pt-2 mt-3">Laravel</h5>
                              <p className="m-0 text-start">description my work with php is really good</p>
                           </div>
                           <div className="bg-secondary text-center py-1">
                              <a href="/#" className="">Jobs</a>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="bg-primary border rounded-3 mb-3">
                           <div className="p-3">
                              <img src="assets/icons/php.jpg" alt="php" />
                              <h5 className="text-secondary text-start border-top pt-2 mt-3">php</h5>
                              <p className="m-0 text-start">description my work with php is really good</p>
                           </div>
                           <div className="bg-secondary text-center py-1">
                              <a href="/#BodyContact" className="link-primary" onClick={handleShow}>Jobs</a>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="bg-primary border rounded-3 mb-3">
                           <div className="p-3">
                              <img src="assets/icons/js.jpg" alt="php" />
                              <h5 className="text-secondary text-start border-top pt-2 mt-3">Js</h5>
                              <p className="m-0 text-start">description my work with php is really good</p>
                           </div>
                           <div className="bg-secondary py-1">
                              <a href="/#" className="">Jobs</a>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="bg-primary border rounded-3 mb-3">
                           <div className="p-3">
                              <img src="assets/icons/react.jpg" alt="php" />
                              <h5 className="text-secondary text-start border-top pt-2 mt-3">React</h5>
                              <p className="m-0 text-start">description my work with php is really good</p>
                           </div>
                           <div className="bg-secondary py-1">
                              <a href="/#BodyContact" className="link-primary" onClick={handleShow}>Jobs</a>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div className="bg-primary border rounded-3 mb-3">
                           <div className="p-3">
                              <img src="assets/icons/css.jpg" alt="php" />
                              <h5 className="text-secondary text-start border-top pt-2 mt-3">CSS</h5>
                              <p className="m-0 text-start">description my work with php is really good</p>
                           </div>
                           <div className="bg-secondary py-1">
                              <a href="/#BodyContact" className="link-primary" onClick={handleShow}>Jobs</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
