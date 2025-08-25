import { badges } from '@/components/hero'
import React from 'react'

export default function EmptyStateBox({onSelectOption}:any) {
  return (
    <div className='mt-07'>
        <h2 className='font-bold text-3xl text-center'>Start Planning new <strong className='text-primary'>Trip using AI</strong></h2>
        <p className='text-center mt-2 text-gray-400'>Discover personalised travel itineraries, find the best destinations, and plan your dream vacation effortlesly with the power of AI. Let our smart assistant do the hard work while you enjoy the journey</p>

         <div className="mt-7 flex flex-col gap-5 justify-center align-middle">
            {badges.map((badge, i)=>(
                <div 
                key={i}
                onClick={()=> onSelectOption(badge.title)}
                className='flex gap-3 items-center align-middle cursor-pointer bg-transparent border border-gray-200 rounded-xl p-3 text-black hover:border-primary hover:text-primary'>
                    <badge.icon size={20} className={badge.iconColor}/>
                    <h2 className='text-xs font-medium'>{badge.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}
