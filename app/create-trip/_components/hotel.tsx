'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { IndianRupee, MapPin, Star, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const hotel = {
    "hotel_name": "Hotel Le Six",
    "hotel_address": "14 Rue Stanislas, 75006 Paris, France",
    "price_per_night": "€150",
    "hotel_image_url": "https://example.com/hotel_le_six.jpg",
    "geo_coordinates": {
        "latitude": 48.8454,
        "longitude": 2.3312
    },
    "rating": 4.5,
    "description": "A charming boutique hotel located in the heart of Montparnasse, featuring modern amenities, spa services, and a cozy atmosphere."
}

export default function HotelCard({hotel}:{hotel:any}) {

    const [photoUrl, setPhotoUrl] = useState<string>()

    const getGooglePlaceDetails = async()=>{
        const result = await axios.post('api/google-place-details', {
            placeName:hotel?.hotel_name
        })
        if(result?.data.e){
            return
        }
        setPhotoUrl(result?.data);
        
    }

    useEffect(()=>{
        hotel && getGooglePlaceDetails()
    },[hotel])
  return (
    <div className="flex flex-col gap-1 p-5 rounded-md shadow-xl shadow-gray-400/20 w-96">
        <Image
            src={photoUrl ? photoUrl : 'https://placehold.co/400x200?text=Image+Not%20Found'}
            alt={hotel.hotel_name}
            width={400}
            height={200}
            className='rounded-md pointer-events-none'
        />
        <div className=""></div>
        <div className="flex w-full justify-between items-center mt-2">
            <div className="flex gap-2">
                <h2 className='text-xl mt-2 font-medium'>{hotel.hotel_name}</h2>
            </div>
            <div className="flex gap-2 items-center">
                <Star size={20} className='text-yellow-500 fill-yellow-500'/>
                <p className='text-lg text-yellow-500'>{hotel.rating}</p>
            </div>
        </div>
        <p className='text-sm mt-2'>{hotel.description}</p>
        <div className="flex gap-2 items-center mt-3">
            <MapPin size={15}/>
            <p className='text-gray-400 text-sm'>{hotel.hotel_address}</p>
        </div>

        <p className='text-lg'>{hotel.price_per_night} / Night</p>
        <Link href={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name} target='_blank'>
            <Button className='w-full bg-primary mt-3'>View</Button>
        </Link>
    </div>
  )
}
