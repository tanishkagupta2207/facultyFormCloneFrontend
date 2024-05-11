import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ApplicationForm = () => {

  const navigate = useNavigate(); 
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    advNum: '',
    doa: '',
    refNum:'',
    post:'',
    dept:'',
    fname:'',
    mname:'',
    lname:'',
    nationality:'',
    dob:'',
    age:'',
    ageDays:'',
    gender:'',
    mstatus:'',
    cast:'',
    disabilityType:'',
    idProof:'',
    fatherName:'',
    cadd:'',
    cadd1:'',
    cadd2:'',
    cadd3:'',
    cadd4:'',
    padd:'',
    padd1:'',
    padd2:'',
    padd3:'',
    padd4:'',
    mobile:'',
    email:'',
    mobile2:'',
    email2:'',
    landline:''
  });

  const fetchData = async () => {
    try {
      console.log("fetching data");
      const response = await axios.get(`http://facultyForm-backend:5000/api/form1/${userId}`);
      const data = response.data;
      setFormData(data.data1);
      console.log(data.data1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://facultyForm-backend:5000/api/form1/${userId}`, formData );
      console.log(response.data);
      if(response.data.message){
        alert(response.data.message);
        if(response.data.message !== 'Successful'){
          window.location.reload();
        }
        else{
          navigate(`/form2/${userId}`);
        }
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  }

  
  const ageCalculator = () => {
    const birthdate = new Date(formData.dob);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    setFormData({ ...formData, age: age + ' years ' + today.getDate() + ' days' });
    setFormData({ ...formData, ageDays:  (age * 365) + today.getDate()});
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

                  
                  <div id="project_show">

                    <div class="row">
                      <div class="col-md-12">

                          <label class="col-md-2 control-label" for="adv_num">Advertisement No. * </label>
                          <div class="col-md-4">

                          <select id="adv_num" name="advNum" class="form-control input-md" required="" value={formData.advNum} onChange={handleChange}>
                              <option value="">Select</option>
                              <option selected='selected' value="IITI/FACREC-CHE/2023/JULY/02">IITI/FACREC-CHE/2023/JULY/02</option>
                          </select>
                            
                          </div>
                          <label class="col-md-2 control-label" for="doa">Date of Application </label>
                          <div class="col-md-4">
                            <input id="doa"  name="doa" type="text" value={formData.doa} placeholder="" class="form-control input-md" required="" onChange={handleChange}/>
                          </div>
                          <br/>
                          <br/>
                          <label class="col-md-2 control-label" for="ref_num">Application Number</label>
                          <div class="col-md-4">
                            <input id="ref_num" name="refNum" type="text" value={formData.refNum} placeholder="" readonly='readonly' class="form-control input-md" required=""/>
                          </div>
                          <br/>
                          <label class="col-md-2 control-label" for="post">Post Applied for *</label>
                          <div class="col-md-4">
                          <select id="post" name="post" class="form-control input-md" required="" value={formData.post} onChange={handleChange}>
                              <option value="">Select</option>
                              <option   value="Professor">Professor</option>
                              <option  selected='selected' value="Associate Professor">Associate Professor</option>
                              <option   value="Assistant Professor Grade I">Assistant Professor Grade I</option>
                              <option   value="Assistant Professor Grade II">Assistant Professor Grade II</option>
                          </select>
                          </div>
                          <br/>
                          <label class="col-md-2 control-label" for="dept">Department/School *</label>
                          <div class="col-md-4">
                            <select id="dept" name="dept" class="form-control input-md" required="" value={formData.dept} onChange={handleChange}>
                                <option value="">Select</option>
                                <option selected='selected' value="Chemical Engineering">Chemical Engineering</option>
                            </select> 
                          </div>
                    </div>
                    </div>
                    <hr/>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="panel panel-success">
                        <div class="panel-heading">1. Personal Details <small class="pull-right">Upload/Update Photo *</small></div>
                          <div class="panel-body" style={{height: '390px'}}>
                              <div class="col-md-10">
                                <div class="row">

                                  <span class="col-md-2 control-label" for="fname">First Name *</span>
                                    <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="fname" value={formData.fname} name="fname" type="text" readonly='readonly' placeholder="First name" class="form-control input-md" maxlength="15" required="" />
                                  </div>

                                  <span class="col-md-2 control-label" for="mname">Middle Name</span>
                                    <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="mname" value={formData.mname} name="mname" type="text" placeholder="Middle name" class="form-control input-md" maxlength="12" onChange={handleChange}/>
                                    </div>

                                  <span class="col-md-2 control-label" for="lname">Last Name *</span>
                                    <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="lname" value={formData.lname} readonly='readonly' name="lname" type="text" placeholder="Last name" class="form-control input-md" maxlength="15" required="" />
                                    </div>

                                  <span class="col-md-2 control-label" for="nationality">Nationality *</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                    <select id="nationality" name="nationality" class="form-control input-md" required="" value={formData.nationality} onChange={handleChange}><option value="">Select</option>
                                      <option selected='selected' value=" Indian"> Indian</option>
                                      <option  value=" OCI">OCI</option>
                                    </select>
                                  </div>

                                  <span class="col-md-2 control-label" for="dob">Date of Birth*</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                   <input id="dob" name="dob" value={formData.dob}  type="text" placeholder="DD/MM/YYYY" class="form-control input-md" required="" onChange={handleChange} onBlur={ageCalculator}/>
                                  <input type="hidden" name="Date" id="Date" value={new Date().toISOString().split('T')[0]} />
                                  </div>

                                  <span class="col-md-2 control-label" for="age">Age</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="age" name="age"  value={formData.age} type="text" class="form-control input-md" readonly/>
                                    <input id="age_days" name="age_days"  value={formData.ageDays} type="hidden" class="form-control input-md" readonly/>
                                  </div>

                                  <span class="col-md-2 control-label" for="gender">Gender*</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                    <select id="gender" name="gender" class="form-control input-md" required="" value={formData.gender} onChange={handleChange}>
                                      <option value="">Select</option>
                                      <option  value="Male">Male</option>
                                      <option selected='selected' value="Female">Female</option>
                                      <option  value="Other">Other</option>
                                    </select>
                                  </div>

                                  <span class="col-md-2 control-label" for="mstatus">Marital Status *</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                    <select id="mstatus" name="mstatus" class="form-control input-md" required="" value={formData.mstatus} onChange={handleChange}>
                                      <option value="">Select</option>
                                      <option  value="Married">Married</option>
                                      <option selected='selected' value="Unmarried">Unmarried</option>
                                      <option  value="Other">Other</option>
                                    </select>
                                  </div>

                                  <span class="col-md-2 control-label" for="cast">Category</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="cast" name="cast" type="text" readonly='readonly' placeholder="cast" value={formData.cast} class="form-control input-md" required=""/>
                                  </div>

                                  <span class="col-md-2 control-label" for="disability_type">Type of Disability</span>
                                  <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="disability_type" value={formData.disabilityType} name="disabilityType" type="text" placeholder="Type of Disability" class="form-control input-md" required="" onChange={handleChange}/>
                                  </div>
                                    
                                  <div class="col-md-6">
                                  </div>
                                </div>

                                <div class="row">
                                  <span class="col-md-2 control-label" for="id_proof">ID Proof *</span>
                                  <div class="col-md-4">
                                    <select id="id_proof" name="idProof" class="form-control input-md" required="" value={formData.idProof} onChange={handleChange}>
                                      <option value="">Select</option>
                                      <option selected='selected' value="AADHAR">AADHAR</option>
                                      <option  value="PAN-CARD">PAN-CARD</option>
                                      <option  value="DRIVING-LICENSE">DRIVING-LICENSE</option>
                                      <option  value="PASSPORT">PASSPORT</option>
                                      <option  value="OTHER">OTHER</option>
                                    </select>
                                  </div>

                                  <span class="col-md-2 control-label" for="cast">Update ID Proof</span>
                                  <div class="col-md-2" style={{padding: '9px'}}>
                                       <a href="" className="btn btn-sm btn-success" target="_blank">View Uploaded File </a>
                                  </div>
                                   <div class="col-md-2" style={{padding: '9px'}}>
                                     <input id="id_card_file" name="userfile2" type="file" class="form-control input-md" />
                                  </div>
                                  <span class="col-md-2 control-label" for="father_name">Father's Name *</span>
                                    <div class="col-md-4" style={{padding: '9px'}}>
                                    <input id="father_name" value={formData.fatherName} name="fatherName" type="text" placeholder="Father's Name" class="form-control input-md" maxlength="30" required="" onChange={handleChange}/>
                                    </div>
                                </div>
                          </div>
                            <div class="col-md-2 pull-right">
                                        <img src="" class="thumbnail pull-right" height="150" width="130" />
                                <input id="photo" name="userfile" type="file" class="form-control input-md" />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="panel panel-success">
                        <div class="panel-body">
                            <div class="row">
                              <div class="col-md-6">
                                <span class="control-label" for="cadd">Correspondence Address </span>
                                <br />
                                <br />
                               <textarea style={{height:'40px' }} placeholder="Street" class="form-control input-md" name="cadd" maxlength="200" required="" value={formData.cadd} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="City" class="form-control input-md" name="cadd1" maxlength="200" required="" value={formData.cadd1} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="State" class="form-control input-md" name="cadd2" maxlength="200" required="" value={formData.cadd2} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="Country" class="form-control input-md" name="cadd3" maxlength="200" required="" value={formData.cadd3} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="PIN/ZIP" class="form-control input-md" name="cadd4" maxlength="6" required="" value={formData.cadd4} onChange={handleChange}></textarea>
                               <br/>
                              </div>

                              <div class="col-md-6">
                                <span class="control-label" for="padd">Permanent Address </span>
                                <br />
                                <br />
                               <textarea style={{height:'40px'}} placeholder="Street" class="form-control input-md" name="padd" maxlength="200" required="" value={formData.padd} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="City" class="form-control input-md" name="padd1" maxlength="200" required="" value={formData.padd1} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="State" class="form-control input-md" name="padd2" maxlength="200" required="" value={formData.padd2} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="Country" class="form-control input-md" name="padd3" maxlength="200" required="" value={formData.padd3} onChange={handleChange}></textarea>
                               <br/>
                               <textarea style={{height:'40px'}} placeholder="PIN/ZIP" class="form-control input-md" name="padd4" maxlength="6" required="" value={formData.padd4} onChange={handleChange}></textarea>
                               <br/>
                             </div>

                            </div>

                           </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="panel panel-success">
                        <div class="panel-body">
                          <span class="col-md-2 control-label" for="mobile">Mobile *</span>
                          <div class="col-md-4" style={{padding: '9px'}}>
                          <input id="mobile" value={formData.mobile} name="mobile" type="text" placeholder="Mobile" class="form-control input-md" maxlength="20" required="" onChange={handleChange}></input>
                          </div>

                          

                          <span class="col-md-2 control-label" for="email">Email</span>
                          <div class="col-md-4" style={{padding: '9px'}}>
                          <input id="email" name="email" type="text" placeholder="email" readonly='readonly' value={formData.email} class="form-control input-md" required="" ></input>
                          </div>

                          <span class="col-md-2 control-label" for="mobile_2">Alternate Mobile </span>
                          <div class="col-md-4" style={{padding: '9px'}}>
                          <input id="mobile2" value={formData.mobile2} name="mobile2" type="text" placeholder="Alternate Mobile " class="form-control input-md" maxlength="20" onChange={handleChange}></input>
                          </div>

                          <span class="col-md-2 control-label" for="email_2">Alternate Email </span>
                          <div class="col-md-4" style={{padding: '9px'}}>
                          <input id="email2" value={formData.email2} name="email2" type="text" placeholder="Alternate Email" class="form-control input-md" onChange={handleChange}></input>
                          </div>  
                          
                          <span class="col-md-2 control-label" for="landline">Landline Number</span>
                          <div class="col-md-4" style={{padding: '9px'}}>
                          <input id="landline" value={formData.landline} name="landline" type="text" placeholder="Landline Number" class="form-control input-md" maxlength="20" onChange={handleChange}></input>
                          </div>  
                          
                          

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">

                    <div class="col-md-12">
                      <button id="submit" type="submit" name="submit" value="Submit" class="btn btn-success pull-right">SAVE & NEXT</button>
                    </div>

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

export default ApplicationForm;