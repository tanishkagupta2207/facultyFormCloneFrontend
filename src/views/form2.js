import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AcademicDetails = () => {
    
  const navigate = useNavigate(); 
  const [fname,setFName] = useState('');
  const [lname,setLName] = useState('');
  const { userId } = useParams();

  const [phdDetails, setPhdDetails] = useState({
    college: '',
    stream: '',
    supervisor: '',
    yoj: '',
    dod: '',
    doa: '',
    title: '',
  });

  const [pgDetails, setPgDetails] = useState([
    {
      degree: '',
      college: '',
      subjects: '',
      yoj: '',
      yog: '',
      duration: '',
      perce: '',
      rank: '',
    },
  ]);

  const [ugDetails, setUgDetails] = useState([
    {
      degree: '',
      college: '',
      subjects: '',
      yoj: '',
      yog: '',
      duration: '',
      perce: '',
      rank: '',
    },
  ]);

  const [schoolDetails, setSchoolDetails] = useState([
    {
      type: '12th/HSC/Diploma',
      school: '',
      passingYear: '',
      perce: '',
      rank: '',
    },
    {
      type: '10th',
      school: '',
      passingYear: '',
      perce: '',
      rank: '',
    },
  ]);

  const [additionalDetails, setAdditionalDetails] = useState([
    {
      degree: '',
      college: '',
      subjects: '',
      yoj: '',
      yog: '',
      duration: '',
      perce: '',
      rank: '',
    },
  ]);

  const handlePhdChange = (e) => {
    setPhdDetails({ ...phdDetails, [e.target.name]: e.target.value });
  };

  const handlePgChange = (index, e) => {
    const values = [...pgDetails];
    values[index][e.target.name] = e.target.value;
    setPgDetails(values);
  };

  const handleUgChange = (index, e) => {
    const values = [...ugDetails];
    values[index][e.target.name] = e.target.value;
    setUgDetails(values);
  };

  const handleSchoolChange = (index, e) => {
    const values = [...schoolDetails];
    values[index][e.target.name] = e.target.value;
    setSchoolDetails(values);
  };

  const handleAdditionalChange = (index, e) => {
    const values = [...additionalDetails];
    values[index][e.target.name] = e.target.value;
    setAdditionalDetails(values);
  };

  const handleAdditionalRow = () => {
    setAdditionalDetails([...additionalDetails, {
      degree: '',
      college: '',
      subjects: '',
      yoj: '',
      yog: '',
      duration: '',
      perce: '',
      rank: '',
    }]);
  };

  const handleRemoveAdditionalRow = (index) => {
    const values = [...additionalDetails];
    values.splice(index, 1);
    setAdditionalDetails(values);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/form2/${userId}`);
      const {data1,data2,data3, data4, data5, data6, data7, data8} = response.data;
      setAdditionalDetails(data1);
      setPgDetails(data2);
      setPhdDetails(data3);
      setSchoolDetails(data4, data5);
      setUgDetails(data6);
      setFName(data7);
      setLName(data8);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/form2/${userId}`, phdDetails, additionalDetails, schoolDetails, ugDetails, pgDetails);
      console.log(response.data);
      if(response.data.message){
        alert(response.data.message);
        if(response.data.message !== 'Successful'){
          window.location.reload();
        }
        else{
          navigate(`/form3/${userId}`);
        }
      }
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  const handleBack = async(e) => {
    e.preventDefault();
    try {
      navigate(`/form1/${userId}`);
    }
    catch(error){
      navigate(`/form1/${userId}`);
    }
  }

  return (
    <div>
    <html>
        <head>
            <title>Academic Details</title>
            <link rel="stylesheet" type="text/css" href="https://ofa.iiti.ac.in/facrec_che_2023_july_02/images/favicon.ico"/>
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
        
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 well">
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <fieldset>
                <legend>
                    <div className="row">
                    <div className="col-md-10">
                        <h4>Welcome : <font color="#025198"><strong>{fname} {lname}</strong></font></h4>
                    </div>
                    <div className="col-md-2">
                        <button type="button" style={{backgroundColor: '#5cb85c', color: '#fff'}} className="btn btn-sm btn-successpull-right" onClick={() => window.location.href = "http://localhost:3000/"}>Logout</button>
                    </div>
                    </div>
                </legend>

                <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#6739bb' }}>2. Educational Qualifications</h4>

                <div className="row">
                    <div className="col-md-12">
                    <div className="panel panel-success">
                        <div className="panel-heading">(A) Details of PhD *</div>
                        <div className="panel-body">
                        <div className="form-group">
                            <label className="col-md-2 control-label" htmlFor="college_phd">University/Institute</label>
                            <div className="col-md-4">
                            <input id="college_phd" name="college" type="text" placeholder="University/Institute" className="form-control input-md" value={phdDetails.college} onChange={handlePhdChange} required />
                            </div>

                            <label className="col-md-2 control-label" htmlFor="stream">Department</label>
                            <div className="col-md-4">
                            <input id="stream" name="stream" type="text" placeholder="Department" className="form-control input-md" value={phdDetails.stream} onChange={handlePhdChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-2 control-label" htmlFor="supervisor">Name of PhD Supervisor</label>
                            <div className="col-md-4">
                            <input id="supervisor" name="supervisor" type="text" placeholder="Name of Ph. D. Supervisor" className="form-control input-md" value={phdDetails.supervisor} onChange={handlePhdChange} required />
                            </div>
                    
                            <label className="col-md-2 control-label" htmlFor="yoj_phd">Year of Joining</label>
                            <div className="col-md-4">
                            <input id="yoj_phd" name="yoj" type="text" placeholder="Year of Joining" className="form-control input-md" value={phdDetails.yoj} onChange={handlePhdChange} required />
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                            <label className="col-md-2 control-label" htmlFor="dod_phd">Date of Successful Thesis Defence</label>
                            <div className="col-md-4">
                                <input id="dod_phd" name="dod" type="text" value={phdDetails.dod} className="form-control input-md" placeholder="Date of Defence" onChange={handlePhdChange} required />
                            </div>

                            <label className="col-md-2 control-label" htmlFor="doa_phd">Date of Award</label>
                            <div className="col-md-4">
                                <input id="doa_phd" name="doa" type="text" value={phdDetails.doa} className="form-control input-md" placeholder="Date of Award" onChange={handlePhdChange} required />
                            </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-2 control-label" htmlFor="phd_title">Title of PhD Thesis</label>
                            <div className="col-md-10">
                            <input id="phd_title" name="title" type="text" placeholder="Title of PhD Thesis" className="form-control input-md" value={phdDetails.title} onChange={handlePhdChange} required />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <div className="panel panel-success">
                        <div className="panel-heading">(B) Academic Details - M. Tech./ M.E./ PG Details</div>
                        <div className="panel-body">
                        {pgDetails.map((detail, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`pg_degree_${index}`}>Degree/Certificate</label>
                                    <div className="col-md-4">
                                        <input id={`pg_degree_${index}`} name="degree" type="text" placeholder="Degree/Certificate" className="form-control input-md" value={detail.degree} onChange={(e) => handlePgChange(index, e)} />
                                    </div>

                                    <label className="col-md-2 control-label" htmlFor={`pg_college_${index}`}>University/Institute</label>
                                    <div className="col-md-4">
                                        <input id={`pg_college_${index}`} name="college" type="text" placeholder="University/Institute" className="form-control input-md" value={detail.college} onChange={(e) => handlePgChange(index, e)} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`pg_subjects_${index}`}>Branch/Stream</label>
                                    <div className="col-md-4">
                                        <input id={`pg_subjects_${index}`} name="subjects" type="text" placeholder="Branch/Stream" className="form-control input-md" value={detail.subjects} onChange={(e) => handlePgChange(index, e)} />
                                    </div>

                                    <label className="col-md-2 control-label" htmlFor={`pg_yoj_${index}`}>Year of Joining</label>
                                    <div className="col-md-4">
                                        <input id={`pg_yoj_${index}`} name="yoj" type="text" placeholder="Year of Joining" className="form-control input-md" value={detail.yoj} onChange={(e) => handlePgChange(index, e)} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`pg_yog_${index}`}>Year of Completion</label>
                                    <div className="col-md-4">
                                        <input id={`pg_yog_${index}`} name="yog" type="text" placeholder="Year of Completion" className="form-control input-md" value={detail.yog} onChange={(e) => handlePgChange(index, e)} />
                                    </div>

                                    <label className="col-md-2 control-label" htmlFor={`pg_duration_${index}`}>Duration (in years)</label>
                                    <div className="col-md-4">
                                        <input id={`pg_duration_${index}`} name="duration" type="text" placeholder="Duration" className="form-control input-md" value={detail.duration} onChange={(e) => handlePgChange(index, e)} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`pg_perce_${index}`}>Percentage/ CGPA</label>
                                    <div className="col-md-4">
                                        <input id={`pg_perce_${index}`} name="perce" type="text" placeholder="Percentage/ CGPA" className="form-control input-md" value={detail.perce} onChange={(e) => handlePgChange(index, e)} />
                                    </div>
                                    <label className="col-md-2 control-label" htmlFor={`pg_rank_${index}`}>Division/Class</label>
                                    <div className="col-md-4">
                                        <input id={`pg_rank_${index}`} name="rank" type="text" placeholder="Division/Class" className="form-control input-md" value={detail.rank} onChange={(e) => handlePgChange(index, e)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <div className="panel panel-success">
                        <div className="panel-heading">(C) Academic Details - B. Tech /B.E. / UG Details *</div>
                        <div className="panel-body">
                        {ugDetails.map((detail, index) => (
                            <div key={index}>
                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`ug_degree_${index}`}>Degree/Certificate</label>
                                    <div className="col-md-4">
                                        <input id={`ug_degree_${index}`} name="degree" type="text" placeholder="Degree/Certificate" className="form-control input-md" value={detail.degree} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>

                                    <label className="col-md-2 control-label" htmlFor={`ug_college_${index}`}>University/Institute</label>
                                    <div className="col-md-4">
                                        <input id={`ug_college_${index}`} name="college" type="text" placeholder="University/Institute" className="form-control input-md" value={detail.college} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`ug_subjects_${index}`}>Branch/Stream</label>
                                    <div className="col-md-4">
                                        <input id={`ug_subjects_${index}`} name="subjects" type="text" placeholder="Branch/Stream" className="form-control input-md" value={detail.subjects} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>

                                    <label className="col-md-2 control-label" htmlFor={`ug_yoj_${index}`}>Year of Joining</label>
                                    <div className="col-md-4">
                                        <input id={`ug_yoj_${index}`} name="yoj" type="text" placeholder="Year of Joining" className="form-control input-md" value={detail.yoj} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`ug_yog_${index}`}>Year of Completion</label>
                                    <div className="col-md-4">
                                        <input id={`ug_yog_${index}`} name="yog" type="text" placeholder="Year of Completion" className="form-control input-md" value={detail.yog} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>
                                    <label className="col-md-2 control-label" htmlFor={`ug_duration_${index}`}>Duration (in years)</label>
                                    <div className="col-md-4">
                                        <input id={`ug_duration_${index}`} name="duration" type="text" placeholder="Duration" className="form-control input-md" value={detail.duration} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" htmlFor={`ug_perce_${index}`}>Percentage/ CGPA</label>
                                    <div className="col-md-4">
                                        <input id={`ug_perce_${index}`} name="perce" type="text" placeholder="Percentage/ CGPA" className="form-control input-md" value={detail.perce} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>

                                    <label className="col-md-2 control-label" htmlFor={`ug_rank_${index}`}>Division/Class</label>
                                    <div className="col-md-4">
                                        <input id={`ug_rank_${index}`} name="rank" type="text" placeholder="Division/Class" className="form-control input-md" value={detail.rank} onChange={(e) => handleUgChange(index, e)} required />
                                    </div>
                                </div>
                            </div>
                        ))}

                        </div>
                    </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <div className="panel panel-success">
                        <div className="panel-heading">(D) Academic Details - School *</div>
                        <div className="panel-body">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th className="col-md-3">10th/12th/HSC/Diploma</th>
                                <th className="col-md-3">School</th>
                                <th className="col-md-1">Year of Passing</th>
                                <th className="col-md-2">Percentage/ Grade</th>
                                <th className="col-md-2">Division/Class</th>
                            </tr>
                            </thead>
                            <tbody>
                            {schoolDetails.map((detail, index) => (
                                <tr key={index}>
                                <td>
                                    <input id={`school_type_${index}`} name="type" type="text" value={detail.type} placeholder="" className="form-control input-md" readOnly required />
                                </td>

                                <td>
                                    <input id={`school_name_${index}`} name="school" type="text" placeholder="School" className="form-control input-md" value={detail.school} onChange={(e) => handleSchoolChange(index, e)} required />
                                </td>

                                <td>
                                    <input id={`school_passing_year_${index}`} name="passingYear" type="text" placeholder="Passing Year" className="form-control input-md" value={detail.passingYear} onChange={(e) => handleSchoolChange(index, e)} required />
                                </td>

                                <td>
                                    <input id={`school_perce_${index}`} name="perce" type="text" placeholder="Percentage/Grade" className="form-control input-md" value={detail.perce} onChange={(e) => handleSchoolChange(index, e)} required />
                                </td>

                                <td>
                                    <input id={`school_rank_${index}`} name="rank" type="text" placeholder="Percentage/Grade" className="form-control input-md" value={detail.rank} onChange={(e) => handleSchoolChange(index, e)} required />
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
                    <div className="panel-heading">
                        (E) Additional Educational Qualification (If any) 
                        <div className="form-group" style={{ display: 'inline-block', marginLeft: '10px' }}>
                            <button type="button" className="btn btn-sm btn-danger" onClick={handleAdditionalRow}>Add More</button>
                        </div>
                    </div>

                        <div className="panel-body">
                        <table className="table table-bordered">
                            <tbody>
                            {additionalDetails.map((detail, index) => (
                                <tr key={index}>
                                <td>
                                    <input id={`additional_degree_${index}`} name="degree" type="text" placeholder="Degree/Certificate" className="form-control input-md" value={detail.degree} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_college_${index}`} name="college" type="text" placeholder="University/Institute" className="form-control input-md" value={detail.college} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_subjects_${index}`} name="subjects" type="text" placeholder="Branch/Stream" className="form-control input-md" value={detail.subjects} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_yoj_${index}`} name="yoj" type="text" placeholder="Year of Joining" className="form-control input-md" value={detail.yoj} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_yog_${index}`} name="yog" type="text" placeholder="Year of Completion" className="form-control input-md" value={detail.yog} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_duration_${index}`} name="duration" type="text" placeholder="Duration (in years)" className="form-control input-md" value={detail.duration} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_perce_${index}`} name="perce" type="text" placeholder="Percentage/ CGPA" className="form-control input-md" value={detail.perce} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <input id={`additional_rank_${index}`} name="rank" type="text" placeholder="Division/Class" className="form-control input-md" value={detail.rank} onChange={(e) => handleAdditionalChange(index, e)} />
                                </td>

                                <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveAdditionalRow(index)}>Remove</button>
                                </td>
                                </tr>
                            ))}
                            
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div><div className="form-group">
                <div className="col-md-11">
                    <button id="back" type="back" name="back" value="Back" className="btn btn-success pull-left"> onClick= {handleBack}BACK</button>
                    </div>

                    <div className="col-md-11">
                    <button id="submit" type="submit" name="submit" value="Submit" className="btn btn-success pull-right">SAVE & NEXT</button>
                    </div>
                </div>
                </fieldset>
            </form>
            </div>
        </div>
        </div>
        </body>
    </html>
    </div>
  );
}

export default AcademicDetails;