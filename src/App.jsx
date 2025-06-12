import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css'
import { useForm } from 'react-hook-form';
import Form from './components/Form';
import StudentDetails from './components/StudentDetails';

function App() {
  const [count, setCount] = useState(0)
  const { handleSubmit, register, formState: { errors } } = useForm()

  const submit = (data) => {
    console.log(data);

  }

  return (
    <div>
      <Container fixed>
        <Form></Form>
        <hr />
        <StudentDetails></StudentDetails>
      </Container>
    </div>
  )
}

export default App
