import React from 'react';
import Button from './Button';

export default function Todo({ todo, del }) {
  return (
    <div className='mt-4'>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-2/4 py-5 px-5 rounded-lg mx-auto flex justify-between'>
        <div className='text-white'>{todo.task}</div>
        <div className='flex'>
          <Button types={'Edit'} />
          <Button types={'Delete'} action={() => del(todo.id)} />
        </div>
      </div>
    </div>
  );
}
