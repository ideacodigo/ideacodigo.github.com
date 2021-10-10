import React from 'react'

export const BodySectionHeader = () => {
   return (
      <div className="container text-center mt-5 pt-auto mt-md-5 pt-md-4 animate__animated animate__fadeInUp">
         <h4 className="text-secondary-variant">My work as an information system developer</h4>
         <h5 className="text-secondary">You can find my job</h5>
         <a href="/#BodySectionWork"><img className="cursor-pointer animate__animated animate__shakeY animate__slower animate__delay-2s animate__repeat-3" src="./assets/icons/arrow-down.png" alt="go to dow" /></a>
      </div>
   )
}
