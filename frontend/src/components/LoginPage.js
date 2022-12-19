import React, { useState } from "react"
import {
    NavLink,
    useNavigate
} from "react-router-dom";
import axios from "axios"
import "./style.css"
import url from "../config"


const LoginPage = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        userName: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async () => {
        try {
            const resp = await axios.post("http://localhost:3001/login", user);
            localStorage.setItem("token", ([resp.data.data.token, resp.data.data.userId]));
            window.location = "/getTopics";
            alert(resp.data.message);
            navigate("/getTopics", { replace: true });
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }


    return (
         <div className="login-page">
             <div className="form">
            <h1>FEYNMAN BOARD</h1>
            <br></br>
            <br></br>
            <h2>Login</h2>
            <input type="text" name="userName" value={user.userName} onChange={handleChange} placeholder="Enter your userName"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            </div>
        </div>
    )
}
        export default LoginPage;