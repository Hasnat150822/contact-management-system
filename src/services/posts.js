import axios from "axios"

const getPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

const getPostById = async (id, cb) => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        cb(response.data, 'ok');
    } catch (error) {
        cb(error, 'Something Went Wrong!!');
    }
}

export default {
    getPosts,
    getPostById
}