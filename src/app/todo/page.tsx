'use client'
import React from 'react'
import styles from '../styles/list.module.css'
import { todoApi } from '../lib/api'
import Cards from '../components/Cards'
import { useRouter } from 'next/navigation'

const listTitle = 'TodoList'

type todoValue = {
  id: number,
  title:string,
  content:string,
  status:string,
}

const statusMap = {
  notStarted:'notStarted',
  inProgress:'inProgress',
  completed: 'completed'
}

const { todos } = await todoApi.getAllTodos();

const todosNotStarted: todoValue[] = [];
const todosInProgress: todoValue[] = [];
const todosCompleted: todoValue[] = [];

todos.forEach((todo: todoValue) => {
  switch (todo.status) {
    case statusMap.notStarted:
      todosNotStarted.push(todo);
      break;
    case statusMap.inProgress:
      todosInProgress.push(todo);
      break;
    case statusMap.completed:
      todosCompleted.push(todo);
      break;
  }
});

const TodoList = () => {

  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{listTitle}</h1>
          <button className={styles.btn} onClick={() => router.push('/todo/create')}>Todoを作成</button>
        </div>
        <div className={styles.main}>
          <Cards todos={todosNotStarted}/>
          <Cards todos={todosInProgress}/>
          <Cards todos={todosCompleted}/>
        </div>
      </div>
    </>
  )
}

export default TodoList