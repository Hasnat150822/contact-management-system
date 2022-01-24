import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
const TableHeads = ({headings}) => {
    let items = headings.map((item, i)=>{
        return <TableCell align="center" key={i}>{item}</TableCell>
    })
    return (
        <TableHead>
            <TableRow>
                {items}
            </TableRow>
        </TableHead>
    )
}

export default TableHeads;