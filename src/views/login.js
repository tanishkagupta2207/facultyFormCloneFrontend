import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
                emailId: '',
                password: ''
            });
        
            const navigate = useNavigate(); 

            const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
            };
        
            const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                    const response = await axios.post('http://localhost:5000/api/login', formData);
                    console.log(response.data);
                    if(response.data.message){
                        alert(response.data.message);
                        if(response.data.message !== 'Logged in successfully'){
                        window.location.reload();
                        }
                        else{
                            navigate(`/form1/${response.data.userId}`);
                        }
                    }
                } catch (error) {
                    console.error('Login error:', error.response.data);
                }
            };
    return (
        <html>
            <head>
                <title>Faculty Login</title>
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico"/>
                <link rel="icon" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap-datepicker.css" />
                <link href="https://fonts.googleapis.com/css?family=Sintony" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Hind&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet" />
            </head>
            <body className="login-page">
                <div className="container-fluid" style={{ backgroundColor: '#f7ffff', marginBottom: '10px' }}>
                    <div className="container">
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-md-8 col-md-offset-2">
                                <h3 className="title">भारतीय प्रौद्योगिकी संस्थान पटना</h3>
                                <h3 className="subtitle">Indian Institute of Technology Patna</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="application-title blink_me">Application for Faculty Position</h3>

                <div className="container" style={{ borderRadius: '10px', height: '300px', marginTop: '20px' }}>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row" style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '10px', boxShadow: '0px 1px 30px 1px #284d7a', backgroundColor: '#F7FFFF' }}>
                            <div className="col-md-6" style={{ height: '403px', borderRadius: '10px 0px 0px 10px' }}>
                                <img src="https://www.pngkit.com/png/detail/270-2702179_iit-patna-logo-png.png" style={{ marginTop: '5%', marginLeft: '20%', height: '75%' }} alt="IIT Indore Logo" />
                            </div>
                            <div className="col-md-6" style={{ borderRadius: '0px 10px 10px 0px', height: '403px' }}>
                                <br />
                                <div className="col-md-10 col-md-offset-1">
                                    <h3 style={{ textAlign: 'center' }}><strong><u>LOGIN HERE</u></strong></h3>
                                    <br />
                                    <form method="post">
                                        <input type="hidden" name="ci_csrf_token" value="" />

                                        <div className="inner-addon left-addon">
                                            <i className="glyphicon glyphicon-envelope"></i>
                                            <input type="text" name="emailId" placeholder="Your email" autoFocus required onChange={handleChange}/>
                                        </div>
                                        <br />

                                        <div className="inner-addon left-addon">
                                            <i className="glyphicon glyphicon-lock"></i>
                                            <input type="password" placeholder="Enter your password" name="password" required onChange={handleChange} />
                                        </div>
                                        <br />

                                        <div className="row">
                                            <div className="col-md-3">
                                                <button type="submit" name="submit" value="Submit" onClick={handleSubmit}>Login</button>
                                            </div>
                                            <div className="col-md-9">
                                                <a href="http://localhost:3000/forgetPassword">
                                                    <button type="button" className="cancelbtn pull-right">Reset Password</button>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                    <br />
                                    <p style={{ textAlign: 'center', color: 'green', fontSize: '1.3em' }}>
                                        <strong>NOT REGISTERED? </strong> <a href='http://localhost:3000/register' className="btn-sm btn-primary"> SIGN UP</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer"></div>
            </body>
        </html>
    );
};

export default Login;
