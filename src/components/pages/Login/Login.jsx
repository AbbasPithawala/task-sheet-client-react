import React from "react"
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function Login(){

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e)=>{
    console.log("Hello")
}

    return (
    <div className="container forms">
        <Box> 
        <div className="row">
        <label for="email">Email:
        <textarea type="email" name="email" id="email"></textarea>
        </label>
        
        </div>
        <div className="row">
        <label for="password">Password</label>
        <textarea type="password" id="password" name="password"></textarea>
        </div>
        <Button tpe="submit" variant="contained" color="primary" onClick={handleSubmit} className="buttons" value="login">Login</Button>
</Box>
 
</div>

)
}
