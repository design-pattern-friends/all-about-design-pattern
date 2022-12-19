import React, { useEffect, useRef } from 'react';
import useTodoState from '@hooks/useTodoState';



const TodoList = () => {
  const [{ todos }, todoDispatch] = useTodoState();

  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = ref.current as HTMLInputElement;

    todoDispatch({ type: 'ADD_TODO', payload: input.value });
    input.value = '';
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div style={{ width: '100vh', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <form onSubmit={onSubmit}>
        <input ref={ref} />
        <button type='submit' />
      </form>
      <div style={{ width: "60%", height: '60%', background: 'blue', overflow: 'scroll' }}>
        {todos.map((todo: string, i: number) => (
          <div style={{ height: '3rem', fontSize: 'large', justifySelf: 'center', alignSelf: 'center', margin: '.5rem', backgroundColor: 'red', verticalAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex' }} key={i}>{todo}</div>
        ))}
      </div>
    </div>
  )
}

export default TodoList;