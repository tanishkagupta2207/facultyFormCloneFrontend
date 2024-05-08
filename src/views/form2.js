import React, { useState } from 'react';

const AcademicDetails = () => {
  const [academicDetails, setAcademicDetails] = useState([
    { degree: '', university: '', branch: '', degreeType: '', thesisTitle: '' },
  ]);

  const addAcademicDetails = () => {
    setAcademicDetails([
      ...academicDetails,
      { degree: '', university: '', branch: '', degreeType: '', thesisTitle: '' },
    ]);
  };

  const handleChange = (index, key, value) => {
    const newAcademicDetails = [...academicDetails];
    newAcademicDetails[index][key] = value;
    setAcademicDetails(newAcademicDetails);
  };

  const handleDelete = index => {
    const newAcademicDetails = academicDetails.filter((_, i) => i !== index);
    setAcademicDetails(newAcademicDetails);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Degree/Certificate</th>
            <th>University/Institute</th>
            <th>Branch/Stream</th>
            <th>Degree Type</th>
            <th>Thesis Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {academicDetails.map((details, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Degree/Certificate"
                  value={details.degree}
                  onChange={e => handleChange(index, 'degree', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="University/Institute"
                  value={details.university}
                  onChange={e => handleChange(index, 'university', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Branch/Stream"
                  value={details.branch}
                  onChange={e => handleChange(index, 'branch', e.target.value)}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  value={details.degreeType}
                  onChange={e => handleChange(index, 'degreeType', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="PhD">PhD</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Thesis Title"
                  value={details.thesisTitle}
                  onChange={e => handleChange(index, 'thesisTitle', e.target.value)}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={addAcademicDetails}>
        Add More
      </button>
    </div>
  );
};

export default AcademicDetails;