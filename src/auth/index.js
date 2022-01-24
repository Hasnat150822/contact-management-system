const signIn = (userData, callback) => {
    localStorage.setItem('token', "jakjsdkaskdhkahfkashkfhjkhfksh");
    callback(userData); //after api integration userData will be replaced 
}

const signOut = () => {
    localStorage.clear();
}

export default {
    signIn,
    signOut
}