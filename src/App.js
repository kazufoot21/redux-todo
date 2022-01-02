import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const lists = useSelector((state) => state.lists);
  return (
    <div className="App">
      <h1>Redux Todo リスト作成</h1>
      <h2>Incomplete Todo List</h2>
      <ul>
        {lists
          .filter((list) => list.complete === false)
          .map((list, index) => (
            <li key={index}>{list.name}</li>
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
