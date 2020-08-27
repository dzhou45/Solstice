import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props) {
    const { row } = props;
    const accounts = props.accounts.filter(account => row.id === account.customer_id);
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell >{row.first_name}</TableCell>
                <TableCell >{row.last_name}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Additional Customer Information
              </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><b>Email</b></TableCell>
                                        <TableCell><b>Active</b></TableCell>
                                        <TableCell><b>Account Manager ID</b></TableCell>
                                        <TableCell><b>Reason for Joining</b></TableCell>
                                        <TableCell><b>Created Date</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.email}>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.active}</TableCell>
                                        <TableCell>{row.account_manager_id}</TableCell>
                                        <TableCell>{row.reason_for_joining}</TableCell>
                                        <TableCell>{row.created_date}</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Associated Accounts
              </Typography>
                            <Table size="small" aria-label="purchases">
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
                                    {accounts.map(account => (
                                        <TableRow key={account.id}>
                                            <TableCell component="th" scope="row">
                                                {account.id}
                                            </TableCell>
                                            <TableCell >{account.customer_id}</TableCell>
                                            <TableCell >{account.address}</TableCell>
                                            <TableCell >{account.city}</TableCell>
                                            <TableCell >{account.state}</TableCell>
                                            <TableCell >{account.zip_code}</TableCell>
                                            <TableCell >{account.solar_farm_id}</TableCell>
                                            <TableCell >{account.capacity_share}</TableCell>
                                            <TableCell >{account.created_date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CollapsibleTable(props) {

    if (Array.isArray(props.rows) && (Array.isArray(props.accounts))) {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell> <b>Customer ID</b></TableCell>
                            <TableCell> <b>First Name</b></TableCell>
                            <TableCell> <b>Last Name</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map((row) => (
                            <Row key={row.id} row={row} accounts={props.accounts} />
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
