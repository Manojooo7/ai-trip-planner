import React from 'react'
import { Chatbox } from './_components/chatbox'

const CreateTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10'>
        <div className="">
            <Chatbox/>
        </div>
        <div className="">Trip Plan</div>
    </div>
  )
}

export default CreateTrip