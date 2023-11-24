'use client'

import {FC, useState} from 'react'
import {useRouter} from "next/navigation";
import {trpc} from "@/src/backend/trpc/client";

interface PageProps {

}

const Page: FC<PageProps> = ({}) => {
  
  
  const router = useRouter()
  const [data, setData] = useState({username: '', password: ''})
  const createUser = trpc.myapp.user.createUser.useMutation()
  
  const registerUser = async (e) => {
    e.preventDefault()
    console.log(data)
    
    const user = createUser.mutate(data)
  
  }
  
  return (
    
    <div>
      
      <h1>Register</h1>
      
      <form onSubmit={registerUser}>
        
        <input
          name="username"
          onChange={(e) => {
            setData({...data, username: e.target.value})
          }}
          type="text"
          className={'border border-black w-20 h-10 text-black'}
        />
        
        <input
          name="password"
          onChange={(e) => {
            setData({...data, password: e.target.value})
          }}
          type="password"
          className={'border border-black w-20 h-10 text-black'}
        />
        
        <button type={'submit'}>submitButton</button>
      </form>
    
    </div>
  )
}

export default Page