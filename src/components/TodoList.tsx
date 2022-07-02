import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'
import { Droppable } from 'react-beautiful-dnd';

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (
        <div className='container'>
            <Droppable droppableId='todosList'>
                {(provided, snapshot) => (
                    <div
                        className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                        ref={provided.innerRef}
                        // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Task</span>
                        {todos.map((item, index) => (
                            <SingleTodo
                                index={index}
                                key={item.id}
                                todo={item}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId='todosRemove'>
                {(provided, snapshot) => (
                    <div
                        className={`todos  ${snapshot.isDraggingOver ? "dragcomplete" : "remove"}`}
                        ref={provided.innerRef}
                        // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Completed Task</span>
                        {completedTodos.map((item, index) => (
                            <SingleTodo
                                index={index}
                                key={item.id}
                                todo={item}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div >
    )
}

export default TodoList