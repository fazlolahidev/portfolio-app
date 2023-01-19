import React from 'react'

//* Components *// 
import Informaion from './Informaion'
import FormProject from './FormProject'

const Footer = () => {
  return (
    <footer id='Contact' className='container mt-20'>
      <div className='grid md:grid-cols-5 md:gap-5' >
        <Informaion />
        <FormProject />
      </div>
    </footer>
  )
}

export default Footer