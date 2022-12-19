import { Action } from "@type/types";

function createStore<S>(reducer: (state: S, action: Action) => S, initialState: S) {
  let state = initialState;

  const listeners: Array<() => void> = [];

  const subscribe = (listener: () => void) => listeners.push(listener);

  const getState = () => state;

  const dispatch = (action: Action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());

  };


  return { getState, dispatch, subscribe };
}


const todoReducer = (state: { todos: any[] }, action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

const initialState = {
  todos: []
};


const store = createStore(todoReducer, initialState);

export default store;

