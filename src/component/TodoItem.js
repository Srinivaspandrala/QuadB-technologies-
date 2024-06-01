import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="container mb-3">
      <li className="todo-item list-group-item d-flex justify-content-between align-items-center">
        <span
          onClick={onToggle}
          className={`flex-grow-1 fw-bold text-monospace ${todo.completed ? 'completed' : ''}`}
        >
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onBlur={handleEdit}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleEdit();
                }
              }}
            />
          ) : (
            todo.text
          )}
        </span>
        <div className="actions">
          <button
            className={`btn ${isEditing ? 'btn-success' : 'btn-secondary'} text-white me-2`}
            onClick={handleEdit}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button className="btn btn-danger text-white" onClick={onDelete}>Delete</button>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
