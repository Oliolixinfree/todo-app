import { Container, Box } from '@mui/material';
import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: 'third todo',
      status: false,
    },
  ])

  return (
    <Container maxWidth="lg">
      <Box sx={{ borderRadius: 4, backgroundColor: '#fff',}}>
        <Header />
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </Box>
    </Container>
  );
}

export default App;
