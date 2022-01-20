import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ReplayCircleFilledOutlinedIcon from '@mui/icons-material/ReplayCircleFilledOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
const SingleContact = ({ data, id }) => {
    let navigate = useNavigate();
    const updateContact = () => {
        navigate('/updateContact/'+id);
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">{data.name}</TableCell>
            <TableCell align="center">{data.mob}</TableCell>
            <TableCell align="center">{data.address}</TableCell>
            <TableCell align="center">
                <ReplayCircleFilledOutlinedIcon onClick={updateContact} sx={{cursor:"pointer"}} />
                <DeleteOutlineOutlinedIcon sx={{cursor:"pointer"}}/>
            </TableCell>
        </TableRow>
    )
}

export default SingleContact;