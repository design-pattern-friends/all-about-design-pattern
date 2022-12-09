import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/context'


const useTodoState = () => {
  const context = useContext(TodoContext);
  const [todo, setTodo] = useState(context.getState());
  const { getState, dispatch, subscribe } = context;

  useEffect(() => {
    subscribe(() => {
      setTodo(context.getState());
    });
  }, [todo])

  return [getState(), dispatch];
}

export default useTodoState