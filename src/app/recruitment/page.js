import Navbar from "../components/Navbar"
import SideCard from "../components/SideCard"

const page = () => {
  return (
    <>
    <Navbar/>
      <div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <div className="formpage-wrap">
            <h2 className="mr-heading">Recruitment</h2>
            <div className="row">
               <SideCard/>
                <div className="col-lg-9 col-md-8 col-sm-6">
                     {/* <div className="white-box mb-4">
                        <div className="formpage-content tabularview-form pb-1">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Employee Information</h3>
                                </div>
                            </div>
                            <div className="table-wrap table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Code</th>
                                      <th>Name</th>
                                      <th>Department</th>
                                      <th>Designation</th>
                                      <th>Location</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><input type="text"></td>
                                      <td><input type="text"></td>
                                      <td><input type="text"></td>
                                      <td><input type="text"></td>
                                      <td><input type="text"></td>
                                      <td>
                                        <a href="#" className="blue-btn" title="add"><i className="fas fa-plus-circle"></i></a>
                                      </td>
                                    </tr>
                                    <tr>
                                        <td>22</td>
                                        <td>Asad Dar</td>
                                        <td>Design</td>
                                        <td>Team Lead</td>
                                        <td>Islamabad</td>
                                        <td>
                                          <a href="#" className="blue-btn" title="remove"><i className="fas fa-minus-circle"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>22</td>
                                        <td>Kamran Naeem</td>
                                        <td>Project Management</td>
                                        <td>Project Manager</td>
                                        <td>Islamabad</td>
                                        <td>
                                          <a href="#" className="blue-btn" title="remove"><i className="fas fa-minus-circle"></i></a>
                                        </td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>  */}
                    <div className="white-box mb-4">
                        <div className="formpage-content pb-1">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Requistion Detail</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input className="control" required type="text" onfocus="(this.type='date')"/>
                                        <span className="floating-label">Requested Date</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Internal</option>
                                            <option>External</option>
                                            <option>Add New</option>
                                        </select>
                                        <span className="floating-label">Job Title</span>
                                    </div>
                                    <div className="d-none">
                                        <h4>New Job Title</h4>
                                        <div className="wrapper">
                                            <input type="text" className="control" required/>
                                            <span className="floating-label">New Job Title</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                        <span className="floating-label">Grade</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>New</option>
                                            <option>Budgeted</option>
                                        </select>
                                        <span className="floating-label">Budget</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <optgroup label="New Opening:">
                                                <option>New Project</option>
                                                <option>Addional Work Load</option>
                                            </optgroup>
                                            <optgroup label="Replacement:">
                                                <option>Resignation/Termination</option>
                                                <option>Transfer/Promotion</option>
                                            </optgroup>
                                        </select>
                                        <span className="floating-label">Reason for Requisition</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Division</option>
                                            <option>Dept.</option>
                                        </select>
                                        <span className="floating-label">Hiring for</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-none">
                                <h4>Replacement Fields</h4>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="wrapper">
                                            <input type="text" className="control" required/>
                                            <span className="floating-label">Name of Staff:</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="wrapper">
                                            <input type="text" className="control" required/>
                                            <span className="floating-label">Staff ID:</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="wrapper">
                                            <input type="text" className="control" required/>
                                            <span className="floating-label">Month of Resignation:</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">JOB Number</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Position Type</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <div className="form-group m-0">
                                            <select className="mul-select control" required>
                                                <option></option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                            <span className="floating-label">Reporting to Finance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <div className="form-group m-0">
                                            <select className="mul-select2 control" required>
                                                <option></option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                            <span className="floating-label">Reporting to Administrator</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Permanent</option>
                                            <option>Contract</option>
                                            <option>Intern/Trainee</option>
                                        </select>
                                        <span className="floating-label">Employment Type</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="number" className="control" required/>
                                        <span className="floating-label">Number of Vacancie</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Location</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Suggested Gross Salary</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input className="control" required type="text" onfocus="(this.type='date')"/>
                                        <span className="floating-label">Expected On-Boarding Date</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Project Name</option>
                                            <option>Project Code</option>
                                        </select>
                                        <span className="floating-label">Cost Allocation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-box mb-4">
                        <div className="formpage-content pb-1">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Candidate Profile</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="number" className="control" required/>
                                        <span className="floating-label">Required Years of Experience</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Intermediate</option>
                                            <option>Graduation</option>
                                            <option>Masters</option>
                                        </select>
                                        <span className="floating-label">Educational Background</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Field of Study</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Professional Qualification</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Certifications (If Any)</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Job Location</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        <span className="floating-label">Gender Perference</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <span className="checkbox-span">Include Candidats Willing to Relocate</span>
                                    <input className="checkbox" type="radio" id="relocate-1" name="relocate"/>
                                    <label className="checkbox-label" for="relocate-1">Yes</label>
                                    <input className="checkbox" type="radio" id="relocate-1-1" name="relocate"/>
                                    <label for="relocate-1-1">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-box mb-4">
                        <div className="formpage-content pb-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Employment Details</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Detailed Role Description</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Soft Skills</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Techinical Skills</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Growth Path for this Position</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="wrapper">
                                        <input className="control" required type="text" onfocus="(this.type='file')"/>
                                        <span className="floating-label">Attach Files</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <textarea rows="5" cols="20" placeholder="General Commets"></textarea>
                                </div>
                            </div>
                            <div className="form-btn">
                                <a href="#" className="blue-btn">Save</a>
                                <a href="#" className="black-btn">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default page
