import React from 'react'
import Image from 'next/image'
import CardExperiment from './CardExperiment'

//Images
import iconExperiment from '@/public/lab_icon.svg'

const texts = {
    1:{
        title: 'Generated',
        subtitle: 'Wallpapers for mobile'
    },
    2:{
        title: 'Awesome Al',
        subtitle: 'Al resource aggregator'
    },
    3:{
        title: 'Untick',
        subtitle: 'Tiny Chrome extension'
    }
}

const Experiments = () => {
  return (
    <div className='p-8 flex flex-col justify-center items-center gap-5 w-[450px]'>
        <div className='flex justify-center items-center gap-2'>
            <Image
                src={iconExperiment}
                alt='Icon Experiment'
                width={30}
                height={30}
            />
            <h3 className='text-black font-bold text-xl'>EXPERIMENTS</h3>
        </div>
        {
            Object.keys(texts).map((key, index) => (
                <CardExperiment
                    key={index}
                    title={texts[key].title}
                    subtitle={texts[key].subtitle}
                />
            ))
        }
    </div>
  )
}

export default Experiments