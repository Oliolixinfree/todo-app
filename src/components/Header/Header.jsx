import React from 'react'
import {Box, Container} from '@mui/material'

const Header = () => {
  return (
    <Container maxWidth="md">
        <Box sx={{display: 'flex', justifyContent: 'center', padding: '20px 0', fontSize: '48px'}} 
          component="div"
        >
          Todo List
        </Box>
      </Container>
  )
}

export default Header