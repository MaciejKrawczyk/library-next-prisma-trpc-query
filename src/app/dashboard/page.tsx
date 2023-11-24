'use client'

import {FC} from 'react'
import {useSession} from "next-auth/react";

interface PageProps {

}

const Page: FC<PageProps> = ({}) => {
  
  const { data: session, status } = useSession()
  console.log(session)
  
  return (
    <div>
      <h1>dASHBOARD</h1>
    </div>
  )
}

export default Page