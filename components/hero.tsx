"use client"
import React from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { ArrowDown, Earth, Globe2, Landmark, Plane, Send } from 'lucide-react'
import HeroVideoDialog from './magicui/hero-video-dialog'
import { PopularPlaces } from './popular-places'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export const Hero = () => {

    const badges = [
        {
            title: "Create new trip",
            icon: Globe2,
            iconColor: 'text-blue-600'
        },
        {
            title: "Inspire me where to go",
            icon: Plane,
            iconColor: 'text-green-600'
        },
        {
            title: "Discover hidden gems",
            icon: Landmark,
            iconColor: 'text-blue-800'
        },
        {
            title: "Adventure Destination",
            icon: Earth,
            iconColor: 'text-orange-600'
        }

    ]

    const {user} = useUser()
    const router = useRouter()
    const onSend = () =>{
        if(!user){
            router.push('/sign-in')
            return
        }
        // Navigation
        router.push('/create-trip')
    }

  return (
    <div className='w-full mt-24 mx-auto flex justify-center items-center'>
        <div className="max-w-3xl w-full text-center space-y-6">
        {/* Title and description */}
            <h1 className='text-xl md:text-5xl font-bold'>Hey, I'm your personal <span className='text-primary'>Trip Planner</span></h1>
            <p className='mt-2 text-lg'>Tell me what you want, and I'll handle the rest: Flights, Hotels, trip Planner - all in seconds</p>
        {/* Input Box */}
        <div className="w-full">
            <div className="border rounded-2xl p-4 relative">
                <Textarea
                    placeholder='Create a trip for Paris from Mumbai'
                    className='resize-none w-full h-32 focus-visible:ring-0 shadow-none border-none bg-transparent z-1'
                />
                <Button variant={'default'} onClick={onSend} className='absolute bottom-6 right-6 z-2'>
                    <Send size={24}/>
                </Button>
            </div>
        </div>
        {/* Badges */}

        <div className="mt-7 flex gap-5 justify-center align-middle items-center">
            {badges.map((badge, i)=>(
                <div key={i} className='flex gap-3 justify-between items-center align-middle cursor-pointer bg-transparent border border-gray-200 rounded-3xl px-3 py-2 hover:bg-primary hover:text-white text-black hover:border-transparent'>
                    <badge.icon size={20} className={badge.iconColor}/>
                    <h2 className='text-xs font-medium'>{badge.title}</h2>
                </div>
            ))}
        </div>

        {/* Video Components */}
        <div className="w-full flex justify-center align-middle items-center flex-col space-y-6 mt-24">
            <h2 className='flex gap-2'>Not Sure where to start?
                <span className='font-bold'> See how it works</span>
                <span><ArrowDown/></span>
            </h2>

            <HeroVideoDialog
                className="w-full"
                animationStyle="from-center"
                videoSrc="https://www.example.com/dummy-video"
                thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
                thumbnailAlt="Dummy Video Thumbnail"
            />
        </div>
        </div>
    </div>
  )
}
