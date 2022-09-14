import React from 'react';
import Logo from '../components/Logo';
import Todo from '../components/Todo';

export default function Home() {
  return (
    <div>
      <div className='container mx-auto mt-20'>
        <Logo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}
