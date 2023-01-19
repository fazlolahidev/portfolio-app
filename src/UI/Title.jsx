import React from 'react'

const Title = ({ title, des }) => {
  return (
    <div className='text-center flex flex-col gap-2' >
      <h1 className='text-4xl capitalize' >{ title }</h1>
      <p className='text-slate-500 text-sm capitalize' >{ des }</p>
    </div>
  )
}

export default Title