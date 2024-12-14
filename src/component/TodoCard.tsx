// src/components/TodoCard.tsx
import React, { useState } from 'react';

interface TodoCardProps {
  task: string;
  onDelete: () => void;
  onEdit: (oldTask: string, newTask: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newTask.trim() !== '') {
      onEdit(task, newTask); // Trigger onEdit with old and new tasks
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Edit your task"
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <p>{task}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoCard;
