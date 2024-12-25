import React, { useState } from "react";

function TaskItem({ task, deleteTask, toggleTaskCompletion, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleSave = () => {
    if (updatedText.trim()) {
      updateTask(task.id, updatedText.trim());
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-item-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {isEditing ? (
          <input
            className="editing"
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            onBlur={handleSave}
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      <div className="task-item-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
