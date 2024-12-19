'use client'
import React from 'react'
import styles from '../styles/inputForm.module.css'
import { useForm } from "react-hook-form"
import BackToListBtn from '@/app/components/BackToListBtn'

type FormValues = {
  title: string;
  content: string;
}

const btnTextCreate = '作成'
const btnTextSave = '保存'

const btnTexts = {
  create: '作成',
  save: '保存',
}

const InputForm = (props) => {
  const { register, handleSubmit, formState: { errors }} = useForm<FormValues>();

  const onSubmit = ((data: FormValues) => console.log(data))

  const { category } = props;

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
            },
            })
          }/>
          {errors.title?.type === 'maxLength' && <p>{errors.title.message}</p>}
          <label>内容</label>
          <textarea
            className={styles.textarea}
            {...register("content", {
              required: false,
            })}
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