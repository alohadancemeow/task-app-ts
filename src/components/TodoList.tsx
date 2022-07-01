import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {todos.map(item => (
                <SingleTodo
                    key={item.id}
                    todo={item}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoList