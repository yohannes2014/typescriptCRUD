// src/components/TodoApp.tsx
import React, { useState } from 'react';
import TodoCard from './TodoCard';

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const handleEditTask = (oldTask: string, newTask: string) => {
    setTasks(tasks.map((task) => (task === oldTask ? newTask : task)));
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        {tasks.map((task, index) => (
          <TodoCard
            key={index}
            task={task}
            onDelete={() => handleDeleteTask(task)}
            onEdit={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
