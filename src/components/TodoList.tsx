import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'
import { Droppable } from 'react-beautiful-dnd';

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setcompletedTodos }) => {
    return (
        <div className='container'>
            <Droppable droppableId='active'>
                {(provided, snapshot) => (
                    <div
                        className="todos"
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Task</span>
                        {todos.map(item => (
                            <SingleTodo
                                key={item.id}
                                todo={item}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId='completed'>
                {(provided, snapshot) => (
                    <div
                        className="todos"
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Task</span>
                        {todos.map(item => (
                            <SingleTodo
                                key={item.id}
                                todo={item}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                    </div>
                )}
            </Droppable>
        </div >
    )
}

export default TodoList