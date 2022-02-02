import axios from "axios"

const getPosts = async (cb) => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        cb(response.data, 'ok');
    } catch (error) {
        cb(error, 'Something Went Wrong!!');
    }
}

const getPostById = (id) => {
    try {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    } catch (error) {
        console.log(error, 'post===>>error')
    }
}

export default {
    getPosts,
    getPostById
}