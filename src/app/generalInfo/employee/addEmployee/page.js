import Link from "next/link"
import Image from "next/image"
import { FaExclamationTriangle, FaCamera, FaStar } from "react-icons/fa"

const page = () => {
    return (
        <>
            {/* Main Area start  */}
            <div id="main-wrap" className="innerpages">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="#" style={{ textDecoration: "none" }}>general info</Link></li>
                            <li className="breadcrumb-item"><Link href="#" style={{ textDecoration: "none" }}>employee</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Employee</li>
                        </ol>
                    </nav>
                    <div className="formpage-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="white-box sticky-top">
                                    {/* <div className="headtop-section">
                            <div className="row">
                                <div className="col">
                                    <Link href="#" className="export"></Link>
                                </div>
                                <div className="col">
                                    <Link href="#" className="print-btn"></Link>
                                </div>
                            </div>
                        </div>  */}
                                    <div className="sidebar-head addemployee-sidebar">
                                        <div className="circle-wrap">
                                            <div className="circle">
                                                {/* User Profile Image  */}
                                                <img className="profile-pic" src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg" />

                                                {/* Default Image 
                                     <i className="fa fa-user fa-5x"></i>  */}
                                            </div>
                                            <div className="p-image">
                                                <FaCamera size={24} />
                                                <input className="file-upload" type="file" accept="image/*" />
                                            </div>
                                        </div>

                                        <h4>Employee Name</h4>
                                        <ul className="starrating">
                                            <li><FaStar size={15}/></li>
                                            <li><FaStar size={15} /></li>
                                            <li><FaStar size={15}/></li>
                                            <li><FaStar size={15}/></li>
                                            <li><FaStar size={15}/></li>
                                            <li className="rating-value"><span>0</span></li>
                                        </ul>
                                        <h6>Designation</h6>
                                    </div>
                                    {/* <div className="sidebartabs-wrap">
                            <div className="sidebartabs">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Link href="#sideteam" className="active">
                                            <span className="team-icon"></span>
                                            <em>Team</em>
                                            <i><span>3</span></i>
                                        </Link>
                                    </div>
                                    <div className="col-sm-6">
                                        <Link href="#sideproject">
                                            <span className="project-icon"></span>
                                            <em>Projects</em>
                                            <i><span>3</span></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sidetab-content">
                                <div className="sidecontent" id="sideteam" style="display: block;">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <div className="team-img">
                                                    <img src="images/01.jpg" alt=""/>
                                                </div>
                                                <span>Naveed Mirza</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <div className="team-img">
                                                    <img src="images/01.jpg" alt=""/>
                                                </div>
                                                <span>Naveed Mirza</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <div className="team-img">
                                                    <img src="images/01.jpg" alt=""/>
                                                </div>
                                                <span>Naveed Mirza</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidecontent" id="sideproject">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <div className="team-img">
                                                    <img src="images/01.jpg" alt=""/>
                                                </div>
                                                <span>Ahamson Portal</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <div className="team-img">
                                                    <img src="images/01.jpg" alt=""/>
                                                </div>
                                                <span>LogicPowered</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <div className="team-img">
                                                    <img src="images/01.jpg" alt=""/>
                                                </div>
                                                <span>Ahamson Portal</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="white-box mb-3">
                                    <div className="formpage-content">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Category 1</option>
                                                        <option>Category 2</option>
                                                        <option>Category 3</option>
                                                        <option>Category 4</option>
                                                    </select>
                                                    <small className="error"><FaExclamationTriangle size={16} /> error display in bottom line</small>
                                                    <span className="floating-label">Category</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Job Level 1</option>
                                                        <option>Job Level 2</option>
                                                        <option>Job Level 3</option>
                                                        <option>Job Level 4</option>
                                                    </select>
                                                    <span className="floating-label">Job Level</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B+</option>
                                                        <option>B</option>
                                                    </select>
                                                    <span className="floating-label">Grade</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>20</option>
                                                        <option>186</option>
                                                        <option>200</option>
                                                        <option>05</option>
                                                    </select>
                                                    <span className="floating-label">Job Code</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Designer</option>
                                                        <option>Front-end Developer</option>
                                                        <option>Back-end Developer</option>
                                                    </select>
                                                    <span className="floating-label">Internal Designation</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Designer</option>
                                                        <option>Front-end Developer</option>
                                                        <option>Back-end Developer</option>
                                                    </select>
                                                    <span className="floating-label">External Designation</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Division 1</option>
                                                        <option>Division 2</option>
                                                        <option>Division 3</option>
                                                        <option>Division 4</option>
                                                    </select>
                                                    <span className="floating-label">Division</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Designer</option>
                                                        <option>Front-end Developer</option>
                                                        <option>Back-end Developer</option>
                                                    </select>
                                                    <span className="floating-label">Department</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>LogicPowered</option>
                                                        <option>AHamson</option>
                                                    </select>
                                                    <span className="floating-label">Project</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Permenent</option>
                                                        <option>Internee</option>
                                                    </select>
                                                    <span className="floating-label">Job type</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <div className="form-group m-0">
                                                        <select className="control mul-select" required>
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
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <div className="form-group m-0">
                                                        <select className="control mul-select2" required >
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
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>LogicPowered</option>
                                                        <option>AHamson</option>
                                                    </select>
                                                    <span className="floating-label">Team</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Position 1</option>
                                                        <option>Position 2</option>
                                                        <option>Position 3</option>
                                                    </select>
                                                    <span className="floating-label">Position</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Emp code</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <input type="email" className="control" required />
                                                    <span className="floating-label">Company email</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Employment Status 1</option>
                                                        <option>Employment Status 2</option>
                                                        <option>Employment Status 3</option>
                                                    </select>
                                                    <span className="floating-label">Employment Status</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">City/Office</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" onfocus="(this.type='date')" />
                                                    <span className="floating-label">Date of join</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Probation Month(s)</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required disabled />
                                                    <span className="floating-label">Probation End</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Total Experience</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Total A Hamson Inc. Experience</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Official Sim</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Divisional HQ 1</option>
                                                        <option>Divisional HQ 2</option>
                                                        <option>Divisional HQ 3</option>
                                                    </select>
                                                    <span className="floating-label">Divisional HQ</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Marital Status</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="section-heading">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h2>Attachments</h2>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input placeholder="New Attachments" type="text" multiple onfocus="(this.type='file')">
                                            </div>
                                            <div className="col-lg-6">
                                                <input placeholder="Attachments Name" type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-wrap table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Attachment</th>
                                      <th>Attachment Name</th>
                                      <th>Attachment Date</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="picture-wrap">
                                            <img src="https://placehold.it/80x80" id="preview" className="img-thumbnail">
                                        </div>
                                      </td>
                                      <td>CNIC</td>
                                      <td>16/10/2020</td>
                                      <td><Link href="#"><i className="fas fa-trash-alt"></i></Link></td>
                                    </tr>
                                    <tr>
                                        <td>
                                          <div className="picture-wrap">
                                              <img src="https://placehold.it/80x80" id="preview" className="img-thumbnail">
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><i className="fas fa-trash-alt"></i></Link></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="picture-wrap">
                                              <img src="https://placehold.it/80x80" id="preview" className="img-thumbnail">
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><i className="fas fa-trash-alt"></i></Link></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="picture-wrap">
                                              <img src="https://placehold.it/80x80" id="preview" className="img-thumbnail">
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><i className="fas fa-trash-alt"></i></Link></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="picture-wrap">
                                              <img src="https://placehold.it/80x80" id="preview" className="img-thumbnail">
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><i className="fas fa-trash-alt"></i></Link></td>
                                      </tr>
                                  </tbody>
                                </table>
                            </div>  */}
                                        <div className="form-btn">
                                            <Link href="#" className="blue-btn">Save</Link>
                                            <Link href="#" className="black-btn">Cancel</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Area Ends  */}
        </>
    )
}

export default page
