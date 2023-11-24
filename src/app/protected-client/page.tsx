'use client'

import {FC} from 'react'

import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

interface PageProps {

}

const Page: FC<PageProps> = async ({}) => {
  
  const {data: session} = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/protected-client')
    }
  })
  
  return (
    <>
        <h1>ACCESS GRANTED!</h1>
        <p>{session?.user}</p>
    </>
  )
}

export default Page