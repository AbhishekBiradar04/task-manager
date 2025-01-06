import React, { useState } from 'react';
import { addTask } from '../api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    const newTask = { title, completed: false };
    const createdTask = await addTask(newTask);
    onTaskAdded(createdTask);
    setTitle('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 mb-4 p-4 bg-white rounded shadow-md"
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
