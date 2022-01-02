import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

function App() {
  const lists = useSelector((state) => state.lists);

  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({ type: 'DONE_LIST', payload: name });
  };
  const deleteList = (name) => {
    dispatch({ type: 'DELETE_LIST', payload: name });
  };

  const [name, setInput] = useState('');
  const [complete, setComplete] = useState(false);

  const inputText = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    if (name === '') return;

    setComplete(false);
    dispatch({
      type: 'ADD_LIST',
      payload: {
        name,
        complete,
      },
    });
    setInput('');
  };
  return (
    <div className="App">
      <h1>Redux Todo リスト作成</h1>
      <input
        type="text"
        value={name}
        onChange={inputText}
        placeholder="add your todo"
      ></input>
      <button onClick={addList}>add</button>
      <h2>Incomplete Todo List</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <li key={index}>
              {list.name}
              <button onClick={() => doneList(list.name)}>Complete</button>
              <button onClick={() => deleteList(list.name)}>Delete</button>
            </li>
          ))}
      </ul>
      <h2>Complete Todo List</h2>
      <ul>
        {lists
          .filter((list) => list.complete === true)
          .map((list, index) => (
            <li key={index}>{list.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
