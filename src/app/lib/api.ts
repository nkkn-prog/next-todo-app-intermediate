// app/lib/api.ts
type FormValues = {
  id: number,
  title: string;
  content: string;
  status: string;
}

export const todoApi = {
  getAllTodos: async () => {
    try {
      // fetch()メソッドのデフォルトのHTTPメソッドがGETのため、app/api/todo/route.jsのGETメソッドが実行される。
      const response = await fetch('http://localhost:3000/api/todo/', {
        cache:"no-store",
      });

      if(!response){
        throw new Error(`HTTP error! status`);
      }

      const todos = response.json()
      return todos

    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  },
  getEditTodo: async (id: number) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_TODO_API_HOSTNAME ? `${process.env.NEXT_PUBLIC_TODO_API_HOSTNAME}/api/todo/${id}` : '',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      return await response.json()
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  },
  create: async (data: FormValues) => {
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
  },
  update: async (id:number, data: FormValues) => {

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_TODO_API_HOSTNAME ? `${process.env.NEXT_PUBLIC_TODO_API_HOSTNAME}/api/todo/${id}` : '', {
        method: 'PUT',
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
  },
}