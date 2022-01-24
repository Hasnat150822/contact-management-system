import { createContext, useState } from "react";

export let AuthContext = createContext();

function AuthContextProvider(props) {
    let [user, setUser] = useState(null);

    let login = (userData, callback) => {
        localStorage.setItem('token', "jakjsdkaskdhkahfkashkfhjkhfksh");
        setUser(userData);
        callback(user);
    }

    let logout = (callback) => {
        localStorage.clear();
        setUser(null);
        callback();
    }

    let value = {user, login, logout}

    return <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider;