import React, { useState } from 'react'
import {IoLockOpenOutline, IoLockClosedOutline, IoCheckmarkSharp, IoPencilSharp, IoCloseSharp} from 'react-icons/io5'
import { Container, Box, TextField, Button, Stack} from '@mui/material'


const TodoList = ({todo, setTodo}) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')

  const deleteTodo = (id) => {
    const newTodo = [...todo].filter(i => i.id !== id)
    setTodo(newTodo)
  }

  const statustodo = (id) => {
    const newtodo = [...todo].filter(i => {
      if(i.id === id) {
        i.status = !i.status
      }
      
      return i
    })
    setTodo(newtodo)
  }

  const editTodo = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  const saveTodo = (id) => {
    const newTodo = [...todo].map(i => {
      if(i.id === id) {
        i.title = value
      }

      return i
    })

    setTodo(newTodo)
    setEdit(null)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{display: 'flex', flexDirection: 'column'}} component="div">
      {
        todo.map(t => (
          <Box
            component="div"  
            key={t.id}
            sx={{display: 'flex', alignItems: 'center' , justifyContent: 'space-between', marginBottom: '20px'}}
          >
            {
              edit === t.id
                ? <Box component="div">
                    <TextField
                      sx={{fontSize: '18px', boxSizing: 'border-box'}}
                      variant="standard"  
                      type="text"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    />
                  </Box>
                : <Box sx={!t.status 
                  ? {textDecoration: 'line-through', color: 'rgb(179, 181, 195)'}
                  : {textDecoration: 'none'}} component="div">
                    {t.title}
                  </Box>
            }

            {
              edit === t.id
                ? <Button 
                    onClick={() => saveTodo(t.id)}
                    variant="contained"
                    size="small"
                    sx={{fontSize: '18px', height: '40px'}}
                  >
                    <IoCheckmarkSharp />
                  </Button>
                : <Box component="div"> 
                    <Stack spacing={1} direction="row">
                      <Button  
                        onClick={() => deleteTodo(t.id)}
                        variant="contained"
                        size="small"
                        sx={{fontSize: '18px',}}
                      >
                        <IoCloseSharp />
                      </Button>
                      <Button  
                        onClick={() => editTodo(t.id, t.title)}
                        variant="contained"
                        size="small"
                        sx={{fontSize: '18px'}}
                      >
                        <IoPencilSharp />
                      </Button>
                      <Button  
                        onClick={() => statustodo(t.id)}
                        variant="contained"
                        size="small"
                        sx={{fontSize: '18px'}}
                      >
                        {t.status ? 
                          <Box component="span">
                            <IoLockClosedOutline />
                          </Box> : 
                          <Box component="span">
                            <IoLockOpenOutline />
                          </Box>
                        }
                      </Button>
                    
                  </Stack>
                </Box>
            }
          </Box>
        ))
      }
      </Box>
      
    </Container>
  )
}

export default TodoList