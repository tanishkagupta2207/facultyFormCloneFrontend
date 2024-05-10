import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EmploymentDetails = () => {

    const navigate = useNavigate(); 
    const [fname,setFName] = useState('');
    const [lname,setLName] = useState('');
    const { userId } = useParams();
    const [presentEmployment, setPresentEmployment] = useState({
        position: '',
        employer: '',
        status: '',
        doj: '',
        dol: '',
        duration: '',
    });

  const [experienceDetails, setExperienceDetails] = useState([
    {
      position: '',
      employer: '',
      doj: '',
      dol: '',
      duration: '',
    },
  ]);

  const [teachingExperience, setTeachingExperience] = useState([
    {
      position: '',
      employer: '',
      course: '',
      ugpg: '',
      no_students: '',
      doj: '',
      dol: '',
      duration: '',
    },
  ]);

  const [researchExperience, setResearchExperience] = useState([
    {
      position: '',
      institute: '',
      supervisor: '',
      doj: '',
      dol: '',
      duration: '',
    },
  ]);

  const [industrialExperience, setIndustrialExperience] = useState([
    {
      organization: '',
      work: '',
      doj: '',
      dol: '',
      duration: '',
    },
  ]);

  const [areasOfSpecialization, setAreasOfSpecialization] = useState('');
  const [currentAreasOfResearch, setCurrentAreasOfResearch] = useState('');

  const handlePresentEmploymentChange = (e) => {
    setPresentEmployment({ ...presentEmployment, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, e) => {
    const values = [...experienceDetails];
    values[index][e.target.name] = e.target.value;
    setExperienceDetails(values);
  };

  const handleTeachingExperienceChange = (index, e) => {
    const values = [...teachingExperience];
    values[index][e.target.name] = e.target.value;
    setTeachingExperience(values);
  };

  const handleResearchExperienceChange = (index, e) => {
    const values = [...researchExperience];
    values[index][e.target.name] = e.target.value;
    setResearchExperience(values);
  };

  const handleIndustrialExperienceChange = (index, e) => {
    const values = [...industrialExperience];
    values[index][e.target.name] = e.target.value;
    setIndustrialExperience(values);
  };

  const fetchData = async () => {
        try {
        const response = await axios.get(`http://localhost:5000/api/form3/${userId}`);
        const {data1,data2,data3,data4,data5,data6,data7,data8,data9} = response.data;
        setPresentEmployment(data1);
        setExperienceDetails(data2);
        setTeachingExperience(data3);
        setResearchExperience(data4);
        setIndustrialExperience(data5);
        setAreasOfSpecialization(data6);
        setCurrentAreasOfResearch(data7);
        setFName(data8);
        setLName(data9);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

  const handleAddExperienceRow = () => {
    setExperienceDetails([...experienceDetails, {
      position: '',
      employer: '',
      doj: null,
      dol: null,
      duration: '',
    }]);
  };

  const handleAddTeachingExperienceRow = () => {
    setTeachingExperience([...teachingExperience, {
      position: '',
      employer: '',
      course: '',
      ugpg: '',
      no_students: '',
      doj: null,
      dol: null,
      duration: '',
    }]);
  };

  const handleAddResearchExperienceRow = () => {
    setResearchExperience([...researchExperience, {
      position: '',
      institute: '',
      supervisor: '',
      doj: null,
      dol: null,
      duration: '',
    }]);
  };

  const handleAddIndustrialExperienceRow = () => {
    setIndustrialExperience([...industrialExperience, {
      organization: '',
      work: '',
      doj: null,
      dol: null,
      duration: '',
    }]);
  };

  const handleRemoveExperienceRow = (index) => {
    const values = [...experienceDetails];
    values.splice(index, 1);
    setExperienceDetails(values);
  };

  const handleRemoveTeachingExperienceRow = (index) => {
    const values = [...teachingExperience];
    values.splice(index, 1);
    setTeachingExperience(values);
  };

  const handleRemoveResearchExperienceRow = (index) => {
    const values = [...researchExperience];
    values.splice(index, 1);
    setResearchExperience(values);
  };

  const handleRemoveIndustrialExperienceRow = (index) => {
    const values = [...industrialExperience];
    values.splice(index, 1);
    setIndustrialExperience(values);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/form3/${userId}`, {presentEmployment,experienceDetails,teachingExperience, researchExperience, industrialExperience, areasOfSpecialization, currentAreasOfResearch});
      if(response.data.message){
        alert(response.data.message);
        if(response.data.message !== 'Successful'){
          window.location.reload();
        }
        else{
          navigate(`/form4/${userId}`);
        }
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  const handleBack = async(e) => {
    e.preventDefault();
    try {
      navigate(`/form2/${userId}`);
    }
    catch(error){
      navigate(`/form2/${userId}`);
    }
  }
  return (
        <html>
            <head>
                <title>Employment Details</title>
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
                
            <div class="col-xs-12 col-sm-12 col-md-12 well"  style={{paddingLeft:'200px', paddingRight: '200px'}}>
                <form className="form-horizontal" onSubmit={handleSubmit} >
                <fieldset>
                    <legend>
                    <div className="row">
                        <div className="col-md-10">
                        <h4>Welcome : <font color="#025198"><strong>{fname} {lname}</strong></font></h4>
                        </div>
                        <div className="col-md-2">
                        <a href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/layout" className="btn btn-sm btn-success pull-right" onClick={() => window.location.href = "http://localhost:3000/"}>Logout</a>
                        </div>
                    </div>
                    </legend>

                    <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#6739bb' }}>3. Employment Details</h4>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-success">
                        <div className="panel-heading">(A) Present Employment</div>
                        <div className="panel-body">
                            <div className="form-group">
                            <label className="col-md-2 control-label" htmlFor="pres_emp_position">Position</label>
                            <div className="col-md-4">
                                <input id="pres_emp_position" name="pres_emp_position" type="text" placeholder="Position" className="form-control input-md" value={presentEmployment.position} onChange={handlePresentEmploymentChange} required />
                            </div>

                            <label className="col-md-2 control-label" htmlFor="pres_emp_employer">Organization/Institution</label>
                            <div className="col-md-4">
                                <input id="pres_emp_employer" name="pres_emp_employer" type="text" placeholder="Organization/Institution" className="form-control input-md" value={presentEmployment.employer} onChange={handlePresentEmploymentChange} />
                            </div>
                            </div>

                            <div className="form-group">
                            <label className="col-md-2 control-label" htmlFor="pres_status">Status</label>
                            <div className="col-md-4">
                                <select id="pres_status" name="pres_status" className="form-control input-md" value={presentEmployment.status} onChange={handlePresentEmploymentChange} required>
                                <option value="">Select</option>
                                <option value="Central Govt.">Central Govt.</option>
                                <option value="State Government">State Government</option>
                                <option value="Private">Private</option>
                                <option value="Quasi Govt.">Quasi Govt.</option>
                                <option value="Other">Other</option>
                                </select>
                            </div>

                            
                                <label className="col-md-2 control-label" htmlFor="pres_emp_doj">Date of Joining</label>
                                <div className="col-md-4">
                                <input id="pres_emp_doj" className="form-control input-md" name="pres_emp_doj" type="text" placeholder="Date of Joining" value={presentEmployment.doj} onChange={setPresentEmployment} required />
                                </div>
                                </div>
                                
                                <div className="form-group">
                                <label className="col-md-2 control-label" htmlFor="pres_emp_dol">Date of Leaving <br />(Mention Continue if working)</label>
                                <div className="col-md-4">
                                <input id="pres_emp_dol" className="form-control input-md" name="pres_emp_dol" type="text" placeholder="Date of Leaving" value={presentEmployment.dol} onChange={setPresentEmployment} required />
                                </div>
                            <label className="col-md-2 control-label" htmlFor="pres_emp_duration">Duration (in years & months)</label>
                            <div className="col-md-4">
                                <input id="pres_emp_duration" className="form-control input-md" name="pres_emp_duration" type="text" placeholder="Duration"  value={presentEmployment.duration} onChange={handlePresentEmploymentChange} required />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-success">
                        <div className="panel-heading">(B) Employment History (After PhD, Starting with Latest) <button type="button" className="btn btn-sm btn-danger" id="add_more_exp" onClick={handleAddExperienceRow}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {experienceDetails.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`exp_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`exp_position_${index}`} name="position" type="text" placeholder="Position" className="form-control input-md" value={detail.position} onChange={(e) => handleExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`exp_employer_${index}`} name="employer" type="text" placeholder="Organization/Institution" className="form-control input-md" value={detail.employer} onChange={(e) => handleExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`exp_doj_${index}`} name="doj" type='text' className="form-control input-md" value={detail.doj} placeholder="Date of Joining" onChange={(e) => handleExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`exp_dol_${index}`} name="dol" type='text' className="form-control input-md" placeholder="Date of Leaving" value={detail.dol} onChange={(e) => handleExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`exp_duration_${index}`} name="duration" type="text" placeholder="Duration" className="form-control input-md" value={detail.duration} onChange={(e) => handleExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveExperienceRow(index)}>Remove</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-success">
                        <div className="panel-heading">(C) Teaching Experience (After PhD) <button type="button" className="btn btn-sm btn-danger" id="add_more_t_exp" onClick={handleAddTeachingExperienceRow}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="t_exp">
                                {teachingExperience.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`t_exp_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_position_${index}`} name="position" type="text" placeholder="Position" className="form-control input-md" value={detail.position} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_employer_${index}`} name="employer" type="text" placeholder="Employer" className="form-control input-md" value={detail.employer} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_course_${index}`} name="course" type="text" placeholder="Courses" className="form-control input-md" value={detail.course} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_ugpg_${index}`} name="ugpg" type="text" placeholder="UG/PG" className="form-control input-md" value={detail.ugpg} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_no_students_${index}`} name="no_students" type="text" placeholder="No. of Students" className="form-control input-md" value={detail.no_students} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_doj_${index}`} className="form-control input-md" type='text' name="doj" placeholder="Date of Joining" value={detail.doj} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_dol_${index}`} className="form-control input-md" type='text' name="dol" placeholder="Date of Leaving" value={detail.dol} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`t_exp_duration_${index}`} name="duration" type="text" placeholder="Duration" className="form-control input-md" value={detail.duration} onChange={(e) => handleTeachingExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveTeachingExperienceRow(index)}>Remove</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-success">
                        <div className="panel-heading">(D) Research Experience (Post PhD, including Post Doctoral) <button type="button" className="btn btn-sm btn-danger" id="add_more_r_exp" onClick={handleAddResearchExperienceRow}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {researchExperience.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`r_exp_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`r_exp_position_${index}`} name="position" type="text" placeholder="Position" className="form-control input-md" value={detail.position} onChange={(e) => handleResearchExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`r_exp_employer_${index}`} name="employer" type="text" placeholder="Institute" className="form-control input-md" value={detail.employer} onChange={(e) => handleResearchExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`r_exp_supervisor_${index}`} name="supervisor" type="text" placeholder="Supervisor" className="form-control input-md" value={detail.supervisor} onChange={(e) => handleResearchExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`r_exp_doj_${index}`} name="doj" value={detail.doj} type='text' className="form-control input-md" placeholder="Date of Joining" onChange={(e) => handleResearchExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`r_exp_dol_${index}`} name="dol" value={detail.dol} type='text' className="form-control input-md" placeholder="Date of Leaving" onChange={(e) => handleResearchExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`r_exp_duration_${index}`} name="duration" type="text" placeholder="Duration" className="form-control input-md" value={detail.duration} onChange={(e) => handleResearchExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveResearchExperienceRow(index)}>Remove</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-success">
                        <div className="panel-heading">(E) Industrial Experience <button type="button" className="btn btn-sm btn-danger" id="add_more_i_exp" onClick={handleAddIndustrialExperienceRow}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {industrialExperience.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`i_exp_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`i_exp_organization_${index}`} name="organization" type="text" placeholder="Organization" className="form-control input-md" value={detail.organization} onChange={(e) => handleIndustrialExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_exp_industrial_${index}`} name="work" type="text" placeholder="Work Profile" className="form-control input-md" value={detail.work} onChange={(e) => handleIndustrialExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_exp_doj_${index}`} name="doj" placeholder="Date of Joining" type='text' className="form-control input-md" value={detail.doj} onChange={(e) => handleIndustrialExperienceChange(index,e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_exp_dol_${index}`} name="dol" value={detail.dol} type='text' className="form-control input-md" placeholder="Date of Leaving" onChange={(e) => handleIndustrialExperienceChange(index,e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_exp_duration_${index}`} name="duration" type="text" placeholder="Duration" className="form-control input-md" value={detail.duration} onChange={(e) => handleIndustrialExperienceChange(index, e)} required />
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveIndustrialExperienceRow(index)}>Remove</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    

                    <h4 style={{textAlign:'center', fontWeight: 'bold', color: '#6739bb'}}>4. Area(s) of Specialization and Current Area(s) of Research</h4>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="panel panel-success">
                        <div class="panel-body">
                            <strong>Areas of specialization</strong>
                            <textarea style={{height:'150px'}} placeholder="Areas of specialization" class="form-control input-md" name="area_spl" maxlength="500" onChange={(e)=> setAreasOfSpecialization(e.target.value)} value={areasOfSpecialization} required=""></textarea>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="panel panel-success">
                        <div class="panel-body">
                            <strong>Current Area of research</strong>
                            <textarea style={{height:'150px'}} type='text' placeholder="Current Area of research" class="form-control input-md" name="area_rese" maxlength="500" onChange={(e) => setCurrentAreasOfResearch(e.target.value)} value={currentAreasOfResearch} required=""></textarea>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-md-11">
                    <button id="back" type="back" name="back" value="Back" class="btn btn-success pull-left" onClick={handleBack}>BACK</button>
                    </div>
                    
                    <div class="col-md-11">
                        <button id="submit" type="submit" name="submit" value="Submit" class="btn btn-success pull-right" style={{marginLeft: '75%'}}>SAVE & NEXT</button>
                    </div>

                    
                    </div>
                    </fieldset>
                    </form>
                    </div>
                    </body>
                    </html>
  );
}

export default EmploymentDetails;

