import React from 'react'
import { BlogBody } from '../../Components/Blog/Body/Body'
import { BlogHeader } from '../../Components/Blog/Header'

export const ScreenBlog = () => {
   return (
      <div className='text-secondary'>
         <BlogHeader />
         <BlogBody />
      </div>
   )
}
