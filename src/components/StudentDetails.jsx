import * as React from 'react';
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/GridLegacy';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';

// const columns = [
//     { id: 'fName', label: 'First Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//         id: 'population',
//         label: 'Population',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Size\u00a0(km\u00b2)',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'density',
//         label: 'Density',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toFixed(2),
//     },
// ];

const columns = [
    { id: 'fname', label: 'First Name', minWidth: 100 },
    { id: 'lname', label: 'Last Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 150 },
    { id: 'contact', label: 'Contact', minWidth: 120 },
    { id: 'city', label: 'City', minWidth: 100 },
    { id: 'country', label: 'Country', minWidth: 100 },
    { id: 'province', label: 'Province', minWidth: 100 },
    { id: 'zipCode', label: 'Zip Code', minWidth: 80 },
    { id: 'address', label: 'Address', minWidth: 150 },
];

function createData(fName, code, population, size) {
    const density = population / size;
    return { fName, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

export default function StudentDetails() {

    const [studentDetails, setStudentDetails] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [loading, setLoading] = useState(true);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/student")
            .then((response) => response.json())
            .then((data) => {
                setStudentDetails(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching student data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Box sx={{ width: '100%', mt: '30px' }}>


                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <Grid container rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
                            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={studentDetails.map((option) => option.fname)}
                                    renderInput={(params) => <TextField {...params} label="Name" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={studentDetails.map((option) => option.city)}
                                    renderInput={(params) => <TextField {...params} label="City" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={studentDetails.map((option) => option.country)}
                                    renderInput={(params) => <TextField {...params} label="Country" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} sx={{ p: { xs: 1, sm: 2 } }}>
                                <Autocomplete
                                    freeSolo
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={studentDetails.map((option) => option.contact)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Search input"
                                            slotProps={{
                                                input: {
                                                    ...params.InputProps,
                                                    type: 'search',
                                                },
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid container rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}>
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {studentDetails
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row, index) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                            {columns.map((column) => {
                                                                const value = row[column.id];
                                                                return (
                                                                    <TableCell key={column.id} align={column.align || 'left'}>
                                                                        {column.format && typeof value === 'number'
                                                                            ? column.format(value)
                                                                            : value}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, 100]}
                                    component="div"
                                    count={studentDetails.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                        </Grid>
                    </>
                )}


            </Box>
        </div>
    )
}