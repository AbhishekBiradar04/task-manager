import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center text-blue-600 mb-6">Task Manager</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
