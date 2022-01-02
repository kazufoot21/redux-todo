import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const lists = useSelector((state) => state.lists);

  const dispatch = useDispatch();
  const doneList = (name) => {
    dispatch({ type: 'DONE_LIST', payload: name });
  };
  const deleteList = (name) => {
    dispatch({ type: 'DELETE_LIST', payload: name });
  };
  return (
    <div className="App">
      <h1>Redux Todo リスト作成</h1>
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
