import React from 'react'
import InputForm from '@/app/components/InputForm'
import { Title } from '@/app/components/Title'

const Create = () => {

  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <Title category='create'/>
        <InputForm category='create'/>
      </div>
    </>
  )
}

export default Create