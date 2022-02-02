import { useSelector } from "react-redux"
import { allContacts } from "../../../store/selectors";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableItem from "../../TableItem";
import TableHeads from "../../TableHeads";

const Contacts = () => {
    const headings = ["Name", "Mobile", "Address", "Actions"]
    const contacts = useSelector((state) => allContacts(state));
    let items = contacts.map((contact, index) => {
        return <TableItem data={contact} key={index} id={index} component="Contacts"/>
    })

    return (
        <>
            <h3>View All Contacts</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHeads headings={headings}/>
                    <TableBody>
                        {items}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


export default  Contacts;