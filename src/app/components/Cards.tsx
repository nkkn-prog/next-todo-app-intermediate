import { useRouter } from 'next/navigation'
import React from 'react'

type todoValue = {
  id: number,
  title:string,
  content:string,
  status:string,
}

type TodoProps = {
  todos: todoValue[]
}

const Cards = (props:TodoProps) => {

  const router = useRouter();
  const { todos } = props

  const statusMap = {
    notStarted:'未着手',
    inProgress:'進行中',
    completed: '完了'
  }

  const cardStyle = {
    display: 'flex',
    marginBottom:'2rem',
    alignItems:'center',
    border: 'solid 1px #000',
    height: '60px',
    borderRadius: '10px',
  }

  const titleStyle = {
    width: '75%',
    padding: '0.5rem',
    whiteSpace: 'nowrap'

  }

  return (
    <div>
      {todos.map((todo:todoValue) => (
        <div key={todo.id} style={cardStyle}>
          <div
            style={{
              width: '15%',
              height:'100%',
              fontSize:'16px',
              borderRadius: '10px 0 0 10px',
              backgroundColor: 
                todo.status === 'notStarted' ? 'gray' : 
                todo.status === 'inProgress' ? '#0D3668' : 
                todo.status === 'completed' ? 'green' : 
                '#fff',
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {
              todo.status === 'notStarted' ? statusMap.notStarted :
              todo.status === 'inProgress' ? statusMap.inProgress :
              todo.status === 'completed' ? statusMap.completed :
              ''
            }
          </div>
          <div style={titleStyle}>{todo.title}</div>
          <div style={{width: '20%', display: 'flex'}}>
            <button style={{marginRight:'0.5rem'}} onClick={() => router.push(`/todo/edit/${todo.id}`)}>編集</button>
            <button>削除</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards