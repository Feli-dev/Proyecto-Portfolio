import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-20 gap-2 border-4 rounded-3xl border-slate-600/50'>
        <div className='flex items-center justify-center gap-2'>
            <p className='text-gray-500 text-sm'>
                Have an interesting, stupid or crazy idea you'd like some help building?
            </p>
            <h6 className='text-black text-base font-bold underline decoration-2 underline-offset-2 decoration-lime-500'>
                Let's talk.
            </h6>
        </div>
        <h6 className='text-neutral-600/50 font-extrabold text-base'>
            2023 © Felipe Tau
        </h6>
    </div>
  )
}

export default Footer