import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const [emailId, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/forgetPassword', { emailId });
            console.log('Response:', response.data); 
            if(response.data.message !== 'Password reset link sent on mail_id'){
                alert('Enter correct emailId!');
            }
            else{
                alert('Password reset email sent successfully!');
            }
            window.location.reload();
        } catch (error) {
            console.error('Forgot Password error:', error.response.data);
            alert('Error submitting email. Please try again later.');
        }
    };
    

    return (
        <html>
            <head>
                <title>Faculty Application | IIT Indore</title>
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico"  />
                <link rel="icon" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap-datepicker.css" />
                <script type="text/javascript" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/js/jquery.js"></script>
                <script type="text/javascript" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/js/bootstrap.js"></script>
                <script type="text/javascript" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/js/bootstrap-datepicker.js"></script>
            </head>
            <body>
                <div className="container-fluid" style={{ backgroundColor: '#f7ffff', marginBottom: '10px' }}>
                    <div className="container">
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-md-8 col-md-offset-2">
                                <h3 style={{ textAlign: 'center', color: '#414002', fontWeight: 'bold', fontSize: '2.3em', marginTop: '3px', fontFamily: 'Noto Sans, sans-serif' }}>भारतीय प्रौद्योगिकी संस्थान पटना</h3>
                                <h3 style={{ textAlign: 'center', color: '#414002', fontWeight: 'bold', fontFamily: 'Oswald, sans-serif', fontSize: '2.2em', marginTop: '0px' }}>Indian Institute of Technology Patna</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 style={{ color: '#e10425', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif, serif' }} className="blink_me">Application for Faculty Position</h3>

                <div className="container" style={{ borderRadius: '10px', height: '500px', marginTop: '50px' }}>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row" style={{ borderWidth: '2px', borderStyle: 'solid', borderRadius: '10px', boxShadow: '0px 1px 30px 1px #284d7a', backgroundColor: '#F7FFFF' }}>
                            <div className="col-md-6" style={{ height: '403px', borderRadius: '10px 0px 0px 10px' }}>
                                <img src="https://www.pngkit.com/png/detail/270-2702179_iit-patna-logo-png.png" style={{ height:'350px', width:'350px', marginTop: '5%', marginLeft: '20%' }} alt="IIT Patna Logo" />
                            </div>
                            <div className="col-md-6" style={{ borderRadius: '0px 10px 10px 0px', height: '403px' }}>
                                <br />
                                <div className="col-md-10 col-md-offset-1">
                                    <h3 style={{ textAlign: 'center', color: 'red' }}><strong>FORGOT PASSWORD</strong></h3>
                                    <br />
                                    <form onSubmit={handleSubmit} className="form" >
                                        <input type="hidden" name="ci_csrf_token" value="" />
                                        <div className="inner-addon left-addon">
                                            <i className="glyphicon glyphicon-envelope"></i>
                                            <input type="email" name="emailId" placeholder="Please Enter Your Registered Email" required value={emailId} onChange={handleChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}  />
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <button type="submit" className="cancelbtn">Submit</button>
                                            </div>
                                            <div className="col-md-9">
                                                <Link to="/"><button type="button" className="loginbtn pull-right">Login Area</button></Link>
                                            </div>
                                        </div>
                                    </form>
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

export default ForgetPassword;
