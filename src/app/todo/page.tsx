'use client'
import React, {useState, useEffect} from 'react'
import styles from '../styles/list.module.css'
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

const TodoList = () => {

  const [todosNotStarted, setTodosNotStarted] = useState<todoValue[]>([]);
  const [todosInProgress, setTodosInProgress] = useState<todoValue[]>([]);
  const [todosCompleted, setTodosCompleted] = useState<todoValue[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todo');
        const data = await response.json();

        if (data.todos) {
          const notStarted: todoValue[] = [];
          const inProgress: todoValue[] = [];
          const completed: todoValue[] = [];

          data.todos.forEach((todo: todoValue) => {
            switch (todo.status) {
              case statusMap.notStarted:
                notStarted.push(todo);
                break;
              case statusMap.inProgress:
                inProgress.push(todo);
                break;
              case statusMap.completed:
                completed.push(todo);
                break;
            }
          });

          setTodosNotStarted(notStarted);
          setTodosInProgress(inProgress);
          setTodosCompleted(completed);
        }

      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    }
    fetchTodos()
  }, []);

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