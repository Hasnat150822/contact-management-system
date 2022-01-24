import { connect, useSelector } from "react-redux"
import { allContacts } from "../store/contact-manager/selectors";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SingleContact from "../components/SingleContact";

const ContactList = () => {
    const contacts = useSelector((state) => allContacts(state));
    let items = contacts.map((contact, index) => {
        return <SingleContact data={contact} key={index} id={index} />
    })

    return (
        <>
            <h3>View All Contacts</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Mobile</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        contacts:state.contacts
    }
}

export default  connect(mapStatetoProps, null)(ContactList);