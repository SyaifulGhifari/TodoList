import React from 'react';
import Button from './Button';

export default function Form() {
  return (
    <div className='mt-4'>
      <form className='flex justify-between border-2 py-5 px-5 w-2/4 mx-auto bg-gradient-to-r from-pink-600 to-purple-500'>
        <input
          type='text'
          placeholder='add task'
          className=' w-2/4 px-2 focus:outline-none focus:ring-4 focus:ring-purple-500'
        />
        <Button types={'Add'} />
      </form>
    </div>
  );
}
