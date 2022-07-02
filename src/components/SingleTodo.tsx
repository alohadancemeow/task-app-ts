import React, { FormEvent, useState, useRef, useEffect, FC, ChangeEvent } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    index: number,
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: FC<Props> = ({ index, todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null)

    // Complete todo
    const handleDone = (id: number) => {
        const updatedItem = todos.map(item => item.id === id
            ? { ...item, isDone: !item.isDone }
            : item
        )
        setTodos(updatedItem)
    }

    // Delete todo
    const handleDelete = (id: number) => {
        const updatedItem = todos.filter(item => item.id !== id)
        setTodos(updatedItem)
    }

    // Edit todo
    const handleEdit = (e: FormEvent, id: number) => {
        e.preventDefault()

        const updatedItem = todos.map(item => item.id === id
            ? { ...item, todo: editTodo }
            : item
        )
        setTodos(updatedItem)
        setEdit(false)
    }

    // Updata todo
    const updateTodo = (e: ChangeEvent<HTMLInputElement>) => setEditTodo(e.target.value)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
                    onSubmit={(e) => handleEdit(e, todo.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {
                        edit
                            ? <input
                                ref={inputRef}
                                type="text"
                                value={editTodo}
                                className='todos__single--text'
                                onChange={updateTodo}
                            />
                            : todo.isDone
                                ? <s className='todos__single--text'>{todo.todo}</s>
                                : <span className="todos__single--text">{todo.todo}</span>
                    }

                    <div>
                        <span
                            className="icon"
                            onClick={() => !todo.isDone && setEdit(!edit)}
                        >
                            <AiFillEdit />
                        </span>
                        <span className="icon" onClick={() => handleDelete(todo.id)}>
                            <AiFillDelete />
                        </span>
                        <span className="icon" onClick={() => !edit && handleDone(todo.id)}>
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    )
}

export default SingleTodo