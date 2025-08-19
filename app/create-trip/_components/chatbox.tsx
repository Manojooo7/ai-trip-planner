"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { Send } from 'lucide-react'
import React, { useState } from 'react'


type Message = {
    role: string,
    content: string
}

export const Chatbox = () => {


    const [messages, setMessags] = useState<Message[]>([])
    const [userInput, setUserInput] = useState<string>()

    const {user} = useUser()

    const onSend = async() =>{
        setUserInput('');
        if(!userInput?.trim() || !user?.id) return;
        const newMsg:Message = {
            role: 'user',
            content: userInput
        }

        setMessags((prev:Message[]) => [...prev, newMsg])
        const result = await axios.post('api/ai-model', {
            messages: [...messages, newMsg]
        })

        setMessags((prev:Message[])=> [...prev, {
            role: 'assitant',
            content: result?.data?.resp
        }]);

        console.log(result.data);
        
    }
  return (
    <div className='h-[85vh] flex flex-col'>
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
                        </div>
                    </div>

                )
            ))}
        </section>
        <section>
            <div className="border rounded-2xl p-4 relative">
                <Textarea
                    placeholder='Create a trip for Paris from Mumbai'
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
