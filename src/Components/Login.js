import { IoIosArrowBack } from "react-icons/io";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
    const [eye, setEye] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const handleShowPassword =() =>{
    //     set
    // }
    console.log('Eye: ', eye);
    return (
        <div className="login-container col-12 col-sm-4">
            <div className="title">Login</div>
            <div className="text">Email or user</div>
            <input type="text" placeholder="Enter email or phone..." onChange={(e) => setEmail(e.target.value)} />
            <div className="input-2">
                <input type={eye === true ? "password" : "text"} placeholder="Enter password..." onChange={(e) => setPassword(e.target.value)} />
                {eye === true ? <AiFillEyeInvisible onClick={() => setEye(!eye)} /> : <AiFillEye onClick={() => setEye(!eye)} />}
            </div>
            <button
                disabled={email && password ? false : true}
                className={email && password ? 'active' : ''}>Log in</button>
            <div className="go-back"><IoIosArrowBack /><span className="text-go-back">Go back</span></div>
        </div>
    )
}

export default Login