"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { LoaderIcon } from 'lucide-react'

function SignIn() {
  const [password,setPassword]=useState();
  const [email,setEmail]=useState();
  const router=useRouter();
  const [loader,setLoader]=useState();


  const onSignIn=()=>{
    setLoader(true)
    GlobalApi.SignIn(email,password).then(resp=>{
        toast("Login Successfully")
        router.push('/');
        setLoader(false)
    },(e)=>{
        console.log(e);
        toast(e?.response?.data?.error?.message)
        setLoader(false)
    })
}

  return (
    <div className='flex items-baseline justify-center my-20'>
        <div className='flex flex-col items-center justify-center
        p-10 bg-slate-100 border border-gray-200'>
            <Image src='/shotty-web.svg' width={200} height={200} alt='logo'/>
            <h2 className='font-bold text-3xl'>Inicia Sesión</h2>
            <h2 className='text-gray-500'>Ingresa tu correo y tu contraseña.</h2>
            <div className='w-full flex flex-col gap-5 mt-7'>
                <Input placeholder='name@example.com' 
                onChange={(e)=>setEmail(e.target.value)}/>
                <Input type='password' 
                placeholder='Password' 
                onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={()=>onSignIn()}
                    disabled={!(email||password)}
                >
                   {loader?<LoaderIcon className='animate-spin'/>:'Sign In'} </Button>
                <p>No tienes Cuenta?
                    <Link href={'/create-account'} className='text-blue-500'>
                        Crear Cuenta
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn