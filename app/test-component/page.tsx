import React from 'react'
import DurationUi from '../create-trip/_components/duration-ui'
import ViewTrip from '../create-trip/_components/view-trip'

const page = () => {
  return (
    <div className='flex flex-col gap-9 w-screen h-screen justify-center align-middle items-center'>
        <DurationUi/>
        <ViewTrip/>
    </div>
  )
}

export default page