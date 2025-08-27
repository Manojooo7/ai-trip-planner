"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { MapPin, Sunrise, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Activity({activity}:any) {

    const [photoUrl, setPhotoUrl] = useState<string>()

    const getGooglePlaceDetails = async()=>{
        const result = await axios.post('api/google-place-details', {
            placeName:activity?.place_name
        })
        if(result?.data.e){
            return
        }
        setPhotoUrl(result?.data);
        
    }

    useEffect(()=>{
        activity && getGooglePlaceDetails()
    },[activity])

  return (
    <div className='flex flex-col gap-3 p-5 rounded-md shadow-xl shadow-gray-400/20 w-full'>
        <Image
            // src={activity.place_image_url}
            src={photoUrl ? photoUrl : 'https://placehold.co/400x200?text=Image+Not%20Found'}
            alt={activity.place_name}
            width={400}
            height={200}
            className='rounded-md w-full'
        />
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-medium'>{activity.place_name}</h1>
            {activity.ticket_pricing === 'Free' || activity.ticket_pricing === 'free' ? (
                <Badge className='bg-primary'>{activity.ticket_pricing}</Badge>
            ):(
                <p className='text-xl font-medium'>{activity.ticket_pricing}</p>
            )}
        </div>

        <p className='text-gray-500 text-md'>{activity.place_details}</p>

        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Timer size={15} className='text-gray-500'/>
                <p className='text-sm text-gray-500'>{activity.time_travel_each_location}</p>
            </div>
            <div className="flex items-center gap-2">
                <Sunrise size={15} className='text-gray-500'/>
                <p className='text-sm text-gray-500'>{activity.best_time_to_visit}</p>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <MapPin size={15}/>
            <p className='text-sm'>{activity.place_address}</p>
        </div>
        <Link href={'https://www.google.com/maps/search/?api=1&query='+activity?.place_name} target='_blank'>
            <Button className='w-full bg-primary'>View</Button>
        </Link>
    </div>
  )
}
