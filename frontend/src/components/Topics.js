import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Topics = () => {
    var [topic, setTopic] = useState();

    useEffect(() => {
        handleOrderData()
            .then(res => setTopic(res))

    }, []);



    const handleOrderData = async () => {
        try {
            let data = localStorage.getItem("token");
            let result = await axios.get(`http://localhost:3001/user/${data.split(",")[1]}/dashboard`, {
                headers: {
                    authorization: (data.split(","))[0],
                    Accept: 'application/json',
                },
            })

            let newRes = result.data
            return newRes.data
        }
        catch (err) {
            alert(err.response.data.message)
        }
    };
    if (!topic) return (<div>No Record Found</div>)



    return (
        <div className='login-page'>
            <nav className='form'>
                <h1>FEYNMAN BOARD</h1>
                <Link to="/addtopic">
                    <button className='white_btn'>Add a new Topic</button>
                </Link>
            </nav>
            <div className="login-page">
                {topic.map((val, index) => {
                    return <div className="eachCont" key={index} >
                        <h2>Topic : {val.topic}</h2>
                        <p>{val.description}</p>
                        <h4>Understanding of the topics:</h4>{val.percentage +"%"}
                    </div>
                })}
            </div>
            <nav className='footer'></nav>
        </div>

    );
}

export default Topics