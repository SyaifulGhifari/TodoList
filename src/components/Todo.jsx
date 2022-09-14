import React from 'react';
import Button from './Button';

export default function Todo() {
  return (
    <div className='mt-4'>
      <div className='bg-red-400 w-2/4 py-5 px-5 rounded-lg mx-auto flex justify-between'>
        <div className='text-white'>Todonya</div>
        <div className='flex'>
          <Button types={'Edit'} />
          <Button types={'Delete'} />
        </div>
      </div>
    </div>
  );
}
