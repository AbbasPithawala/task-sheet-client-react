import React from "react"

export default function Login(){
return (
    <div className="container forms">
    <form action="/user/login" method="post">
        <div className="row">
        <label for="email">Email:
        <textarea type="email" name="email" id="email"></textarea>
        </label>
        
        </div>
        <div className="row">
        <label for="password">Password</label>
        <textarea type="password" id="password" name="password"></textarea>
        </div>
        <input type="submit"  className="buttons" value="login"/>
    </form>
</div>

)
}
