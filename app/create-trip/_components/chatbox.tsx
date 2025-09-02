"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Typing from './typing'
import EmptyStateBox from './empty-state-box'
import GroupSizeUi from './group-size-ui'
import BudgetUi from './budget-ui'
import DurationUi from './duration-ui'
import ViewTrip from './view-trip'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import {useTripDetails, useUserDetails } from '@/app/provider'
import { v4 } from 'uuid'
import { TripContext } from '@/types/trip'


export type Message = {
    role: string,
    content: string,
    ui?: string
}

export type TripInfo = {
    budget: string,
    destination: string,
    duration: string,
    group_size: string,
    origin: string,
    hotels: any,
    itinerary: any

}


export const Chatbox = () => {


    const [messages, setMessags] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [triggerSent, setTriggerSend] = useState(false)
    const [isFinal, setIsFinal] = useState(false)
    const [tripDetails, setTripDetails] = useState<TripInfo>()
    const {userDetails, setUserDetails} = useUserDetails();
    const {tripInfo, setTripInfo} = useTripDetails()
    const saveTrip = useMutation(api.trip.createTrip)

    const onSend = async() =>{
        if(!userInput?.trim() || !userDetails?._id) return;
        setLoading(true)
        setUserInput('');
        const newMsg:Message = {
            role: 'user',
            content: userInput
        }

        setMessags((prev:Message[]) => [...prev, newMsg])
        const result = await axios.post('api/ai-model', {
            messages: [...messages, newMsg],
            isFinal: isFinal 
        })
        console.log("Trip: ", result.data);

        !isFinal && setMessags((prev:Message[])=> [...prev, {
            role: 'assistant',
            content: result?.data?.resp,
            ui: result?.data.ui
        }]);

        if(isFinal){
            setTripDetails(result?.data?.trip_plan)
            setTripInfo(result?.data?.trip_plan)
            const tripId = v4()
            await saveTrip({
                trip_details: result?.data?.trip_plan,
                trip_id: tripId,
                uid: userDetails?._id
            })
        }

        setLoading(false)
        
    }

    useEffect(()=>{
        if(triggerSent && userInput){
            onSend();
            setTriggerSend(false)
        }
    },[triggerSent])

    const RenderGenerativeUi = (ui: string | undefined)=>{
        if(ui === 'budget'){
            return (
                <BudgetUi onSelect={(v:string) => {setUserInput(v); setTriggerSend(true)}} />
            )
        }else if(ui === 'groupSize'){
            return (
                <GroupSizeUi onSelect={(v:string) => {setUserInput(v); setTriggerSend(true)}} />
            )
        }else if(ui === 'duration'){
            return (
                <DurationUi onSelect={(v:string) => {setUserInput(v); setTriggerSend(true)}} />
            )
        }else if(ui === 'final'){
            return (
                <ViewTrip trip = {tripDetails}/>
            )
        }
        return null
    }


    useEffect(()=>{
        const lastMessage = messages[messages.length - 1];
        if(lastMessage?.ui === 'final'){
            setIsFinal(true)
            setUserInput('Ok, Great!')
            setTriggerSend(true)
        }
    })

  return (
    <div className='h-[85vh] flex flex-col'>
        {messages.length === 0 && 
            <EmptyStateBox
            onSelectOption={(v:string)=> {setUserInput(v); setTriggerSend(true)}}
            />
        }
        <section className='flex-1 overflow-y-auto p-4'>
            {messages.map((msg, index) =>(
                msg.role === 'user' ? (
                    <div className='flex justify-end mt-2' key={index}>
                        <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
                            {msg.content}
                        </div>
                    </div>

                ):(
                    <div className='flex justify-start mt-2' key={index}>
                        <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
                            {msg.content}
                            {/* <GroupSizeUi onSelect={(v:string) => {setUserInput(v); onSend()}}/> */}
                            <div className="mt-4">
                                {RenderGenerativeUi(msg.ui ?? '')}
                            </div>
                        </div>
                    </div>

                )
            ))}

            {loading && 
                <div className='flex justify-start mt-2'>
                    <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
                        <Typing/>
                    </div>
                </div>
            }
        </section>
        <section>
            <div className="border rounded-2xl p-4 relative">
                <Textarea
                    placeholder='Start typing here....'
                    className='resize-none w-full h-32 focus-visible:ring-0 shadow-none border-none bg-transparent z-1'
                    onChange={(e) => setUserInput(e.target.value)}
                    value={userInput}
                />
                <Button variant={'default'} onClick={onSend} className='absolute bottom-6 right-6 z-2'>
                    <Send size={24}/>
                </Button>
            </div>
        </section>
    </div>
  )
}
