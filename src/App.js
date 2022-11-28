import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Item from './component/Item';
import React, { useEffect, useState } from 'react';
import Add_area from './component/Add_area';
function App() {
  const [task, setTask] = useState([]);
  const [doneTask, setDonetask] = useState([]);
  const filteredTask = () => {
    setDonetask(task.filter((item) => item.done === false));
  };
  useEffect(() => {
    filteredTask();
  }, [task]);
  const handleAdd = (todo) => {
    return setTask([...task, todo]);
  };
  const handleUpdate = (updated) =>
    setTask(
      task.map((item) =>
        item.id === updated ? { ...item, done: !item.done } : item
      )
    );
  const handleDelete = (deleted) =>
    setTask(task.filter((item) => item.id !== deleted));

  return (
    <div className='main'>
      <Header todoNum={doneTask.length} />
      <div className='list'>
        {task.map((item) => {
          return (
            <Item
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </div>

      <Add_area onAdd={handleAdd} />
    </div>
  );
}

export default App;
