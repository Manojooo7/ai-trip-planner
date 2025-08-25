import { Button } from '@/components/ui/button'
import { EarthIcon } from 'lucide-react'

export default function ViewTrip({trip}:any) {
  
    return (
        <div className='flex flex-col justify-center align-middle items-center gap-5 p-5 bg-background rounded-md hover:shadow-xl hover:shadow-primary/20 transition-shadow'>
            <EarthIcon size={24} className={`${trip ? '': 'animate-bounce'} text-primary`}/>
            <h2 className='text-lg md:text-2xl font-bold'>{trip ? '✈️ Hurray you dream trip is ready' : '✈️ Planning your drim trip...'}</h2>
            <p className='text-lg text-gray-400'>{trip ? 'We gathered best destination hotels activities for you' : 'Gathering best destination hotels activities for you'}</p>
            <Button disabled={!trip} className='w-full'>View</Button>
        </div>
    )
}
