import React from 'react'
import { LadderBleacher } from './Bleacher/Bleacher'

export const Ladder = () => {
   // const dataLadder = {type: "s", type: "n", type: "f"};
   return (
      <div className="container text-secondary">
         <LadderBleacher number="3" type="f"/>
         <LadderBleacher number="2" type="n"/>
         <LadderBleacher number="1" type="s"/>

         <LadderBleacher number="2" type="n-r"/>
         <LadderBleacher number="3" type="n-r"/>
         <LadderBleacher number="4" type="n-r"/>
         <LadderBleacher number="5" type="n-r"/>
         <LadderBleacher number="5" type="s-r"/>

         <LadderBleacher number="5" type="n"/>
         <LadderBleacher number="4" type="n"/>
         <LadderBleacher number="3" type="n"/>
         <LadderBleacher number="2" type="n"/>
         <LadderBleacher number="1" type="s"/>

         <LadderBleacher number="2" type="n-r"/>
         <LadderBleacher number="3" type="n-r"/>
         <LadderBleacher number="4" type="n-r"/>
         <LadderBleacher number="5" type="n-r"/>
         <LadderBleacher number="5" type="s-r"/>

         
         <LadderBleacher number="5" type="n"/>
         <LadderBleacher number="4" type="n"/>
         <LadderBleacher number="3" type="f"/>

      </div>
   )
}
