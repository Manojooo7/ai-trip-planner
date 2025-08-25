"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

export default function DurationUi({onSelect}:any) {
    const [daysCount, setDaysCount] = useState(3);


  return (
    <div className='flex flex-col justify-center align-middle items-center gap-5 p-5 bg-background rounded-md hover:shadow-xl hover:shadow-primary/20 transition-shadow'>
        <h2 className='mt-4 md:text-2xl text-lg font-bold'>How many days you want to travel</h2>
        <div className="flex gap-5 justify-center align-middle">
            <Button className="text-xl" onClick={()=> daysCount > 1 ? setDaysCount(daysCount - 1): setDaysCount(1)}>-</Button>
            <div className="flex justify-center text-white align-middle rounded-md items-center text-xl px-7 bg-primary">{daysCount} {daysCount === 1 ? 'Day' : 'Days'}</div>
            <Button className="text-xl" onClick={()=> setDaysCount(daysCount + 1)}>+</Button>
        </div>
        <Button onClick={()=> onSelect(`${daysCount} Days`)} className='w-full'>Confirm</Button>
    </div>
  )
}
