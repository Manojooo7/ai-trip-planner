import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';
    const {placeName} = await request.json()
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': process.env.GOOGLE_PLACE_API_KEY,
            'X-Goog-FieldMask': [
                'places.photos',
                'places.displayName',
                'places.id',
                'places.googleMapsLinks'
            ]
        }
    }


    try {
        const result = await axios.post(
            BASE_URL, 
            {textQuery: placeName},
            config
        )
        
        const placeRefName = result?.data?.places[0]?.photos[0]?.name
        const placePhotoRefUrl = `https://places.googleapis.com/v1/${placeRefName}/media?maxHeightPx=1000&maxWidthPx=1000&key=${process.env.GOOGLE_PLACE_API_KEY}`
        return NextResponse.json(placePhotoRefUrl)
        
    } catch (e) {
        return NextResponse.json({error: e})
    }

}