/** Style */
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Header title="To Do App" />
      <TodoList />
    </div>
  );
}

export default App;
