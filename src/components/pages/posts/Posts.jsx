import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../../../services/posts';
import { loadSuccess } from '../../../store/actions';
import { isSuccess } from '../../../store/selectors';
import Spinner from '../../Spinner';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableItem from "../../TableItem";
import TableHeads from "../../TableHeads";

const Posts = () => {
    const headings = ["UserId", "Id", "Title", "Body"];
    const [postData, setPostData] = useState([])
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => isSuccess(state));
    useEffect(() => {
        dispatch(loadSuccess(true))
        PostService.getPosts((response, msg) => {
            if (msg === 'ok') setPostData(response);
            dispatch(loadSuccess(false))
        });
    }, [PostService.getPosts])                                                                          
    return (
        <>
            <h3>View All Posts</h3>
            {postData.length === 0 && !isLoading && <span>Something Went Wrong!!</span>}
            {postData.length>0 &&
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHeads headings={headings} />
                        <TableBody>
                            {postData.map((data, index) => {
                                return <TableItem data={data} key={index} id={index} component="Posts" />
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>}
            {isLoading && <Spinner />}
        </>
    )
}

export default Posts;