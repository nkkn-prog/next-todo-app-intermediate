'use client'
import React, {useState, useEffect} from 'react'
import styles from '../styles/inputForm.module.css'
import { useForm } from "react-hook-form"
import BackToListBtn from '@/app/components/BackToListBtn'
import { todoApi } from '../lib/api'

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

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState('');

  useEffect(() => {
    if (category === 'edit' && targetTodo !== null) {
      setTitle(targetTodo.todos.title);
      setContent(targetTodo.todos.content);
      setEditId(targetTodo.todos.id)
    }
  }, [category, targetTodo]);


  const onSubmit = ((data: FormValues) => {
    if(category === 'create'){
      try {
        todoApi.create(data)
        setTitle('');
        setContent('')

      } catch (error) {
        console.error('Error:', error)
      }
    } else if (category === 'edit'){
      todoApi.update(parseInt(editId), data)
    }
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