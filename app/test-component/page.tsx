import React from 'react'
import DurationUi from '../create-trip/_components/duration-ui'
import ViewTrip from '../create-trip/_components/view-trip'
import HotelCard from '../create-trip/_components/hotel'
import Activity from '../create-trip/_components/activity'

const hotel = {
    "hotel_name": "Hotel Le Six",
    "hotel_address": "14 Rue Stanislas, 75006 Paris, France",
    "price_per_night": "€150",
    "hotel_image_url": "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "geo_coordinates": {
        "latitude": 48.8454,
        "longitude": 2.3312
    },
    "rating": 4.5,
    "description": "A charming boutique hotel located in the heart of Montparnasse, featuring modern amenities, spa services, and a cozy atmosphere."
}

const activity = {
    "place_name": "Sacré-Cœur Basilica",
    "place_details": "A stunning basilica located on the highest point in the city, providing breathtaking views of Paris.",
    "place_image_url": "https://images.pexels.com/photos/13704124/pexels-photo-13704124.jpeg",
    "geo_coordinates": {
        "latitude": 48.8881,
        "longitude": 2.343
    },
    "place_address": "35 Rue du Chevalier de la Barre, 75018 Paris, France",
    "ticket_pricing": "Free",
    "time_travel_each_location": "20 mins",
    "best_time_to_visit": "Early morning for fewer crowds"
}
const page = () => {
  return (
    <div className='flex flex-col gap-9 w-screen h-screen justify-center align-middle items-center'>
        {/* <DurationUi/> */}
        {/* <ViewTrip/> */}
        <div className="grid grid-cols-3 gap-7">
        <Activity activity={activity}/>
        {/* <HotelCard hotel={hotel}/> */}
        {/* <HotelCard hotel={hotel}/> */}

        </div>
    </div>
  )
}

export default page