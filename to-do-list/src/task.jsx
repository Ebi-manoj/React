import { useEffect, useRef, useState } from 'react';

export const Task = ({ data, toggle, deleteTask, editTask }) => {
  const [isEdit, setisEdit] = useState(false);
  const [content, setContent] = useState('');

  const inputRef = useRef(null);

  function handleEdit(id, task) {
    if (!isEdit) {
      setisEdit(true);
      setContent(task);
    } else {
      if (content.length < 3) return;
      editTask(id, content);
      setisEdit(false);
    }
  }

  useEffect(() => {
    if (isEdit) inputRef.current.focus();
  }, [isEdit]);
  return (
    <li className="flex justify-between w-[80%] mx-auto border border-black px-2 py-1 mb-5 rounded-lg">
      <div className="flex gap-3">
        <input
          type="checkbox"
          className="accent-[#124c81]  cursor-pointer"
          checked={data.completed}
          onChange={() => toggle(data.id)}
        />
        {isEdit && (
          <input
            type="text"
            className="border-0 outline-0"
            onChange={e => setContent(e.target.value)}
            value={content}
            ref={inputRef}
          />
        )}
        {!isEdit && (
          <p className={data.completed ? 'line-through' : ''}>{data.task}</p>
        )}
      </div>
      <div id="buttons" className="flex gap-5">
        <button
          className="cursor-pointer font-bold"
          onClick={() => handleEdit(data.id, data.task)}
        >
          {isEdit ? '✅' : '✏️'}
        </button>
        <button
          className="cursor-pointer text-red-600 font-bold"
          onClick={() => deleteTask(data.id)}
        >
          X
        </button>
      </div>
    </li>
  );
};
