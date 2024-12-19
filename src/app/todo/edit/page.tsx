'use client'
import React from 'react'
import InputForm from '@/app/components/InputForm'
import { Title } from '@/app/components/Title'

const Edit = () => {

  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <Title category='edit'/>
        <InputForm category='edit'/>
      </div>
    </>
  )
}

export default Edit