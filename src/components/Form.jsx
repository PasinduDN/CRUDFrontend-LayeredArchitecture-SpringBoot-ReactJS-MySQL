import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

export default function Form() {
    const [count, setCount] = useState(0)
    const { handleSubmit, register, formState: { errors } } = useForm()

    const submit = (data) => {
        console.log(data);

    }
    return (
        <>
            <Box sx={{ width: '100%', textAlign: 'center', mt: 5 }}>
                <Typography variant="h4" gutterBottom fontWeight='400' letterSpacing='2' color='rgb(123, 120, 120)'>
                    Student Information
                </Typography>
            </Box>

            <hr />

            <Box sx={{ width: '100%', mt: '20px' }}>
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
                                {...register("fName", { required: 'First Name is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />
                            {errors.fName && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.fName.message}
                                </Typography>
                            )}
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
                                {...register("lName", { required: 'Last Name is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />
                            {errors.lName && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.lName.message}
                                </Typography>
                            )}
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
                                {...register("address", { required: 'Address is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.address && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.address.message}
                                </Typography>
                            )}
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
                                {...register("city", { required: 'City is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.city && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.city.message}
                                </Typography>
                            )}
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
                                {...register("province", { required: 'Province is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.province && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.province.message}
                                </Typography>
                            )}
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
                                {...register("country", { required: 'Country is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.country && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.country.message}
                                </Typography>
                            )}
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
                                {...register("zipCode", { required: 'ZIP Code is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.zipCode && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.zipCode.message}
                                </Typography>
                            )}
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
                                id="contact"
                                label="Contact"
                                type='number'
                                variant="outlined"
                                fullWidth
                                {...register("contact", { required: 'Contact is required', pattern: /^\d{10}$/ })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.contact && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.contact.message}
                                </Typography>
                            )}
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
                                {...register("email", { required: 'Email is required' })}
                            // sx={{
                            //   '& .MuiInputBase-input': { color: 'white' },
                            //   '& .MuiInputLabel-root': { color: 'white' },
                            //   '& .MuiOutlinedInput-root': {
                            //     '& fieldset': { borderColor: 'white' },
                            //     '&:hover fieldset': { borderColor: 'white' },
                            //     '&.Mui-focused fieldset': { borderColor: 'white' },
                            //   },
                            // }}
                            />{errors.email && (
                                <Typography color="error" variant="caption" sx={{ color: 'red' }}>
                                    {errors.email.message}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', textAlign: 'right', display: 'flex-end', mb:'20px' }}>
                <Button onClick={handleSubmit(submit)} variant="contained">Save</Button>
            </Box>
        </>
    )
}