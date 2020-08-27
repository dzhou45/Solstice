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
    table: {
        width: "50%",
        marginLeft: "25%",
        marginTop: "10%",
        border: "1px solid black",
    },
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
                            <TableCell> <b>Customer ID</b></TableCell>
                            <TableCell> <b>First Name</b></TableCell>
                            <TableCell> <b>Last Name</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.first_name}</TableCell>
                                <TableCell >{row.last_name}</TableCell>
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