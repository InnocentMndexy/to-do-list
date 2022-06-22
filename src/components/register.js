import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import Axios  from 'axios';
import regcss from './register.module.css';



function Register() {
    /*const [empName, setEmpName] = useState("");
    const [empUsername, setEmpUsername] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empPassword,setEmpPassword] = useState("");
*/
    const [register, setregister] = useState({
        empName:'',
        empUsername:'',
        empEmail: '',
        empPassword: '',

        

    })

    const handleChanges = (e) =>{
        const {name, value} = e.target;
        setregister(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const registerNow = async (e) =>{
        e.preventDefault();
        console.log(register)
        const k = await Axios.post("http://localhost:27017/register",register )
        console.log(k)
    };


    return (

        <body>
            <div className={regcss.bgimg}>
                <div className={regcss.content}>
                    <header>Register</header>
                    
                        <div className={regcss.field}>
                            <span className="fa fa-user"></span>
                            <input type="text" name='empName' required placeholder="Enter Names" 
                            value={register.empName} onChange={handleChanges}/>
                        </div>
                        <br />

                        <div className={regcss.field}>
                            <span className="fa fa-user"></span>
                            <input type="text" name='empUsername' required placeholder="Enter Username" 
                            value={register.empUsername} onChange={handleChanges}/>
                        </div>
                        <br />

                        <div className={regcss.field}>
                            <span className="fa fa-user"></span>
                            <input type="text" name='empEmail'required placeholder="Enter Email" 
                            value={register.empEmail}onChange={handleChanges}/>
                        </div>
                        <br />

                        <div className={regcss.field}>
                            <span className="fa fa-lock"></span>
                            <input type="password"  name='empPassword' className='Password' required placeholder="Password" 
                            value={regcss.empPassword}onChange={handleChanges}/>

                        </div>
                        <br/>
                        <div className={regcss.field}>
                             <input type="submit" value="Register" onClick={registerNow}/> 
                            {/*<Link to ="./index" type = {"Submit"} className= "signin "onClick={registerNow}>Register </Link>*/}
                        </div>
                        <br/>
                        <div className={regcss.signup}>Have account?
                            <Link to="/login">SignIn Now</Link>
                        </div>
                   
                </div>
            </div>
        </body>
    );
}

export default Register;