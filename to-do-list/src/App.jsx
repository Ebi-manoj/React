import { useState } from 'react';
import { Task } from './task';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState('');

  function handleAddBtn() {
    if (inputValue.length < 3) return setError('Enter a Valid Task');
    const task = {
      id: taskList.length + 1,
      task: inputValue,
      completed: false,
    };
    setTaskList([...taskList, task]);
    setInputValue('');
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    if (inputValue.length > 3) setError('');
  }

  function toggle(id) {
    const filtered = taskList.find(task => task.id == id);
    filtered.completed = !filtered.completed;
    setTaskList([...taskList]);
    console.log(taskList);
  }

  function deleteTask(id) {
    const filtered = taskList.filter(task => task.id != id);
    setTaskList([...filtered]);
  }

  function editTask(id, content) {
    const find = taskList.find(task => task.id == id);
    find.task = content;
    setTaskList([...taskList]);
  }

  return (
    <div className="w-screen h-screen  bg-[#d6542c]  flex justify-center items-center flex-col">
      <div
        id="to-do"
        className="w-6/12 h-[70vh] flex flex-col  bg-white relative pb-5"
      >
        <h1 className="font-serif text-4xl text-[#124c81] font-bold text-center mt-2">
          TO-DO LIST📝
        </h1>
        <div className="flex w-1/2 mx-auto mt-7 mb-5">
          <input
            value={inputValue}
            onChange={e => handleInputChange(e)}
            type="text"
            placeholder="What needs to be done?"
            className={`rounded-full w-full px-4 border-2 h-10 outline-none  focus:outline-none" ${
              error ? 'border-red-500' : 'border-[#124c81]'
            }`}
          />
          <button
            onClick={() => handleAddBtn()}
            className="ml-[-40px] w-24 rounded-full h-10 flex justify-center items-center text-white text-2xl bg-[#124c81]"
          >
            +
          </button>
        </div>
        <ul id="tasks" className="w-full px-5 mt-10 relative overflow-y-auto">
          {taskList.map(task => (
            <Task
              key={task.id}
              data={task}
              toggle={toggle}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </ul>
      </div>
      <p className="absolute left-[50%] bottom-4 transform -translate-x-1/2 text-white">
        Crafted with💝 Ebi Manoj
      </p>
    </div>
  );
}

export default App;
