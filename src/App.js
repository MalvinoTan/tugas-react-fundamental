/** Style */
import './App.css';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header title="To Do App" />
      <TodoList />
    </div>
  );
}

export default App;
