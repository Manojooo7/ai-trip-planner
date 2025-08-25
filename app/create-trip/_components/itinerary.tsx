import { Timeline } from '@/components/ui/timeline';
import React from 'react'
import { TripInfo } from './chatbox';

const TRIP_DATA : TripInfo = { 
    "destination": "Paris",
    "duration": "4 Days",
    "origin": "Mumbai",
    "budget": "Medium",
    "group_size": "Couple: 2 People",
    "hotels": [
        {
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
        },
        {
            "hotel_name": "Hotel Eiffel Seine",
            "hotel_address": "3 Rue de Monttessuy, 75007 Paris, France",
            "price_per_night": "€180",
            "hotel_image_url": "https://example.com/hotel_eiffel_seine.jpg",
            "geo_coordinates": {
                "latitude": 48.8534,
                "longitude": 2.2934
            },
            "rating": 4.3,
            "description": "Enjoy stunning views of the Eiffel Tower, with modern rooms and easy access to public transportation."
        },
        {
            "hotel_name": "Le Pavillon de la Reine",
            "hotel_address": "28 Place des Vosges, 75003 Paris, France",
            "price_per_night": "€220",
            "hotel_image_url": "https://example.com/le_pavillon.jpg",
            "geo_coordinates": {
                "latitude": 48.8531,
                "longitude": 2.3651
            },
            "rating": 4.7,
            "description": "A luxurious hotel set in a 17th-century building, offering elegant rooms and a beautiful courtyard."
        }
    ],
    "itinerary": [
        {
            "day": 1,
            "day_plan": "Explore Montmartre and Sacré-Cœur.",
            "best_time_to_visit_day": "Morning",
            "activities": [
                {
                    "place_name": "Sacré-Cœur Basilica",
                    "place_details": "A stunning basilica located on the highest point in the city, providing breathtaking views of Paris.",
                    "place_image_url": "https://example.com/sacre_couer.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8881,
                        "longitude": 2.343
                    },
                    "place_address": "35 Rue du Chevalier de la Barre, 75018 Paris, France",
                    "ticket_pricing": "Free",
                    "time_travel_each_location": "20 mins",
                    "best_time_to_visit": "Early morning for fewer crowds"
                },
                {
                    "place_name": "Montmartre District",
                    "place_details": "A charming and artistic neighborhood known for its bohemian vibe and famous artists.",
                    "place_image_url": "https://example.com/montmartre.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8867,
                        "longitude": 2.3431
                    },
                    "place_address": "Montmartre, 75018 Paris, France",
                    "ticket_pricing": "Free",
                    "time_travel_each_location": "5 mins walking",
                    "best_time_to_visit": "Late morning to explore cafés and shops"
                }
            ]
        },
        {
            "day": 2,
            "day_plan": "Adventure in the Luxembourg Gardens and a bike ride.",
            "best_time_to_visit_day": "Afternoon",
            "activities": [
                {
                    "place_name": "Luxembourg Gardens",
                    "place_details": "Beautiful gardens perfect for a picnic and leisure, with statues and picturesque pathways.",
                    "place_image_url": "https://example.com/luxembourg_gardens.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8462,
                        "longitude": 2.3373
                    },
                    "place_address": "75006 Paris, France",
                    "ticket_pricing": "Free",
                    "time_travel_each_location": "15 mins",
                    "best_time_to_visit": "Early afternoon for optimal sunlight"
                },
                {
                    "place_name": "Seine River Bike Ride",
                    "place_details": "Explore Paris by bike along the Seine, passing iconic landmarks with a guided tour.",
                    "place_image_url": "https://example.com/seine_bike_ride.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8559,
                        "longitude": 2.3243
                    },
                    "place_address": "Quai de la Tournelle, 75005 Paris, France",
                    "ticket_pricing": "€30 per person",
                    "time_travel_each_location": "20 mins",
                    "best_time_to_visit": "Late afternoon"
                }
            ]
        },
        {
            "day": 3,
            "day_plan": "Visit landmark museums and enjoy street food.",
            "best_time_to_visit_day": "Morning",
            "activities": [
                {
                    "place_name": "Louvre Museum",
                    "place_details": "The world’s largest art museum and a historic monument in Paris, famous for the Mona Lisa.",
                    "place_image_url": "https://example.com/louvre.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8619,
                        "longitude": 2.3352
                    },
                    "place_address": "Rue de Rivoli, 75001 Paris, France",
                    "ticket_pricing": "€17",
                    "time_travel_each_location": "30 mins",
                    "best_time_to_visit": "Morning for fewer crowds"
                },
                {
                    "place_name": "Street Food Tour",
                    "place_details": "Taste various local delights from food stalls and market vendors across the city.",
                    "place_image_url": "https://example.com/street_food_tour.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8651,
                        "longitude": 2.3329
                    },
                    "place_address": "Rue du Marais, 75003 Paris, France",
                    "ticket_pricing": "€50 per person",
                    "time_travel_each_location": "15 mins",
                    "best_time_to_visit": "Lunch time"
                }
            ]
        },
        {
            "day": 4,
            "day_plan": "Day trip to Disneyland Paris.",
            "best_time_to_visit_day": "All day",
            "activities": [
                {
                    "place_name": "Disneyland Paris",
                    "place_details": "A famous theme park with attractions, shows, and beloved Disney characters for a magical experience.",
                    "place_image_url": "https://example.com/disneyland_paris.jpg",
                    "geo_coordinates": {
                        "latitude": 48.8671,
                        "longitude": 2.7858
                    },
                    "place_address": "77700 Coupvray, France",
                    "ticket_pricing": "€89 per person",
                    "time_travel_each_location": "40 mins via train",
                    "best_time_to_visit": "All day to enjoy all attractions"
                }
            ]
        }
    ]
}
export default function Itinerary() {
   const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-y-auto h-[83vh]">
      <Timeline data={data} tripData={TRIP_DATA}/>
    </div>
  );
}
