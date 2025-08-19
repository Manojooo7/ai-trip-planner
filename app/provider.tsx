"use client"
import { Navbar } from '@/components/navbar';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useEffect } from 'react'

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

      const createUser = useMutation(api.user.createNewuser)
    
      const {user} = useUser();

      useEffect(()=>{
        user&&CreateNewUser()
      },[user])
    
      const CreateNewUser = async ()=>{
        if(user && user?.primaryEmailAddress?.emailAddress){
          const result = await createUser({
            email: user?.primaryEmailAddress?.emailAddress,
            image_url: user?.imageUrl,
            clerk_user_id: user?.id,
            name: user?.fullName ?? ''
      
          })
        }
      }

  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Provider