import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header title="To Do App" />
      <TodoList />
    </div>
  );
}

export default App;
