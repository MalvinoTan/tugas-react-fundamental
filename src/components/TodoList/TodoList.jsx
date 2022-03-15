/** Style */
import styles from './TodoList.module.css';
import { TodoItems } from '../TodoItems/TodoItems';

const TodoList = () => {
    return (
        <ul className={styles.todo_list}>
            {TodoItems}
        </ul>
    );
}

export default TodoList;