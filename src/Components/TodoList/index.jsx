/** Style */
import styles from './style.module.css';
import { TodoItems } from '../TodoItems/index';

const TodoList = () => {
    return (
        <ul className={styles.todo_list}>
            {TodoItems}
        </ul>
    );
}

export default TodoList;