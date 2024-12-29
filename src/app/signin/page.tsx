import React from 'react'
import { SignIn } from '../components/AuthComponents'
import { auth } from '@/app/auth'
import { redirect } from 'next/navigation';

const page = async() => {
  const session = await auth();

  if (session) {
    redirect('/todo');
  }
  return (
    <SignIn provider="github"/>
  )
}

export default page