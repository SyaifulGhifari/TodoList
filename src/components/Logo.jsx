import React from 'react';
import { RiTodoLine } from 'react-icons/ri';

export default function Logo() {
  return (
    <div>
      <RiTodoLine className='text-7xl mx-auto' />
      <div className='text-black font-semibold text-center'>Todo App</div>
    </div>
  );
}
