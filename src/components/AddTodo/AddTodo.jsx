import React, { useState } from 'react'
import { Container, Button, TextField  } from '@mui/material';
import { Box } from '@mui/system';

const AddTodo = ({todo, setTodo}) => {

  const [value, setValue] = useState('')
  console.log(value)

  const addTodo = () => {
    setTodo(
      [...todo, {
        id: Date.now(),
        title: value,
        status: true,
      }]
    )
    setValue('')
  }

  return (
    <Container maxWidth="md" >
      <Box 
        sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', marginBottom: '40px'}}
        component="div"
      >
        <TextField
          sx={{boxSizing: 'border-box'}}
          label="Enter todo" 
          variant="standard" 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          size="small"
          variant="contained" 
          onClick={addTodo}
        >
        Add todo
        </Button>
      </Box>
    </Container>
  )
}

export default AddTodo