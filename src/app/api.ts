export const deleteTodo = async (id:number) => {
  try {
    const response = await fetch(`/api/todo/${id}`, {
      method: 'DELETE'
    })
    return response;
  } catch(error) {
    console.error('Error:', error)
    throw error
  }
}