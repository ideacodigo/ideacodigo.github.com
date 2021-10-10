import React from 'react'

import './Bleacher.css';
export const LadderBleacher = ({number, type}) => {

   return (
      <div className="row LadderBleacher">
         <div className={(number==="1") ? `col b-g-${type} b-r-${type}` : "col"}></div>
         <div className={(number==="2") ? `col b-g-${type} b-r-${type}` : "col"}></div>
         <div className={(number==="3") ? `col b-g-${type} b-r-${type} text-center` : "col"}>
            {
               (type==="f") 
               && <img className="w-75" src="./assets/icons/programing.png" alt="programing"/>

            }
         </div>

         <div className={(number==="4") ? `col b-g-${type} b-r-${type}` : "col"}></div>
         <div className={(number==="5") ? `col b-g-${type} b-r-${type}` : "col"}></div>
      </div>
   )
}
