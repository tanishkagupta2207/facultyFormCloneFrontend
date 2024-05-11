import React, {useState} from 'react';
import axios from 'axios';
import './print.css'; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Print = () => {

    
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

  const [researchStatement, setResearchStatement] = useState('');
  const [teachingStatement, setTeachingStatement] = useState('');
  const [relIn, setRelIn] = useState('');
  const [profServ, setProfServ] = useState('');
  const [jourDetails, setJourDetails] = useState('');
  const [confDetails, setConfDetails] = useState('');

  

  const fetchData = async () => {
    try {
      console.log("fetching data");
      const response = await axios.get(`http://localhost:5000/api/print/${userId}`);
      const {data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11,data12, data13, data14, data15, data16, data17, data18, gschlink, data20, data21, data22, data23, data24, data25}= response.data;
      setFormData(data1);
      setAdditionalDetails(data6);
      setPgDetails(data3);
      setPhdDetails(data2);
      setSchoolDetails(data5);
      setUgDetails(data4);
      setPresentEmployment(data7);
      setExperienceDetails(data8);
        setTeachingExperience(data9);
        setResearchExperience(data10);
        setIndustrialExperience(data11);
        setAreasOfSpecialization(data12);
        setCurrentAreasOfResearch(data13);
        setSummaryOfPublication(data14);
        setTenBestPub(data15);
        setPatents(data16);
        setBook(data17);
        setBookChap(data18);
        setGschlink(gschlink);
        setResearchStatement(data20);
        setTeachingStatement(data21);
        setRelIn(data22);
        setProfServ(data23);
        setJourDetails(data24);
        setConfDetails(data25);
        
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    // <head>
    //     <link rel="stylesheet" type="text/css" href="print.css"/>
    // </head>
    <div className="receipt">
      <div className="receipt_center">
        <img src="https://www.pngkit.com/png/detail/270-2702179_iit-patna-logo-png.png" style={{ height: '85px', float: 'left' }} />
        <p style={{ textAlign: 'center', fontSize: '1.7em' }}>भारतीय प्रौद्योगिकी संस्थान पटना <br />Indian Institute of Technology Patna</p>
        <p style={{ textAlign: 'center', marginTop: '10px', backgroundColor: '#175395', lineHeight: '25px', color: '#FFF', fontWeight: 'bold' }}>Application for the Faculty Position</p>
      </div>
      <hr />
      <div className="title">{formData.fname} {formData.mname} {formData.lname}</div>
      <div className="receipt_left">
        <p style={{ width: '10in' }}>Advertisement Number : {formData.advNum}</p>
        <p>Date of Application : {formData.doa}</p>
        <p>Post Applied for : {formData.post}</p>
        <p>Department : {formData.dept}</p>
        <p>Application Number : {formData.refNum}</p>
      </div>
      <div className="receipt_right" style={{ marginTop: '-10px', marginRight: '0', display: 'flex', justifyContent: 'flex-end' }}>
    <img 
        src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/attach/1144_shambhavi_verma_1712616444/1144_1715062350243648.jpg" 
        style={{ width: '200px', height: 'auto' }} // Adjust width as needed
    />
</div>

      <div style={{ clear: 'both' }}></div>
      <div>
        <span className="label">1. Personal Details</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td><strong className="tr_title">First Name</strong></td>
            <td><strong className="tr_title">Middle Name</strong></td>
            <td><strong className="tr_title">Last Name</strong></td>
          </tr>
          <tr>
            <td>{formData.fname}</td>
            <td>{formData.mname}</td>
            <td>{formData.lname}</td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td><strong className="tr_title">Date of Birth</strong></td>
            <td><strong className="tr_title">Age</strong></td>
            <td><strong className="tr_title">Gender</strong></td>
            <td><strong className="tr_title">Marital Status</strong></td>
            <td><strong className="tr_title">Category</strong></td>
            <td><strong className="tr_title">Nationality</strong></td>
            <td><strong className="tr_title">ID Proof</strong></td>
          </tr>
          <tr>
            <td>{formData.dob}</td>
            <td>{formData.age}</td>
            <td>{formData.gender}</td>
            <td>{formData.mstatus}</td>
            <td>{formData.cast}</td>
            <td>{formData.nationality}</td>
            <td>{formData.idProof}</td>
          </tr>
          <tr>
            <td><strong>Father's Name</strong></td>
            <td colspan="6">{formData.fatherName}</td>
          </tr>
        </table>
        <br />
<table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td width="50%"><strong className="tr_title">Current Address</strong></td>
            <td width="50%"><strong className="tr_title">Permanent Address</strong></td>
          </tr>

          <tr>
            <td>{formData.cadd}</td>
            <td>{formData.padd}</td>
          </tr>
          <tr>
            <td>{formData.cadd1}</td>
            <td>{formData.padd1}</td>
          </tr>
          <tr>
            <td>{formData.cadd2}</td>
            <td>{formData.padd2}</td>
          </tr>
          <tr>
            <td>{formData.cadd3}</td>
            <td>{formData.padd3}</td>
          </tr>
          <tr>
            <td>{formData.cadd4}</td>
            <td>{formData.padd4}</td>
          </tr>
        </table>
        <br />

        <span className="label"></span>
        <table className="tab">
          <tr>
            <td colspan="2"><strong>Mobile & Email</strong></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Mobile</strong></td>
            <td>{formData.mobile}</td>
          </tr>

          <tr>
            <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Alternate Mobile</strong></td>
            <td>{formData.mobile2}</td>
          </tr>

          <tr>
            <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Landline Phone No.</strong></td>
            <td>{formData.landline}</td>
          </tr>

          <tr>
            <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">E-mail</strong></td>
            <td>{formData.email}</td>
          </tr>

          <tr>
            <td style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Alternate E-mail</strong></td>
            <td>{formData.email2}</td>
          </tr>
        </table>
        <br />

        <span className="label">2. Educational Qualifications</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="6" className="tr_title"><strong>(A) Ph. D. Details</strong></td>
          </tr>

          <tr>
            <td width="30%"><strong>University/<br />Institute</strong></td>
            <td width="12%"><strong>Department</strong></td>
            <td width="17%"><strong>Name of Ph. D. <br />Supervisor</strong></td>
            <td width="10%"><strong>Year of <br />Joining</strong></td>
            <td width="15%"><strong>Date of <br />successful <br />thesis Defence</strong></td>
            <td width="15%"><strong>Date of <br />Award</strong></td>
          </tr>

          <tr>
            <td>{phdDetails.college}</td>
            <td>{phdDetails.stream}</td>
            <td>{phdDetails.supervisor}</td>
            <td>{phdDetails.yoj}</td>
            <td>{phdDetails.dod}</td>
            <td>{phdDetails.doa}</td>
          </tr>

          <tr>
            <td><strong>Title of Ph. D. Thesis</strong></td>
            <td colspan="5">{phdDetails.title}</td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8" className="tr_title"><strong>(B) Academic Details - PG</strong></td>
          </tr>

          <tr>
            <td width="10%"><strong>Degree</strong></td>
            <td width="25%"><strong>University/<br />Institute</strong></td>
            <td width="20%"><strong>Subjects</strong></td>
            <td width="10%"><strong>Year of <br />Joining</strong></td>
            <td width="12%"><strong>Year of <br />Graduation</strong></td>
            <td width="10%"><strong>Duration <br />(in years)</strong></td>
            <td width="30%"><strong>Percentage/CGPA</strong></td>
            <td width="30%"><strong>Division/Class</strong></td>
          </tr>

          <tr>
            <td>{pgDetails[0].degree}</td>
            <td>{pgDetails[0].college}</td>
            <td>{pgDetails[0].subjects}</td>
            <td>{pgDetails[0].yoj}</td>
            <td>{pgDetails[0].yog}</td>
            <td>{pgDetails[0].duration}</td>
            <td>{pgDetails[0].perce}</td>
            <td>{pgDetails[0].rank}</td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8" className="tr_title"><strong>(C) Academic Details - UG</strong></td>
          </tr>

          <tr>
            <td width="10%"><strong>Degree</strong></td>
            <td width="25%"><strong>University/<br />Institute</strong></td>
            <td width="20%"><strong>Subjects</strong></td>
            <td width="10%"><strong>Year of <br />Joining</strong></td>
            <td width="12%"><strong>Year of <br />Graduation</strong></td>
            <td width="10%"><strong>Duration <br />(in years)</strong></td>
            <td width="30%"><strong>Percentage/CGPA</strong></td>
            <td width="30%"><strong>Division/Class</strong></td>
          </tr>

          <tr>
            <td>{ugDetails[0].degree}</td>
            <td>{ugDetails[0].college}</td>
            <td>{ugDetails[0].subjects}</td>
            <td>{ugDetails[0].yoj}</td>
            <td>{ugDetails[0].yog}</td>
            <td>{ugDetails[0].duration}</td>
            <td>{ugDetails[0].perce}</td>
            <td>{ugDetails[0].rank}</td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8" className="tr_title"><strong>(D) Academic Details -School</strong></td>
          </tr>

          <tr>
            <td width="20%"><strong>10th/12th/HSC/Diploma</strong></td>
            <td width="20%"><strong>School</strong></td>
            <td width="15%"><strong>Year of Passing</strong></td>
            <td width="15%"><strong>Percentage/CGPA</strong></td>
            <td width="15%"><strong>Division/Class</strong></td>
          </tr>

          <tr>
            <td>12th/HSC/Diploma</td>
            <td>{schoolDetails[0].school}</td>
            <td>{schoolDetails[0].passingYear}</td>
            <td>{schoolDetails[0].perce}</td>
            <td>{schoolDetails[0].rank}</td>
          </tr>

          <tr>
            <td>10th</td>
            <td>{schoolDetails[1].school}</td>
            <td>{schoolDetails[1].passingYear}</td>
            <td>{schoolDetails[1].perce}</td>
            <td>{schoolDetails[1].rank}</td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8" className="tr_title"><strong>(E) Additional Educational Qualifications (If any)</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">3. Employment Details</span>

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="5" className="tr_title"><strong>(A) Present Employment</strong></td>
          </tr>

          <tr>
            <td width="20"><strong>Position</strong></td>
            <td width="30"><strong>Organization/Institution</strong></td>
            <td width="15"><strong>Date of <br />Joining</strong></td>
            <td width="15"><strong>Date of <br />Leaving</strong></td>
            <td width="15"><strong>Duration <br />(in years)</strong></td>
          </tr>

          <tr>
            <td>{presentEmployment.position}</td>
            <td>{presentEmployment.employer}</td>
            <td>{presentEmployment.doj}</td>
            <td>{presentEmployment.dol}</td>
            <td>{presentEmployment.duration}</td>
          </tr>
        </table>
        <br />

        <span className="label"></span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="5" className="tr_title"><strong>(B) Employment History (After PhD)</strong></td>
          </tr>

          <tr>
            <td width="20"><strong>Position</strong></td>
            <td width="30"><strong>Organization/Institution</strong></td>
            <td width="15"><strong>Date of <br />Joining</strong></td>
            <td width="15"><strong>Date of <br />Leaving</strong></td>
            <td width="15"><strong>Duration <br />(in years)</strong></td>
          </tr>

          <tr>
            <td>{experienceDetails[0].position}</td>
            <td>{experienceDetails[0].employer}</td>
            <td>{experienceDetails[0].doj}</td>
            <td>{experienceDetails[0].dol}</td>
            <td>{experienceDetails[0].duration}</td>
          </tr>

          <tr>
            <td colspan="5">
              <p>Experience : Minimum 6 years’ experienceof which at least 3 years should be at the level of Assistant Professor Grade I/Senior Scientific Officer/Senior Design Engineer. <strong style={{ color: 'red' }}>Yes</strong></p>
            </td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8" className="tr_title"><strong>(C) Teaching Experience (After PhD)</strong></td>
          </tr>

          <tr>
            <td width="25%"><strong>Position</strong></td>
            <td width="30%"><strong>Employer</strong></td>
            <td width="30%"><strong>Course Taught</strong></td>
            <td width="30%"><strong>UG/PG</strong></td>
            <td width="30%"><strong>No. of Students</strong></td>
            <td width="10%"><strong>Date of <br />Joining</strong></td>
            <td width="10%"><strong>Date of <br />Leaving</strong></td>
            <td width="10%"><strong>Duration</strong></td>
          </tr>

          <tr>
            <td>{teachingExperience[0].position}</td>
            <td>{teachingExperience[0].employer}</td>
            <td>{teachingExperience[0].course}</td>
            <td>{teachingExperience[0].ugpg}</td>
            <td>{teachingExperience[0].no_students}</td>
            <td>{teachingExperience[0].doj}</td>
            <td>{teachingExperience[0].dol}</td>
            <td>{teachingExperience[0].duration}</td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8" className="tr_title"><strong>(D) Research Experience</strong></td>
          </tr>

          <tr>
            <td width="20%"><strong>Position</strong></td>
            <td width="20%"><strong>Institute</strong></td>
            <td width="20%"><strong>Supervisor</strong></td>
            <td width="10%"><strong>Date of <br />Joining</strong></td>
            <td width="10%"><strong>Date of <br />Leaving</strong></td>
            <td width="10%"><strong>Duration</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="5" className="tr_title"><strong>(E) Industrial Experience</strong></td>
          </tr>

          <tr>
            <td width="20%"><strong>Organization</strong></td>
            <td width="20%"><strong>Work Profile</strong></td>
            <td width="10%"><strong>Date of <br />Joining</strong></td>
            <td width="10%"><strong>Date of <br />Leaving</strong></td>
            <td width="10%"><strong>Duration</strong></td>
          </tr>

          <tr>
            <td>Exercitationem nesciunt eligendi cum autem molestiae architecto cupiditate dolor.</td>
            <td>facere error dolorem</td>
            <td>Quam voluptate magni soluta dolorum unde aliquam quae.</td>
            <td>Dolorem unde sed provident quasi.</td>
            <td>2024-09-12 11:14:55</td>
          </tr>
        </table>
        <br />

        <span className="label">4. Area(s) of Specialization and Current Area(s) of Research</span>
        <table className="tab">
          <tr>
            <td width="25%" style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Area(s) of Specialization</strong></td>
            <td>Illum omnis magni cum commodi sit.</td>
          </tr>

          <tr>
            <td width="25%" style={{ backgroundColor: '#f1f1f1' }}><strong className="tr_title">Current Area(s) of Research</strong></td>
            <td>51378 Henri Dale</td>
          </tr>
        </table>
        <br />

        <span className="label">5. Summary of Publications</span>
        <table className="tab">
          <tr>
            <td width="50%"><strong>Number of International Journal Papers</strong></td>
            <td>Odi</td>
          </tr>

          <tr>
            <td width="50%"><strong>Number of National Journal Papers</strong></td>
            <td>Por</td>
          </tr>

          <tr>
            <td><strong>Number of International Conference Papers</strong></td>
            <td>Nob</td>
          </tr>

          <tr>
            <td><strong>Number of National Conference Papers</strong></td>
            <td>Qui</td>
          </tr>

          <tr>
            <td><strong>Number of Patent(s)</strong></td>
            <td>Sin</td>
          </tr>

          <tr>
            <td><strong>Number of Book(s)</strong></td>
            <td>Nes</td>
          </tr>

          <tr>
            <td><strong>Number of Book Chapter(s)</strong></td>
            <td>Nem</td>
          </tr>
        </table>
        <br />

        <span className="label">6. List of 10 Best Research Publications (Journal/Conference)</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8"><strong className="tr_title">(A) Journals(s)</strong></td>
          </tr>
<tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="25%"><strong>Author(s)</strong></td>
            <td width="30%"><strong>Title</strong></td>
            <td width="25%"><strong>Name of Journal</strong></td>
            <td width="10%"><strong>Year, Vol., Page</strong></td>
            <td width="5%"><strong>Impact Factor</strong></td>
            <td width="1%"><strong>DOI</strong></td>
            <td width="5%"><strong>Status</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="3"><strong className="tr_title">(B) Conference(s)</strong></td>
          </tr>
          <tr>
            <td width="20%"><strong>Name of the Conference</strong></td>
            <td width="20%"><strong>Title of Paper</strong></td>
            <td width="10%"><strong>Year</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">7. List of Patent(s), Book(s), Book Chapter(s)</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="8"><strong className="tr_title">(A) Patent(s)</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="20%"><strong>Inventor(s)</strong></td>
            <td width="20%"><strong>Title of Patent</strong></td>
            <td width="15%"><strong>Country of<br />Patent</strong></td>
            <td width="10%"><strong>Patent <br />Number</strong></td>
            <td width="10%"><strong>Date of <br />Filing</strong></td>
            <td width="10%"><strong>Date of <br />Published</strong></td>
            <td width="10%"><strong>Status<br />Filed/Published</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="5"><strong className="tr_title">(B) Book(s)</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="30%"><strong>Author(s)</strong></td>
            <td width="40%"><strong>Title of the Book</strong></td>
            <td width="20%"><strong>Year of Publication</strong></td>
            <td width="10%"><strong>ISBN</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="5"><strong className="tr_title">(C) Book Chapter(s)</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="30%"><strong>Author(s)</strong></td>
            <td width="40%"><strong>Title of the Book Chapter</strong></td>
            <td width="20%"><strong>Year of Publication</strong></td>
            <td width="10%"><strong>ISBN</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">8. Google Scholar Link</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="6"><strong className="tr_title">URL</strong></td>
          </tr>
          <tr>
            <td width="12%"><a href="Doloribus laboriosam quos." target="_blank">Doloribus laboriosam quos.</a></td>
          </tr>
        </table>
        <br />

        <span className="label">9. Membership of Professional Societies</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="3"><strong className="tr_title">Details</strong></td>
          </tr>

          <tr>
            <td width="3%"><strong>S. No.</strong></td>
            <td width="20%"><strong>Name of the Professional Society</strong></td>
            <td width="20%"><strong>Membership Status (Lifetime/Annual)</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">10. Professional Training</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="5"><strong className="tr_title">Details</strong></td>
          </tr>

          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="20%"><strong>Type of Training Received</strong></td>
            <td width="20%"><strong>Organisation</strong></td>
            <td width="10%"><strong>Year</strong></td>
            <td width="10%"><strong>Duration</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">11. Award(s) and Recognition(s)</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="4"><strong className="tr_title">Details</strong></td>
          </tr>

          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="20%"><strong>Name of Award</strong></td>
            <td width="20%"><strong>Awarded By</strong></td>
            <td width="10%"><strong>Year</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">12. Research Supervision</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="6"><strong className="tr_title">(A) PhD Thesis Supervision</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="25%"><strong>Name of Student/Research Scholar</strong></td>
            <td width="30%"><strong>Title of Thesis</strong></td>
            <td width="10%"><strong>Role</strong></td>
            <td width="10%"><strong>Ongoing/Completed</strong></td>
            <td width="10%"><strong>Ongoing Since/ Year of Completion</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="6"><strong className="tr_title">(B) M.Tech/M.E./Master's Thesis Supervision</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="25%"><strong>Name of Student/Research Scholar</strong></td>
            <td width="30%"><strong>Title of Thesis</strong></td>
            <td width="10%"><strong>Role</strong></td>
            <td width="10%"><strong>Ongoing/Completed</strong></td>
            <td width="10%"><strong>Ongoing Since/ Year of Completion</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="6"><strong className="tr_title">(C) B.Tech/B.E./Bachelor's Project Supervision</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="25%"><strong>Name of Student</strong></td>
            <td width="30%"><strong>Title of Project</strong></td>
            <td width="10%"><strong>Role</strong></td>
            <td width="10%"><strong>Ongoing/Completed</strong></td>
            <td width="10%"><strong>Ongoing Since/ Year of Completion</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">13. Sponsored Projects/ Consultancy Details</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="7"><strong className="tr_title">(A) Sponsored Projects</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="20%"><strong>Sponsoring Agency</strong></td>
            <td width="20%"><strong>Title of Project</strong></td>
            <td width="10%"><strong>Sanctioned Amount</strong></td>
            <td width="10%"><strong>Period</strong></td>
            <td width="10%"><strong>Role</strong></td>
            <td width="10%"><strong>Status</strong></td>
          </tr>
        </table>
        <br />

        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="7"><strong className="tr_title">(B) Consultancy Projects</strong></td>
          </tr>
          <tr>
            <td width="5%"><strong>S. No.</strong></td>
            <td width="20%"><strong>Organization</strong></td>
            <td width="20%"><strong>Title of Project</strong></td>
            <td width="15%"><strong>Amount of Grant</strong></td>
            <td width="15%"><strong>Period</strong></td>
            <td width="15%"><strong>Role</strong></td>
            <td width="15%"><strong>Status</strong></td>
          </tr>
        </table>
        <br />

        <span className="label">14. Significant research contribution and future plans</span>
        <table className="tab">
          <tr>
            <td></td>
          </tr>
        </table>
        <br />

        <span className="label">15. Significant teaching contribution and future plans</span>
        <table className="tab">
          <tr>
            <td></td>
          </tr>
        </table>
        <br />

        <span className="label">16. Any other relevant information</span>
        <table className="tab">
          <tr>
            <td></td>
          </tr>
        </table>
        <br />

        <span className="label">17. Professional Service as Reviewer/Editor etc.</span>
        <table className="tab">
          <tr>
            <td></td>
          </tr>
        </table>
        <br />

        <span className="label">18. Detailed List of Journal Publications<br />(Including Sr. No., Author's Names, Paper Title, Volume, Issue, Year, Page Nos., Impact Factor (if any), DOI, Status [Published/Accepted])</span>
        <table className="tab">
          <tr>
<td></td>
          </tr>
        </table>
        <br />

        <span className="label">19. Detailed List of Conference Publications<br />(Including Sr. No., Author's Names, Paper Title, Name of the conference, Year, Page Nos., DOI [If any])</span>
        <table className="tab">
          <tr>
            <td></td>
          </tr>
        </table>
        <br />

        <span className="label">20. Reprints of 5 Best Research Papers-Attached</span>
        <br />
        <br />

        <span className="label">21. Check List of the documents attached with the online application</span>
        <ul>
          <li>PHD Certificate</li>
          <li>PG Certificate</li>
          <li>UG Certificate</li>
          <li>10 Years Post phd Experience Certificate</li>
          <li>Any other relevant documents (Experience Certificate, Award Certificate, etc.)</li>
        </ul>
        <br />

        <span className="label">22. Referees</span>
        <table className="tab">
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <td colspan="6"><strong className="tr_title">Details of Referees</strong></td>
          </tr>

          <tr>
            <td width="20%"><strong>Name</strong></td>
            <td width="20%"><strong>Position</strong></td>
            <td width="15%"><strong>Association with Referee</strong></td>
            <td width="15%"><strong>Institution/<br />Organization</strong></td>
            <td width="15%"><strong>E-mail</strong></td>
            <td width="15%"><strong>Contact No.</strong></td>
          </tr>

          <tr>
            <td>Marjorie Schulist</td>
            <td>Quas placeat dolorem eaque nihil suscipit odit consequuntur debitis animi.</td>
            <td>Postdoc Supervisor</td>
            <td>Modi enim est veniam fugiat tempore.</td>
            <td>your.email+fakedata57171@gmail.com</td>
            <td>354-005-9127</td>
          </tr>
          <tr>
            <td>Eleanore Rodriguez</td>
            <td>A minima saepe sint alias distinctio earum delectus quo aliquam.</td>
            <td>Postdoc Supervisor</td>
            <td>Nam est occaecati blanditiis neque.</td>
            <td>your.email+fakedata55095@gmail.com</td>
            <td>752-998-2283</td>
          </tr>
          <tr>
            <td>Van Kovacek</td>
            <td>Odio ipsa maiores consectetur ex ab.</td>
            <td>Other</td>
            <td>Dolore illo iusto explicabo.</td>
            <td>your.email+fakedata53709@gmail.com</td>
            <td>596-648-4924</td>
          </tr>
        </table>
        <br />

        <span className="label">23. Final Declaration</span>
        <table className="tab">
          <tr>
            <td>I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the advertisment and this application form. I further declare that all the entries along with the attachments uploaded in this form are true to the best of my knowledge and belief.</td>
          </tr>
        </table>
        <br />

        <img src="https://ofa.iiti.ac.in/facrec_che_2023_july_02/attach/1144_shambhavi_verma_1712616444/1144_sign_1715380650863492.pdf" style={{ height: '50', marginTop: '10px' }} />
        <br />
        Signature of Applicant

        <div id="non_print_area">
          <button onClick={() => window.location.href = 'https://ofa.iiti.ac.in/facrec_che_2023_july_02/payment_complete'}>Back</button>
          <button onClick={window.print}>Print Application</button>
          <br />
        </div>
      </div>

      <style>
        {`@media print {
          #non_print_area {
            display: none !important;
          }
        }`}
      </style>
    </div>
  );
};

export default Print;