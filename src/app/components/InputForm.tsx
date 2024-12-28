'use client'
import React, {useState, useEffect} from 'react'
import styles from '../styles/inputForm.module.css'
import { useForm } from "react-hook-form"
import BackToListBtn from '@/app/components/BackToListBtn'
import { useRouter } from 'next/navigation'

type FormValues = {
  id: number;
  title: string;
  content: string;
  status: string;
}

const btnTexts = {
  create: '作成',
  save: '保存',
}

const InputForm = (props) => {

  const { register, handleSubmit, formState: { errors }} = useForm<FormValues>();
  const { category, targetTodo } = props;
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState('');

  useEffect(() => {
    if (category === 'edit' && targetTodo !== null) {
      setTitle(targetTodo.title);
      setContent(targetTodo.content);
      setEditId(targetTodo.id)
    }
  }, [category, targetTodo]);

  const createTodos = async(data:FormValues) => {
    try {
      const response = await fetch('/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
        })
      })
      return await response.json()
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  const updateTodo = async(id:number, data:FormValues) => {
    try {
      const response = await fetch(`/api/todo/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          title: data.title,
          content: data.content,
          status: data.status,
        })
      })
      return await response.json()
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  const onSubmit = ((data: FormValues) => {
    if(category === 'create'){
      try {
        createTodos(data)
        setTitle('');
        setContent('')
      } catch (error) {
        console.error('Error:', error)
      }
    } else if (category === 'edit'){
      updateTodo(parseInt(editId), data)
    }
    router.push('/todo');
  })

  return (
    <>
      <div className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label >タイトル</label>
          <input
            className={styles.input}
            {...register('title', {
              required: true,
              maxLength: {
                value: 40,
                message: "40文字以下で入力してください",
              }
            })}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title?.type === 'maxLength' && <p>{errors.title.message}</p>}
          <label>内容</label>
          <textarea
            className={styles.textarea}
            {...register("content", {
              required: false,
            })}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.btn}>
            {/* どこから来たかをpropsに入れておく */}
            {category === 'create' ? <button type="submit" className={styles.submit}>{btnTexts.create}</button> :
             category === 'edit' ? <button type="submit" className={styles.submit}>{btnTexts.save}</button> :
             null
            }
            <BackToListBtn/>
          </div>
        </form>
      </div>
    </>
  )
}

export default InputForm