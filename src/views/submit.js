import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SubmitForm = () => {

  const navigate = useNavigate(); 
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
  });

  const fetchData = async () => {
    try {
      console.log("fetching data");
      const response = await axios.get(`http://localhost:5000/api/submit/${userId}`);
      const data = response.data;
      console.log(data) ;
      setFormData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/submit/${userId}`);
      console.log(response.data);
      if(response.data.message){
        alert(response.data.message);
        if(response.data.message !== 'Successful'){
          window.location.reload();
        }
        else{
          navigate(`/print/${userId}`);
        }
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  }

  
  const handleBack = async(e) => {
    e.preventDefault();
    try {
      navigate(`/form7/${userId}`);
    }
    catch(error){
      navigate(`/form7/${userId}`);
    }
  }
 
  return (
    <html>
      <head>
        <title>Update your personal details</title>
        <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico" />
        <link rel="icon" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap.css"/>
        <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/css/bootstrap-datepicker.css"/>
        <script type="text/javascript" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/js/jquery.js"></script>
        <script type="text/javascript" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/js/bootstrap.js"></script>
        <script type="text/javascript" src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/js/bootstrap-datepicker.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Sintony" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css?family=Hind&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet"/>

      </head>
    <style>
        {`body { backgroundColor: 'lightgray', paddingTop: '0px' }`}
    </style>
      <body>
        <div class="container-fluid" style={{backgroundColor:'#f7ffff', marginBottom: '10px'}}>
          <div class="container">
              <div class="row" style={{marginBottom:'10px'}}>
                <div class="col-md-8 col-md-offset-2">
                  <h3 style={{textAlign:'center',color:'#414002',fontWeight: 'bold',fontSize: '2.3em', marginTop: '3px', fontFamily: 'Noto Sans'}}>भारतीय प्रौद्योगिकी संस्थान पटना</h3>
                  <h3 style={{textAlign:'center',color: '#414002',fontWeight: 'bold',fontFamily: 'Oswald',fontSize: '2.2em', marginTop: '0px'}}>Indian Institute of Technology Patna</h3>
                </div>
              </div>
            </div>
           </div> 
            <h3 style={{color: '#e10425', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center',fontFamily: 'Noto Serif'}} class="blink_me">Application for Faculty Position</h3>
        <div class="container">

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 well">
                <form class="form-horizontal" action="" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
                  <input type="hidden" name="ci_csrf_token" value="" />
                <fieldset>
                    <legend>

                        <div class="row">
                        <div class="col-md-8">
                                <h4>Welcome : <font color="#025198"><strong>{formData.fname} {formData.lname}</strong></font></h4>
                        </div>
                        
                        <div class="col-md-3">

                        <button type="button" className="btn btn-sm btn-info pull-right" data-toggle="modal" data-target="#passModal" onClick={() => window.location.href = "http://localhost:3000/forgetPassword"}>Change Password</button>

                        </div>
                        <div class="col-md-1">
                            <button type="button" className="btn btn-sm btn-success  pull-right" onClick={() => window.location.href = "http://localhost:3000/"}>Logout</button>
                        </div>
                        </div>
                    </legend>
                    <div className="panel panel-success">
                        <div className="panel-heading">23. Final Declaration *</div>
                        <div className="panel-body">
                        
                  <div class="form-group">
                  {/* <div>
                        <input type="text" value={"I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the advertisment and this application form. I further declare that all the entries along with the attachments uploaded in this form are true to the best of my knowledge and belief."} readOnly={true} style={{ border: 'none', backgroundColor: '#f0f0f0', color: 'black', padding: '5px',width: '1100px', height: '100px', whiteSpace: 'pre-wrap' }}/>
                  </div> */}
                    <textarea style={{height:"70px"}} placeholder="" class="form-control input-md" name="my_state" readonly="">
                I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the advertisment and this application form. I further declare that all the entries along with the attachments uploaded in this form are true to the best of my knowledge and belief.
              </textarea>
            <input type="checkbox" name="decl_status" value="1" required={true} />  
                  </div>
                  </div>
                    <div class="col-md-12">
                      <button id="submit" type="submit" name="submit" value="Submit" class="btn btn-success pull-right">SAVE & SUBMIT</button>
                    </div>
                    <div className="col-md-11">
                      <button id="back" type="back" name="back" value="Back" className="btn btn-success pull-left" onClick= {handleBack}>BACK</button>
                  </div>
                  </div>
                </fieldset>
                </form>

                

              </div>
            </div>

          </div>
      </body>
    </html>
  );
}

export default SubmitForm;