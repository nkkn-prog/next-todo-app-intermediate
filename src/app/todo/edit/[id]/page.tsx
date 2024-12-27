'use client'
import React, { useState, useEffect } from 'react'
import { useParams} from 'next/navigation';
import InputForm from '@/app/components/InputForm'
import { Title } from '@/app/components/Title'
import { todoApi } from '@/app/lib/api';

const Edit = () => {
  const { id } = useParams();
  const [targetTodo, setTargetTodo] = useState(null);
  const editId = Array.isArray(id) ? parseInt(id[0]) : id ? parseInt(id) : null;

  useEffect(() => {
    const fetchTodo = async () => {
      if (editId !== null) {
        const todo = await todoApi.getEditTodo(editId);
        setTargetTodo(todo);
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