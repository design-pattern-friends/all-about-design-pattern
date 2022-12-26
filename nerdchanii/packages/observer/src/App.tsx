import store from '@lib/todoStore';
import Provider from '@context/Provider';
import TodoList from '@components/todolist';
import './App.css';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  )
}

export default App
