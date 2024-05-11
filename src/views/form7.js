import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RelInfo = () => {
  const [researchStatement, setResearchStatement] = useState('');
  const [teachingStatement, setTeachingStatement] = useState('');
  const [relIn, setRelIn] = useState('');
  const [profServ, setProfServ] = useState('');
  const [jourDetails, setJourDetails] = useState('');
  const [confDetails, setConfDetails] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const { userId } = useParams();
  const navigate = useNavigate(); 
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/form7/${userId}`);
      const {data1, data2, data3, data4, data5, data6, fname, lname} = response.data;
      setResearchStatement(data1);
      setTeachingStatement(data2);
      setRelIn(data3);
      setProfServ(data4);
      setJourDetails(data5);
      setConfDetails(data6);
      setFName(fname);
      setLName(lname);
      
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
    //   console.log(presentEmployment);
      const response = await axios.post(`http://localhost:5000/api/form7/${userId}`, {researchStatement, teachingStatement, relIn, profServ,jourDetails, confDetails});
      console.log(response);
      if(response.data){
        alert(response.data.message);
        if(response.data.message !== 'Successful'){
        }
        else{
          navigate(`/submit/${userId}`);
        }
      }
    } catch (error) {
      console.error('Login error:', error.response);
    }
  };

  const handleBack = async(e) => {
    e.preventDefault();
    try {
      navigate(`/form4/${userId}`);
    }
    catch(error){
      navigate(`/form4/${userId}`);
    }
  }

  return (
 
<html>
<head>
	<title>Publication Details</title>
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
    <div>
      
      <div className="container-fluid" style={{ backgroundColor: '#f7ffff', marginBottom: '10px' }}>
        <div className="container">
          <div className="row" style={{ marginBottom: '10px' }}>
            <div className="col-md-8 col-md-offset-2">
              <h3 style={{ textAlign: 'center', color: '#414002!important', fontWeight: 'bold', fontSize: '2.3em', fontFamily: 'Noto Sans', marginTop: '3px' }}>भारतीय प्रौद्योगिकी संस्थान पटना</h3>
              <h3 style={{ textAlign: 'center', color: '#414002!important', fontWeight: 'bold', fontFamily: 'Oswald', fontSize: '2.2em', marginTop: '0px' }}>Indian Institute of Technology Patna</h3>
            </div>
          </div>
        </div>
      </div>
      <h3 style={{ color: '#e10425', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Noto Serif', fontSize: '1.5em' }}>Application for Faculty Position</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-8 well">
            <form className="form-horizontal" action="" method="post" encType="multipart/form-data">
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
                </fieldset>
                </form>
                </div>
                </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <div className="panel panel-success">
          <div className="panel-heading"style={{ fontWeight: 'bold' }}>14. Significant research contribution and future plans *&nbsp;&nbsp;
              <div className="panel-body">
          <textarea
            id="research_statement"
            name="research_statement"
            className="form-control"
            rows="4.5"
            required = {true}
            value={researchStatement}
            onChange={(e) => setResearchStatement(e.target.value)}
          ></textarea>
        </div>
        </div>
        </div>
        </div>
        <div className="form-group">
        <div className="panel panel-success">
          <div className="panel-heading"style={{ fontWeight: 'bold' }}>15. Significant teaching contribution and future plans * &nbsp;&nbsp;
              <div className="panel-body">
          {/* <label htmlFor="teaching_statement"></label> */}
          <textarea
            id="teaching_statement"
            name="teaching_statement"
            className="form-control"
            rows="4.5"
            required = {true}
            value={teachingStatement}onChange={(e) => setTeachingStatement(e.target.value)}
          ></textarea>
          </div>
          </div>
          </div>
        </div>
        <div className="form-group">
        <div className="panel panel-success">
          <div className="panel-heading"style={{ fontWeight: 'bold' }}>16. Any other relevant information. * &nbsp;&nbsp;
              <div className="panel-body">
          {/* <label htmlFor="rel_in"></label> */}
          <textarea
            id="rel_in"
            name="rel_in"
            className="form-control"
            rows="4.5"
            required = {true}
            value={relIn}
            onChange={(e) => setRelIn(e.target.value)}
          ></textarea>
        </div>
        </div>
        </div>
        </div>
        <div className="form-group">
        <div className="panel panel-success">
          <div className="panel-heading"style={{ fontWeight: 'bold' }}>17. Professional Service : Editorship/Reviewership * &nbsp;&nbsp;
              <div className="panel-body">
          {/* <label htmlFor="prof_serv"></label> */}
          <textarea
            id="prof_serv"
            name="prof_serv"
            className="form-control"
            rows="4.5"
            required = {true}
            value={profServ}
            onChange={(e) => setProfServ(e.target.value)}
          ></textarea>
        </div>
        </div>
        </div>
        </div>
        <div className="form-group">
        <div className="panel panel-success">
          <div className="panel-heading"style={{ fontWeight: 'bold' }}>18. Detailed List of Journal Publications * &nbsp;&nbsp;
              <div className="panel-body">
          {/* <label htmlFor="jour_details"></label> */}
          <textarea
            id="jour_details"
            name="jour_details"
            className="form-control"
            rows="4.5"
            required = {true}
            value={jourDetails}
            onChange={(e) => setJourDetails(e.target.value)}
          ></textarea>
        </div>
        </div>
        </div>
        </div>
        <div className="form-group">
        <div className="panel panel-success">
          <div className="panel-heading"style={{ fontWeight: 'bold' }}>19. Detailed List of Conference Publications * &nbsp;&nbsp;
              <div className="panel-body">
          <label htmlFor="conf_details"></label>
          <textarea
            id="conf_details"
            name="conf_details"
            className="form-control"
            rows="4.5"
            value={confDetails}
            required = {true}
            onChange={(e) => setConfDetails(e.target.value)}
          ></textarea>
        </div>
        </div>
        </div>
        </div>
        <button type="submit" className="btn btn-success pull-right">SAVE & NEXT</button>
        <div className="col-md-11">
                    <button id="back" type="back" name="back" value="Back" className="btn btn-success pull-left" onClick= {handleBack}>BACK</button>
                  </div>
      </form>

      {/* <div id="footer"></div> */}
      </div>
      </div>
      </body>
    </html>
  );
};

export default RelInfo;