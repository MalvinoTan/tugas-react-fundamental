import './TodoList.css';
import { TodoItems } from '../TodoItems/TodoItems';

const TodoList = () => {
    return (
        <ul className="todo-list">
            {TodoItems}
        </ul>
    );
}

export default TodoList;