import React from 'react'
export const SelectBudgetOptions = [

    {

        id: 1,

        title: 'Cheap',

        value: 'Low',

        desc: 'Stay conscious of costs',

        icon: '💵',

        color: 'bg-green-100 text-green-600'

    },

    {

        id: 2,

        title: 'Moderate',

        value: 'Medium',

        desc: 'Keep cost on the average side',

        icon: '💰',

        color: 'bg-yellow-100 text-yellow-600'

    },

    {

        id: 3,

        title: 'Luxury',

        value: 'High',

        desc: 'Don’t worry about cost',

        icon: '💸',

        color: 'bg-purple-100 text-purple-600'

    },

]


function BudgetUi({onSelect}:any) {
return (
     <div className='grid grid-cols-2 md:grid-cols-3 gap-2 items-center mt-3'>
        {SelectBudgetOptions.map((item, i)=>(
            <div 
                key={i} 
                className="p-3 bg-background hover:shadow-xl hover:shadow-primary/20 rounded-md  cursor-pointer transition-shadow duration-200"
                onClick={()=> onSelect(item.value)}
            >
                <h2>{item.icon}</h2>
                <h2>{item.title}</h2>
            </div>
        ))}
     </div>
   )
}

export default BudgetUi