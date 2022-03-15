/** Style */
import styles from './TodoItems.module.css';

/** Data Todos */
import { dataTodos } from '../../dataTodos'

const TodoItems = dataTodos.map((todo) => {
    const completed = todo.completed;

    let decoration = "none";

    if (!completed) decoration = "none";
    else decoration = "line-through";

    return (
        <li className={styles.todo_item} key={todo.id.toString()}>
            <span style={{textDecoration: decoration}}>{todo.title}</span>
        </li>
    )
});

export { TodoItems };