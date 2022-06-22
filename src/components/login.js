import React from 'react';
import { Link } from 'react-router-dom';
import logcss from '../components/login.module.css';

function Login() {
    return (

        <body>
            <div className={logcss.bgimg}>
                <div className={logcss.content}>
                    <header>Login</header>
                    <form action="/">
                        <div className={logcss.field}>
                            <span className="fa fa-user"></span>
                            <input type="text" required placeholder="Email or Phone" />
                        </div>
                        <br />
                        <div className={logcss.field}>
                            <span className="fa fa-lock"></span>
                            <input type="password" className="password" required placeholder="Password" />

                        </div>
                        <div className={logcss.pass}>
                            <Link to="#">Forgot Password?</Link>
                        </div>
                        <div className={logcss.field}>
                            <input type="submit" value="LOGIN" />
                            <Link to="todo"></Link>
                        </div>
                        <div className={logcss.login}>Or login with</div>
                        <div className={logcss.link}>
                            <div className={logcss.facebook}>
                                <i className="fa fa-facebook-f"><span>Facebook</span></i>
                            </div>
                            <div className={logcss.instagram}>
                                <i className="fa fa-instagram"><span>Instagram</span></i>
                            </div>
                        </div>
                        <div className={logcss.signup}>Don't have account?
                            <Link to="register">SignUp Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Login;