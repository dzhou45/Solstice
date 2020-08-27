import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
});

export default function DenseTable(props) {
    console.log(props)
    const classes = useStyles();

    if (Array.isArray(props.rows)) {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell> <b>Account ID</b></TableCell>
                            <TableCell> <b>Customer ID</b></TableCell>
                            <TableCell> <b>Address</b></TableCell>
                            <TableCell> <b>City</b></TableCell>
                            <TableCell> <b>State</b></TableCell>
                            <TableCell> <b>Zip Code</b></TableCell>
                            <TableCell> <b>Solar Farm ID</b></TableCell>
                            <TableCell> <b>Capacity Share</b></TableCell>
                            <TableCell> <b>Created Date</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.customer_id}</TableCell>
                                <TableCell >{row.address}</TableCell>
                                <TableCell >{row.city}</TableCell>
                                <TableCell >{row.state}</TableCell>
                                <TableCell >{row.zip_code}</TableCell>
                                <TableCell >{row.solar_farm_id}</TableCell>
                                <TableCell >{row.capacity_share}</TableCell>
                                <TableCell >{row.created_date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    else {
        return "data hasn't been grabbed from the api yet"
    }
}