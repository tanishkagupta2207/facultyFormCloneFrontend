import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        emailId: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            console.log(response.data);
            if(response.message){
                alert(response.message);
            }
        } catch (error) {
            console.error('Registration error:', error.response.data);
        }
    };
    return (
        // <div>
        //     <div class="container-fluid" style={{backgroundColor: '#f7ffff', marginBottom: '10px'}}>
        //         <div class="container">
        //             <div class="row" style={{marginBottom:'10px' }}>
        //                 <div class="col-md-8 col-md-offset-2">
        //                     <h3 style={{textAlign:'center',color:'#414002!important',fontWeight: 'bold',fontSize: '2.3em',marginTop: '3px',fontFamily: 'Noto Sans'}}>भारतीय प्रौद्योगिकी संस्थान पटना </h3>
        //                     <h3 style={{textAlign:'center',color: '#414002!important',fontWeight:'bold',fontFamily: 'Oswald',fontSize: '2.2em', marginTop: '0px'}}>Indian Institute of Technology Patna</h3>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> 
        //     <h3 style={{color: '#e10425', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center',fontFamily: 'Noto Serif'}} class="blink_me">Application for Faculty Position</h3>


        //     <div class="container" style= {{borderRadius:'10px', marginTop:'20px'}}>
        //         <div class="row" style={{borderWidth: '2px', borderStyle: 'solid', borderRadius: '10px', boxShadow: '0px 1px 30px 1px #284d7a', height:'500px', backgroundColor:'#F7FFFF'}}>
        //             <div class="col-md-6 col-sm-6 col-xs-6">
        //                 <img alt="College Logo" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/IITIndorelogo.png" style={{marginLeft:'22%', marginTop: '5%'}}></img>
        //             </div>
        //             <div class="col-xs-12 col-sm-12 col-md-6">
        //                 <h3>CREATE YOUR PROFILE</h3><br />
        //                 <form action="#" method="post" class="form">
        //                     <input type="hidden" name="ci_csrf_token" value="" />
        //                     <div class="row">
        //                         <div class="col-xs-6 col-md-6">
        //                             <input class="form-control" value='' name="firstname" placeholder="First name" type="text"
        //                                 required="" autofocus />
        //                         </div>
        //                         <div class="col-xs-6 col-md-6">
        //                             <input class="form-control" name="lastname"  value='' required="" placeholder="Last name" type="text" />
        //                         </div>
        //                     </div>
        //                     <div class="row">
        //                         <div class="col-xs-6 col-md-6">
        //                             <input class="form-control" name="email" placeholder="Your email"  value='' required="" type="email" />
        //                         </div>
        //                             <div class="col-xs-6 col-md-6">
        //                                 <select id="cast" name="cast" class="form-control input-md" required="">
        //                                     <option value="">Select Category</option>
        //                                     <option value="UR">UR</option>
        //                                     <option value="OBC">OBC</option>
        //                                     <option value="SC">SC</option>
        //                                     <option value="ST">ST</option>
        //                                     <option value="PWD">PWD</option>
        //                                     <option value="EWS">EWS</option>
        //                                 </select>
        //                             </div>
        //                     </div>
        //                     <div class="row">
        //                         <div class="col-md-6 col-sm-6 col-xs-6">
        //                             <input class="form-control" name="password" placeholder="New password" required="" type="password" />
        //                         </div>
        //                         <div class="col-md-6 col-sm-6 col-xs-6">
        //                             <input class="form-control" name="re_password" placeholder="Retype - new password" required="" type="password" />
        //                         </div>
        //                     </div>
        //                     <div class="row">
        //                             <input id="created_at" name="created_at" type="hidden"/>
        //                             <div class="col-xs-6 col-md-6">
        //                                 <img src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/viewcaptcha?t=0.50918900+1712492032" alt="CAPTCHA security code" />
        //                             </div>
        //                         <div class="col-xs-6 col-md-6" >
        //                             <input class="form-control" name="captcha" placeholder="Insert image text" required="" type="text" />
        //                         </div>
        //                         <div class="col-xs-12 col-md-12">
        //                             <h5><strong><font color="red">Note:</font>
        //                             <br />  
        //                             <br />  
        //                             <br />
        //                             <font color='#124f93'>
        //                             1. Applicant should kindly check their email for activation link to access the portal. 
        //                             <br />  
        //                             2. Please check SPAM folder also, in case activation link is not received in INBOX.<br />
        //                             3. Applicant applying for more than one position/ department should use <strong><font color="red">different email id</font></strong> for each application.</font> </strong>
        //                             <br />
        //                             <br />
        //                             <br />
        //                             </h5>
        //                             <button class="btn btn-sm btn-primary" type="submit" name="submit" value="Submit">Register</button>
        //                             <strong class=" pull-right" style={{color: 'green'}}>If registered <a href='https://ofa.iiti.ac.in/facrec_che_2023_july_02/faculty/login' class="btn btn-sm btn-success"> Login Here</a></strong>
        //                         </div>
        //                     </div>

        //                 </form>

        //             </div>
        //         </div>

        //     </div>
        // </div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="userName" placeholder="Username" onChange={handleChange} />
            <input type="email" name="emailId" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;


