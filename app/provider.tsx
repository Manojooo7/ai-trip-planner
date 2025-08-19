"use client"
import { Navbar } from '@/components/navbar';
import { UserDetailContext } from '@/context/user-details-context';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useContext, useEffect, useState } from 'react'

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

      const [useDetails, setUserDetials] = useState<any>(null)
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
          setUserDetials(result)
        }

      }

  return (
    <div>
        <UserDetailContext.Provider value={{useDetails, setUserDetials}}>
            <Navbar/>
            {children}
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider

export const userDetails = ()=>{
    return useContext(UserDetailContext)
}