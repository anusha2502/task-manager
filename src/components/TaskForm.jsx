import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
    };

    addTask(newTask);

    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='text'>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='input' required />

      <label className='text'>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='input' required />

      <label className='text'>Due Date:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className='input' required />

      <button className='text-white w-full mt-2 border-1px p-2 border-[#3d4f7c] rounded-full cursor-pointer' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;