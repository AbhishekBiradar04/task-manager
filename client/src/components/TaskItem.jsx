import React, { useState } from 'react';
import { updateTask, deleteTask } from '../api';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleUpdate = async () => {
    const updatedTask = { title: updatedTitle, completed: isCompleted };
    const result = await updateTask(task._id, updatedTask);
    onTaskUpdated(result);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteTask(task._id);
    onTaskDeleted(task._id);
  };

  return (
    <li className="flex justify-between items-center mb-4 p-4 bg-white rounded shadow-md">
      {isEditing ? (
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
            className="p-2"
          />
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <span className={`${task.completed ? 'line-through' : ''}`}>
            {task.title}
          </span>
          <span>{task.completed ? '✔️' : '❌'}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
