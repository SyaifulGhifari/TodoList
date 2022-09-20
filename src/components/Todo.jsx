import { useState } from 'react';
import Button from './Button';

export default function Todo({ todo, del, edit }) {
  const [edited, setEdited] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
    setEdited(todo.task);
  };

  const handleChangeEdit = (e) => {
    setEdited(e.target.value);
  };

  const handleSaveEdit = () => {
    edit(todo.id, edited);
    setIsEdit(false);
  };

  return (
    <div className='mt-4'>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-2/4 py-5 px-5 rounded-lg mx-auto flex justify-between'>
        {isEdit ? (
          <input
            className='outline-none px-2 bg-slate-100/75'
            value={edited}
            onChange={handleChangeEdit}
          />
        ) : (
          <div className='text-white'>{todo.task}</div>
        )}
        <div className='flex'>
          {isEdit ? (
            <Button types='Save' action={handleSaveEdit} />
          ) : (
            <>
              <Button types='Edit' action={handleEdit} />
              <Button types={'Delete'} action={() => del(todo.id)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
