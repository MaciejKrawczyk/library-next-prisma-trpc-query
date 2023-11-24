import {FC} from 'react'

import {options} from '@/src/app/api/auth/[...nextauth]/options'
import {getServerSession} from "next-auth";

interface PageProps {

}

const Page: FC<PageProps> = async ({}) => {
  
  const session = await getServerSession(options)
  
  
  return (
    <>
      {session && (
        <h1>ACCESS GRANTED!</h1>
      ) || (
        <h1>YOU SHALL NOT PASS!</h1>
      )
      }
    
    </>
  )
}

export default Page