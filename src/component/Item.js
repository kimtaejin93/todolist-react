import React, { useEffect } from 'react';

const Item = ({ todo, onUpdate, onDelete }) => {
  useEffect(() => {}, [todo.done]);
  return (
    <div className='item'>
      <div className='check-circle' onClick={() => onUpdate(todo.id)}>
        {todo.done && <div className='check'>✔</div>}
      </div>
      <div className={todo.done ? 'done-task' : ''}> {todo.task}</div>
      <div className='delete-button' onClick={() => onDelete(todo.id)}>
        🗑
      </div>
    </div>
  );
};

export default Item;
