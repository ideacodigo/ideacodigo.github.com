import React from 'react';

export const BlogBodyCard = ({ title, icon: Icon, route = '', description, porcentaje }) => {
   // console.log(route.length);
   return (
      <div className="col-3 mb-4">
         <div className="shadow border rounded-3 bg-secondary-variant" >
            <div className="p-3 text-dark text-center">
               {/* <img src="assets/icons/html.jpg" alt="php" /> */}
               {/* {icon} */}
               <Icon size='4rem' color='black' />
               {/* <Icon size='4rem' className='text-dark'/> */}
               <h5 className="text-primary-variant fw-bolder text-start border-top pt-2 mt-3">{title}</h5>
               {
                  route.length > 0 && <a href={route} target="black" className="link-primary">Gif Expert App</a>
               }
               <p className="m-0 text-start font-body text-truncate-multiline">{description}</p>
               <div className="progress mt-2">
                  <div className={`progress-bar w-${porcentaje}`} role="progressbar" aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
            {/* <div className="bg-secondary text-center py-1">
               <a href="/#BodyContact" className="link-dark">Detalles</a>
            </div> */}
         </div>
      </div>
   )
}
