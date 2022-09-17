import React from 'react';

export default function Button({ types, action }) {
  const variant = {
    Edit: 'bg-teal-600 text-teal-50 hover:bg-teal-500 active:bg-teal-400',
    Delete: 'bg-rose-600 text-rose-50 hover:bg-rose-500 active:bg-rose-400',
    Add: 'bg-blue-600 text-blue-50 hover:bg-blue-500 active:bg-blue-400',
  };

  const type = variant[types];
  return (
    <div>
      <button
        className={`py-1 px-4 mx-2 rounded-2xl cursor-pointer ${type}`}
        onClick={action}
      >
        {types}
      </button>
    </div>
  );
}
