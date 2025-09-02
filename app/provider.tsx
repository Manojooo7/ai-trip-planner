"use client"
import { Navbar } from '@/components/navbar';
import { TripDetailsContext } from '@/context/trip-detials-context';
import { UserDetailContext } from '@/context/user-details-context';
import { api } from '@/convex/_generated/api';
import { TripContext, TripInfo } from '@/types/trip';
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import React, { useContext, useEffect, useState } from 'react'

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

      const [userDetails, setUserDetials] = useState<any>(null)
      const [tripInfo, setTripInfo] = useState<TripInfo | null>(null)
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
        <UserDetailContext.Provider value={{userDetails, setUserDetials}}>
          <TripDetailsContext.Provider value={{tripInfo, setTripInfo}}>
            <Navbar/>
            {children}
          </TripDetailsContext.Provider>
        </UserDetailContext.Provider>
    </div>
  )
}

export default Provider

export const useUserDetails = ()=>{
    return useContext(UserDetailContext)
}

export function useTripDetails():TripContext{
  const context =  useContext(TripDetailsContext);
  if(!context){
    throw new Error("useTripDetails must be used within a TripDetailsProvider")
  }
  return context
}