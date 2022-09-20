import React, { useState } from 'react';
import Logo from '../components/Logo';
import Todo from '../components/Todo';
import Form from '../components/Form';

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'sholat subuh' },
    { id: 2, task: 'tidur' },
    { id: 3, task: 'sarapan pagi' },
  ]);

  const deleteTask = (id) => {
    const tmp = todos.filter((item) => item.id !== id);
    setTodos(tmp);
  };

  const addtask = (data) => {
    const id = todos.length;
    const newtask = {
      id: id + 1,
      task: data,
    };
    setTodos((current) => [...current, newtask]);
  };

  const editTask = (id, task) => {
    const tmp = todos.map((v) => {
      if (v.id === id) {
        return { ...v, task: task };
      }
      return v;
    });
    setTodos(tmp);
  };

  return (
    <div>
      <div className='container mx-auto mt-20'>
        <Logo />
        {todos.map((item) => {
          return (
            <Todo key={item.id} todo={item} del={deleteTask} edit={editTask} />
          );
        })}
        <Form add={addtask} />
      </div>
    </div>
  );
}
