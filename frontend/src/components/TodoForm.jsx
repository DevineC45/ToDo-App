import { useState } from 'react';
import './todolist.css'

export default function TodoForm({ onTodoAdded }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      title,
      completed: false,
    };

    try {
      const response = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        const savedTodo = await response.json();
        onTodoAdded(savedTodo); // callback to update list
        setTitle(''); // clear the input
      } else {
        console.error('Failed to add todo');
      }
    } catch (err) {
      console.error('Error submitting todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter to-do"
      />
      <button type="submit">Add</button>
    </form>
  );
}