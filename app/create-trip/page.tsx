import React from 'react'
import { Chatbox } from './_components/chatbox'
import Itinerary from './_components/itinerary'

const CreateTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10 h-screen'>
        <div className="">
            <Chatbox/>
        </div>
        <div className="">
          <Itinerary/>
        </div>
    </div>
  )
}

export default CreateTrip