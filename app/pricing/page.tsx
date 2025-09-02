import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const page = () => {

  return (
   <div className='px-12 flex flex-col mt-7 md:mt-10 w-full h-screen'>
    <div className="flex justify-center text-center align-middle items-center gap-7 flex-col">
        <h1 className='text-2xl md:text-3xl font-medium'>✈️ Choose Your Perfect Travel Plan</h1>
        <p className='md:text-sm text-xs text-gray-600'>
            Find the right subscription that matches your travel style — from a one-day escape to a full year of adventures.
        </p>
    </div>
    <div className="mt-7">
      <PricingTable forOrganizations/>
    </div>
    </div>
  )
}

export default page