import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PublicationDetails = () => {
    
  const navigate = useNavigate(); 
  const [fname,setFName] = useState('');
  const [lname,setLName] = useState('');
  const { userId } = useParams();
  const [gschlink, setGschlink] = useState('');
  const [summaryOfPublication, setSummaryOfPublication] = useState({
      noIntlJour: '',
      noNntlJour: '',
      noIntlConf: '',
      noNntlConf: '',
      noPat: '',
      noBooks: '',
      noBookChap: ''
    });

  const [tenBestPub, setTenBestPub] = useState([
    {
      author: '',
      title: '',
      name: '',
      year: '',
      impact: '',
      doi: '',
      status: ''
    },
  ]);
  const [patents, setPatents] = useState([
    {
      author: '',
      title: '',
      country: '',
      number: '',
      dof: '',
      dop: '',
      status: ''
    },
  ]);
  const [book, setBook] = useState([
    {
      author: '',
      title: '',
      year: '',
      isbn: ''
    },
  ]);
  const [bookChap, setBookChap] = useState([
    {
      author: '',
      title: '',
      year: '',
      isbn: ''
    },
  ]);

  const handleBookChap = (index, e) => {
    const values = [...bookChap];
    values[index][e.target.name] = e.target.value;
    setBookChap(values);
  };
  const handleBook = (index, e) => {
    const values = [...book];
    values[index][e.target.name] = e.target.value;
    setBook(values);
  };
  const handlePatents = (index, e) => {
    const values = [...patents];
    values[index][e.target.name] = e.target.value;
    setPatents(values);
  };
  const handleTenBestPub = (index, e) => {
    const values = [...tenBestPub];
    values[index][e.target.name] = e.target.value;
    setTenBestPub(values);
  };

  const handleSummaryOfPublication = (e)=>{
    console.log(e);
    setSummaryOfPublication({...summaryOfPublication,[e.target.name]: e.target.value});
  };

  const handleAddTenBestPub = () => {
    setTenBestPub([...tenBestPub, {
        author: '',
        title: '',
        name: '',
        year: '',
        impact: '',
        doi: '',
        status: ''
    }]);
  };

  const handleRemoveTenBestPub = (index) => {
    const values = [...tenBestPub];
    values.splice(index, 1);
    setTenBestPub(values);
  };

  const handleAddPatent = () => {
    setPatents([...patents, {
      inventor: '',
      title: '',
      country: '',
      number: '',
      dof: '',
      dop: '',
      status: ''
    }]);
  };

  const handleRemovePatents = (index) => {
    const values = [...patents];
    values.splice(index, 1);
    setPatents(values);
  };

  const handleAddBook = () => {
    setBook([...book, {
        author: '',
        title: '',
        year: '',
        ISBN: ''
    }]);
  };

  const handleRemoveBook = (index) => {
    const values = [...book];
    values.splice(index, 1);
    setBook(values);
  };

  const handleAddBookChap = () => {
    setBookChap([...bookChap, {
        author: '',
        title: '',
        year: '',
        ISBN: ''
    }]);
  };

  const handleRemoveBookChap = (index) => {
    const values = [...bookChap];
    values.splice(index, 1);
    setBookChap(values);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/form4/${userId}`);
      const {data1, data2, data3, data4, data5, gschlink, fname, lname} = response.data;
      setSummaryOfPublication(data1);
      setTenBestPub(data2);
      setPatents(data3);
      setBook(data4);
      setBookChap(data5);
      setGschlink(gschlink);
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
    console.log(summaryOfPublication);
    console.log(patents);
    try {
      const response = await axios.post(`http://localhost:5000/api/form4/${userId}`, {summaryOfPublication, tenBestPub, patents, book, bookChap, gschlink});
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
  };

  const handleBack = async(e) => {
    e.preventDefault();
    try {
      navigate(`/form3/${userId}`);
    }
    catch(error){
      navigate(`/form3/${userId}`);
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
                      <button type="button" className="btn btn-sm btn-success pull-right">Logout</button>
                    </div>
                  </div>
                </legend>

                <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#6739bb' }}>5. Summary of Publications *</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-success">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-5 control-label" for="summary_journal_inter">Number of International Journal Papers</div>
                          <div className="col-md-1">
                            <input id="summary_journal_inter" value={summaryOfPublication.noIntlJour} name="noIntlJour" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)} />
                          </div>
                          <div className="col-md-5 control-label" for="summary_journal">Number of National Journal Papers</div>
                          <div className="col-md-1">
                            <input id="summary_journal" value={summaryOfPublication.noNntlJour} name="noNntlJour" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 control-label" for="summary_conf_inter">Number of International Conference Papers</div>
                          <div className="col-md-1">
                            <input id="summary_conf_inter" value={summaryOfPublication.noIntlConf} name="noIntlConf" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)}/>
                          </div>
                          <div className="col-md-5 control-label" for="summary_conf_national">Number of National Conference Papers</div>
                          <div className="col-md-1">
                            <input id="summary_conf_national" value={summaryOfPublication.noNntlConf} name="noNntlConf" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 control-label" for="patent_publish">Number of Patent(s) [Filed, Published, Granted] </div>
                          <div className="col-md-1">
                            <input id="patent_publish" value={summaryOfPublication.noPat} name="noPat" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)}/>
                          </div>
                          <div className="col-md-5 control-label" for="summary_book">Number of Book(s) </div>
                          <div className="col-md-1">
                            <input id="summary_book" value={summaryOfPublication.noBooks} name="noBooks" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5 control-label" for="summary_book_chapter">Number of Book Chapter(s)</div>
                          <div className="col-md-1">
                            <input id="summary_book_chapter" value={summaryOfPublication.noBookChap} name="noBookChap" type="text" placeholder="" className="form-control input-md" required="" maxLength="3" onChange={(e) => handleSummaryOfPublication(e)}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#6739bb' }}>6. List of 10 Best Publications (Journal/Conference)</h4>
                        <div className="panel panel-success">
                        <div className="panel-heading">List of 10 Best Publications (Journal/Conference) &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-sm btn-danger" id="add_more_i_exp" onClick={handleAddTenBestPub}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {tenBestPub.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`i_tbp_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`i_tbp_author_${index}`} name="author" type="text" placeholder="Author" className="form-control input-md" value={tenBestPub.author} onChange={(e) => handleTenBestPub(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_tbp_title_${index}`} name="title" type="text" placeholder="Title" className="form-control input-md" value={tenBestPub.title} onChange={(e) => handleTenBestPub(index, e)} required />
                                    </td>
                                    <td>
                                    <input id={`i_tbp_name_${index}`} name="name" placeholder="Name of Journal" className="form-control input-md" selected={tenBestPub.name} onChange={(e) => handleTenBestPub(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_tbp_year_${index}`} name="year" value={tenBestPub.year} className="form-control input-md" placeholder="Year of Publication" onChange={(e) => handleTenBestPub(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_tbp_impact_${index}`} name="impact" type="text" placeholder="Impact" className="form-control input-md" value={tenBestPub.impact} onChange={(e) => handleTenBestPub(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_tbp_doi_${index}`} name="doi" type="text" placeholder="DOI" className="form-control input-md" value={tenBestPub.doi} onChange={(e) => handleTenBestPub(index, e)} required />
                                    </td>

                                    <td className="col-md-2">
                                        <select id={`i_tbp_status_${index}`} name="status" value={tenBestPub.status} className="form-control input-md" required="" onChange={(e) => handleTenBestPub(index,e)}>
                                        <option value="">Select</option>
                                        <option value="published">Published</option>
                                        <option value="accepted">Accepted</option>
                                        </select>
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={handleRemoveTenBestPub} >Remove</button>
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
                    <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#6739bb' }}>7. List of  Patent(s), Book(s), Book Chapter(s)</h4>
                        <div className="panel panel-success">
                        <div className="panel-heading">(A) Patent(s)&nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-sm btn-danger" id="add_more_i_exp" onClick={handleAddPatent}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {patents.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`i_p_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`i_p_author_${index}`} name="author" type="text" placeholder="Author" className="form-control input-md" value={patents.author} onChange={(e) => handlePatents(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_p_title_${index}`} name="title" type="text" placeholder="Title of Patent" className="form-control input-md" value={patents.title} onChange={(e) => handlePatents(index, e)} required />
                                    </td>
                                    <td>
                                    <input id={`i_p_name_${index}`} name="country" className="form-control input-md" placeholder="Country of Patent" value={patents.country} onChange={(e) => handlePatents(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_p_year_${index}`} name="number" value={patents.number} className="form-control input-md" placeholder="Patent Number" onChange={(e) => handlePatents(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_p_impact_${index}`} name="dof" type="text" placeholder="Date of Filing" className="form-control input-md" value={patents.dof} onChange={(e) => handlePatents(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_p_doi_${index}`} name="dop" type="text" placeholder="Date of Publication" className="form-control input-md" value={patents.dop} onChange={(e) => handlePatents(index, e)} required />
                                    </td>

                                    <td className="col-md-2">
                                        <select id={`i_p_status_${index}`} name="status" value={patents.status} className="form-control input-md" required="" onChange={(e) => handlePatents(index,e)}>
                                        <option value="">Select</option>
                                        <option value="published">Published</option>
                                        <option value="accepted">Accepted</option>
                                        </select>
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={handleRemovePatents} >Remove</button>
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
                        <div className="panel-heading">(B) Book(s) &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-sm btn-danger" id="add_more_i_exp" onClick={handleAddBook}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {book.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`i_b_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`i_b_author_${index}`} name="author" type="text" placeholder="Author" className="form-control input-md" value={book.author} onChange={(e) => handleBook(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_b_title_${index}`} name="title" type="text" placeholder="Title of book" className="form-control input-md" value={book.title} onChange={(e) => handleBook(index, e)} required />
                                    </td>
                                    <td>
                                    <input id={`i_b_year_${index}`} name="year" placeholder="Year of Publication" value={book.year} onChange={(e) => handleBook(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_p_isbn_${index}`} name="isbn" value={book.isbn} placeholder="ISBN" onChange={(e) => handleBook(index, e)} required />
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={handleRemoveBook} >Remove</button>
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
                        <div className="panel-heading">(B) Book Chapter(s) &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-sm btn-danger" id="add_more_i_exp" onClick={handleAddBookChap}>Add Details</button></div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                            <tbody id="exp">
                                {bookChap.map((detail, index) => (
                                <tr key={index}>
                                    <td>
                                    <input id={`i_b_sno_${index}`} name="sno" type="text" value={index + 1} placeholder="" className="form-control input-md" readOnly required />
                                    </td>

                                    <td>
                                    <input id={`i_b_author_${index}`} name="author" type="text" placeholder="Author" className="form-control input-md" value={bookChap.author} onChange={(e) => handleBookChap(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_b_title_${index}`} name="title" type="text" placeholder="Title of book" className="form-control input-md" value={bookChap.title} onChange={(e) => handleBookChap(index, e)} required />
                                    </td>
                                    <td>
                                    <input id={`i_b_year_${index}`} name="year" placeholder="Year of Publication" value={bookChap.year} onChange={(e) => handleBookChap(index, e)} required />
                                    </td>

                                    <td>
                                    <input id={`i_p_isbn_${index}`} name="isbn" value={bookChap.isbn} placeholder="ISBN" onChange={(e) => handleBookChap(index, e)} required />
                                    </td>

                                    <td>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={handleRemoveBookChap} >Remove</button>
                                    </td>

                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>

                <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#6739bb' }}>8. Google Scholar Link *</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-success">
                      <div className="panel-heading">URL</div>
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-2 control-label" for="google_link">Google Scholar Link </div>
                          <div className="col-md-10">
                            <input id="google_link" value={gschlink} name="gschlink" type="text" placeholder="Google Scholar Link" className="form-control input-md" required="" onChange={(e) => setGschlink(e.target.value)}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-11">
                    <button id="back" type="back" name="back" value="Back" className="btn btn-success pull-left" onClick= {handleBack}>BACK</button>
                  </div>
                  <div className="col-md-11">
                    <button id="submit" type="submit" name="submit" value="Submit" className="btn btn-success pull-right" onClick={handleSubmit}>SAVE & NEXT</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    </body>
    </html>
  );
};

export default PublicationDetails;