import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ReplayCircleFilledOutlinedIcon from '@mui/icons-material/ReplayCircleFilledOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { deleteContact } from "../store/contact-manager/actions";
import { connect } from 'react-redux';

const SingleContact = ({ data, deleteContact, id }) => {
    let navigate = useNavigate();
    const updateContact = () => {
        navigate('/updateContact/'+id);
    }
    const delContact = () => {
        deleteContact(id)
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">{data.name}</TableCell>
            <TableCell align="center">{data.mob}</TableCell>
            <TableCell align="center">{data.address}</TableCell>
            <TableCell align="center">
                <ReplayCircleFilledOutlinedIcon onClick={updateContact} sx={{cursor:"pointer"}} />
                <DeleteOutlineOutlinedIcon onClick={delContact} sx={{cursor:"pointer"}}/>
            </TableCell>
        </TableRow>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deleteContact: (id) => dispatch(deleteContact(id))
    }
}

export default connect(null, mapDispatchtoProps)(SingleContact);