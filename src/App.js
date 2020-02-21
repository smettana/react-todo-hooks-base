import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
// import AddTodo from './Todo/AddTodo';
import Loader from './Todo/Loader/Loader';
import Modal from './Modal/Modal';

const AddTodo = React.lazy(()=> new Promise(resolve => {
    setTimeout(()=>{
      resolve( import('./Todo/AddTodo'));
    },3000);
  })
)


function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(()=>{
        setTodos(todos)
        setLoading(false)
      },2000)
      
    })
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }

        return todo
    }));

  }

  const removeTodo = (id) =>{
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  }

  const addTodo = (value) => {
    setTodos(
      todos.concat([{id: +Date.now(), completed: false, title: value}])
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='wrapper'>
          <h1>React tutorial</h1>

          <Modal/>

          <React.Suspense fallback={<p>Loading</p>}>
            <AddTodo onCreate={addTodo}/>
          </React.Suspense>

          {loading && <Loader/>}
          {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : loading ? null : <p>No todos</p>} 
          
      </div>
    </Context.Provider>
  );
}

export default App;
