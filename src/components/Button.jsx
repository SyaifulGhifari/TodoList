import React from 'react';

export default function Button({ types }) {
  const variant = {
    Edit: 'bg-teal-600 text-teal-50 hover:bg-teal-500 active:bg-teal-400',
    Delete: 'bg-rose-600 text-rose-50 hover:bg-rose-500 active:bg-rose-400',
  };

  const type = variant[types];
  return (
    <div>
      <button className={`py-1 px-4 mx-2 rounded-2xl cursor-pointer ${type}`}>
        {types}
      </button>
    </div>
  );
}
