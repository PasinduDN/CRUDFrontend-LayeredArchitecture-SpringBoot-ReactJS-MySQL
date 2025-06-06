import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const [count, setCount] = useState(0)
  const {handleSubmit, register} = useForm()

  return (
    <>
      <Container fixed>
        <Box sx={{ width: '100%', textAlign: 'center', mt: 5 }}>
          <Typography variant="h4" gutterBottom fontWeight='400' letterSpacing='2' color="####">
            Student Information
          </Typography>
        </Box>

        <hr />

        <Box sx={{ width: '100%', mt: '50px' }}>
          <Grid container rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="fName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  {...register("fName")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="lName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  {...register("lName")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  fullWidth
                  {...register("address")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  {...register("city")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="country"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  {...register("country")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="province"
                  label="Province"
                  variant="outlined"
                  fullWidth
                  {...register("province")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="zipCode"
                  label="ZIP Code"
                  variant="outlined"
                  fullWidth
                  {...register("zipCode")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                  sx={{
                    '& .MuiInputBase-input': { color: 'white' }, 
                    '& .MuiInputLabel-root': { color: 'white' }, 
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' }, 
                      '&:hover fieldset': { borderColor: 'white' }, 
                      '&.Mui-focused fieldset': { borderColor: 'white' }, 
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default App
