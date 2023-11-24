import {FC} from 'react'

import {options} from '@/src/app/api/auth/[...nextauth]/options'
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

interface PageProps {

}

const Page: FC<PageProps> = async ({}) => {
  
  const session = await getServerSession(options)
  
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/protected-2')
  }
  
  return (
    <>
        <h1>ACCESS GRANTED!</h1>
    </>
  )
}

export default Page