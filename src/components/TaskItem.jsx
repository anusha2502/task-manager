import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
            className='input'
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
            className='input'
          />
          <input
            type="date"
            value={editedTask.dueDate}
            onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
            className='input'
          />
          <button className='text-white w-full mt-2 border-1px p-2 border-[#3d4f7c] rounded-full cursor-pointer' onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div className='tasklist'>
            <span>Task : </span>
            <span>{task.title}</span>
            <div>Description : {task.description}</div>
            <div className='duedate'>Due Date : {task.dueDate}</div>
          </div>
          <button className='text-white w-full mt-2 border-1px p-2 border-[#3d4f7c] rounded-full cursor-pointer' onClick={handleEdit}>Edit</button>
          <button className='text-white w-full mt-2 border-1px p-2 border-[#3d4f7c] rounded-full cursor-pointer' onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
