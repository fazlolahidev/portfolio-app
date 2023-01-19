import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import Title from '../UI/Title'

const Testimonials = () => {
  return (
    <section className='container mt-10' >
      <Title title='testimonial' des='my client say' />

      <TestimonialSlider />
    </section>
  )
}

export default Testimonials