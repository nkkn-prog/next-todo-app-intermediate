'use client'
import React, { useState, useEffect } from 'react'
import { useParams} from 'next/navigation';
import InputForm from '@/app/components/InputForm'
import { Title } from '@/app/components/Title'

const Edit = () => {
  const { id } = useParams();
  const [targetTodo, setTargetTodo] = useState(null);
  const editId = Array.isArray(id) ? parseInt(id[0]) : id ? parseInt(id) : null;

  useEffect(() => {
    console.log('useEffectの中')
    const fetchTodo = async () => {
      if (editId !== null) {
        const response = await fetch(`/api/todo/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const { todos }= await response.json();
        setTargetTodo(todos);
      }
    };
    fetchTodo();
  }, [editId]);

  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <Title category='edit'/>
        <InputForm category='edit' targetTodo={targetTodo}/>
      </div>
    </>
  )
}

export default Edit