import TodoForm from './TodoForm';
import { useEffect, useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching todos:', err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/todos/${id}`, { method: 'DELETE' });
      if (response.ok) setTodos(todos.filter(todo => todo.id !== id));
      else console.error('Failed to delete todo');
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  const handleToggleCompleted = async (id, currentCompleted) => {
    try {
      const response = await fetch(`http://localhost:8080/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !currentCompleted }),
      });
      if (response.ok) {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, completed: !currentCompleted } : todo
        ));
      } else {
        console.error('Failed to update todo');
      }
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  if (loading) return <p>Loading todos...</p>;

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm onTodoAdded={(newTodo) => setTodos([...todos, newTodo])} />
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black' }}>#</th>
              <th style={{ border: '1px solid black' }}>Task</th>
              <th style={{ border: '1px solid black' }}>Completed</th>
              <th style={{ border: '1px solid black' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>{index + 1}</td>
                <td style={{ border: '1px solid black' }}>{todo.title}</td>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(todo.id, todo.completed)}
                  />
                </td>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}