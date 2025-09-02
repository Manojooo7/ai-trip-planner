export interface GeoCoordinates {
  latitude: number
  longitude: number
}

export interface Hotel {
  hotel_name: string
  hotel_address: string
  price_per_night: string
  hotel_image_url: string
  geo_coordinates: GeoCoordinates
  rating: number
  description: string
}

export interface Activity {
  place_name: string
  place_details: string
  place_image_url: string
  geo_coordinates: GeoCoordinates
  place_address: string
  ticket_pricing: string
  time_travel_each_location: string
  best_time_to_visit: string
}

export interface ItineraryDay {
  day: number
  day_plan: string
  best_time_to_visit_day: string
  activities: Activity[]
}

export interface TripInfo {
  destination: string
  duration: string
  origin: string
  budget: string
  group_size: string
  hotels: Hotel[]
  itinerary: ItineraryDay[]
}

export interface TripContext {
  tripInfo: TripInfo | null,
  setTripInfo:React.Dispatch<React.SetStateAction<TripInfo | null>>
}