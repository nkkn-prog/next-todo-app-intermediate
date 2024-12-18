import React from 'react'
import styles from '../styles/list.module.css'

const listTitle = 'TodoList'

const TodoList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{listTitle}</h1>
        </div>
        <div className={styles.main}>
          <div>あ</div>
          <div>あ</div>
          <div>あ</div>
        </div>
      </div>
    </>
  )
}

export default TodoList