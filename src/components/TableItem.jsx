import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { deleteContact } from "../store/actions";
import { connect } from 'react-redux';
import { EditOutlined } from '@mui/icons-material';

const TableItem = ({ data, deleteContact, id, component }) => {
    let navigate = useNavigate();
    const updateContact = () => {
        navigate('/updateContact/' + id);
    }
    const delContact = () => {
        deleteContact(id)
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center"
                sx={{ display: component == 'Contacts' ? 'none' : 'table-cell' }}>
                {data.userId}
            </TableCell>
            <TableCell align="center" 
                sx={{display: component=='Contacts'?'none':'table-cell'}}>
                {data.id}
            </TableCell>
            <TableCell align="center" 
                sx={{display: component=='Contacts'?'none':'table-cell'}}>
                {data.title}
            </TableCell>
            <TableCell align="center" 
                sx={{display: component=='Contacts'?'none':'table-cell'}}>
                {data.body}
            </TableCell>
            <TableCell align="center" 
                sx={{display: component=='Contacts'?'table-cell':'none'}}>
                {data.name}
            </TableCell>
            <TableCell align="center" 
                sx={{display: component=='Contacts'?'table-cell':'none'}}>
                {data.mob}
            </TableCell>
            <TableCell align="center" 
                sx={{display: component=='Contacts'?'table-cell':'none'}}>
                {data.address}
            </TableCell>
            <TableCell align="center" sx={{display: component=='Contacts'?'block':'none'}}>
                <EditOutlined onClick={updateContact} sx={{ cursor: "pointer" }} />
                <DeleteOutlineOutlinedIcon onClick={delContact} sx={{ cursor: "pointer" }} />
            </TableCell>
        </TableRow>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deleteContact: (id) => dispatch(deleteContact(id))
    }
}

export default connect(null, mapDispatchtoProps)(TableItem);