import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
            const [formData, setFormData] = useState({
                firstName: '',
                lastName: '',
                category: '',
                emailId: '',
                password: '',
                repswd: ''
            });
        
            const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
            };

            const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                    if (formData.password !== formData.repswd) {
                        alert('Password and confirm password do not match!!!');
                        window.location.reload();
                    } else {
                        const response = await axios.post('http://localhost:5000/api/register', formData);
                        console.log(response.data);
                        if (response.data.message) {
                            alert(response.data.message);
                        }
                    }
                } catch (error) {
                    if (error.response && error.response.data && error.response.data.message) {
                        alert(error.response.data.message);
                    } else {
                        alert('An error occurred. Please try again later.');
                        console.error('Registration error:', error);
                    }
                }
            };

    const containerStyle = {
        backgroundColor: '#f7ffff',
        borderRadius: '10px',
        marginTop: '20px',
    };

    const rowStyle = {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '10px',
        boxShadow: '0px 1px 30px 1px #284d7a',
        height: '500px',
        backgroundColor: '#F7FFFF',
    };

    const h3Style = {
        color: '#e10425',
        marginBottom: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Noto Serif, serif',
    };

    return (
        <html>
            <head>
                <title>Faculty Register | IIT Patna</title>
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico" />
                <link rel="icon" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap-datepicker.css" />
            </head>
            <body style={{ backgroundColor: 'lightgray', paddingTop: '0px' }}>
                <div className="container-fluid" style={containerStyle}>
                    <div className="container">
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-md-8 col-md-offset-2">
                                <h3 style={{ ...h3Style, marginTop: '3px', fontSize: '2.3em', color: '#414002' }}>भारतीय प्रौद्योगिकी संस्थान पटना</h3>
                                <h3 style={{ ...h3Style, fontSize: '2.2em', marginTop: '0px' }}>Indian Institute of Technology Patna</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={containerStyle}>
                    <div className="row" style={rowStyle}>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <img src="https://www.pngkit.com/png/detail/270-2702179_iit-patna-logo-png.png" style={{ width: '400px', height: '400px', marginLeft: '22%', marginTop: '5%' }} alt="IIT Patna Logo" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <h3>CREATE YOUR PROFILE</h3>
                            <br />
                            <form action="#" method="post" className="form">
                                <input type="hidden" name="ci_csrf_token"  />
                                <div className="row">
                                    <div className="col-xs-6 col-md-6">
                                        <input className="form-control" name="firstName" placeholder="First name" type="text" required autoFocus onChange={handleChange}/>
                                    </div>
                                    <div className="col-xs-6 col-md-6">
                                        <input className="form-control" name="lastName" required placeholder="Last name" type="text" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6 col-md-6">
                                        <input className="form-control" name="emailId" placeholder="Your email" required type="email" onChange={handleChange}/>
                                    </div>
                                    <div className="col-xs-6 col-md-6">
                                        <select id="cast" name="category" className="form-control input-md" required onChange={handleChange}>
                                            <option >Select Category</option>
                                            <option value="UR">UR</option>
                                            <option value="OBC">OBC</option>
                                            <option value="SC">SC</option>
                                            <option value="ST">ST</option>
                                            <option value="PWD">PWD</option>
                                            <option value="EWS">EWS</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <input className="form-control" name="password" placeholder="New password" required type="password" onChange={handleChange}/>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <input className="form-control" name="repswd" placeholder="Retype - new password" required type="password" onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-12">
                                        <h5>
                                            <strong>
                                                <font color="red">Note:</font>
                                                <br />
                                                <br />
                                                <br />
                                                <font color="#124f93">
                                                    1. Applicant should kindly check their email for an activation link to access the portal.
                                                    <br />
                                                    2. Please check the SPAM folder also, in case the activation link is not received in INBOX.
                                                    <br />
                                                    3. Applicants applying for more than one position/department should use <strong><font color="red">different email id</font></strong> for each application.
                                                </font>
                                            </strong>
                                            <br />
                                            <br />
                                            <br />
                                        </h5>
                                        <button className="btn btn-sm btn-primary" type="submit" name="submit" value="Submit" onClick={handleSubmit}>Register</button>
                                        <strong className="pull-right" style={{ color: 'green' }}>If registered <a href="http://localhost:3000" className="btn btn-sm btn-success"> Login Here</a></strong>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2" style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
                    </div>
                </div>
                <div id="footer"></div>
            </body>
        </html>
    );
};

export default RegistrationForm;
