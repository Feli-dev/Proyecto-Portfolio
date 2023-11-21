import React from 'react'
import Image from 'next/image'

//Images
import terminal from "@/public/terminal.png"

const CardExperiment = ({title, subtitle}) => {
  return (
    <div className='relative flex flex-col justify-center items-start border-2 border-gray-400 rounded-xl p-8 w-full overflow-hidden'>
        <h1 className='text-black text-2xl font-bold'>
            {title}
        </h1>
        <p className='text-gray-500/80 text-xl font-semibold'>
            {subtitle}
        </p>
        <div className='absolute -bottom-20 -right-20'>
            <Image
                src={terminal}
                alt='Terminal'
                width={200}
                height={100}
                className='rotate-[10deg]'
            />
        </div>
    </div>
  )
}

export default CardExperiment