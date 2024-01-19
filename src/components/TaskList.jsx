import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div className='taskcard'>
      <h2 className='text'>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task above.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
