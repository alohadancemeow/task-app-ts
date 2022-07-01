import React, { FC, FormEvent, useState } from 'react'
import './App.css'

import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'

type Props = {}

const App: FC = (props: Props) => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todos);


  const handleAdd = (e: FormEvent) => {
    e.preventDefault()

    const newTodo = { id: Date.now(), todo, isDone: false }
    todo && setTodos([...todos, newTodo])
    setTodo('')
  }

  return (
    <div className='App'>
      <span className="heading">Task-app-ts</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App