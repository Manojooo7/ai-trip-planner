 import React from 'react'
 
 export const SelectTravelesList = [

    {

        id: 1,

        title: 'Just Me',

        desc: 'A sole traveles in exploration',

        icon: '✈️',

        people: '1'

    },

    {

        id: 2,

        title: 'A Couple',

        desc: 'Two traveles in tandem',

        icon: '🥂',

        people: '2 People'

    },

    {

        id: 3,

        title: 'Family',

        desc: 'A group of fun loving adv',

        icon: '🏡',

        people: '3 to 5 People'

    },

    {

        id: 4,

        title: 'Friends',

        desc: 'A bunch of thrill-seekes',

        icon: '⛵',

        people: '5 to 10 People'

    },

]

 export default function GroupSizeUi({onSelect}:any) {
   return (
     <div className='grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-3'>
        {SelectTravelesList.map((item, i)=>(
            <div 
                key={i} 
                className="p-3 bg-background hover:shadow-xl hover:shadow-primary/20 rounded-md  cursor-pointer transition-shadow duration-200"
                onClick={()=> onSelect(item.title+':'+item.people)}
            >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
            </div>
        ))}
     </div>
   )
 }
 