import SideCard from '@/app/components/SideCard'
import Link from 'next/link'
import Image from 'next/image'
import { FaTrashAlt } from 'react-icons/fa'


const page = () => {
  return (
    <>
      {/* Main Area start  */}
<div id="main-wrap" class="innerpages">
    <div class="container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link href="#" style={{textDecoration: "none"}}>general info</Link></li>
                <li class="breadcrumb-item"><Link href="#" style={{textDecoration: "none"}}>employee</Link></li>
                <li class="breadcrumb-item"><Link href="#" style={{textDecoration: "none"}}>naveed_mirza</Link></li>
                <li class="breadcrumb-item active" aria-current="page">edit</li>
            </ol>
        </nav>
        <div class="formpage-wrap">
            <div class="row">
                <SideCard/>
                <div class="col-lg-9 col-md-8 col-sm-6">
                    <div class="white-box mb-3">
                        <div class="formpage-content">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Category 1</option>
                                            <option>Category 2</option>
                                            <option>Category 3</option>
                                            <option>Category 4</option>
                                        </select>
                                        <small class="error"><i class="fas fa-exclamation-triangle"></i> error display in bottom line</small>
                                        <span class="floating-label">Category</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Job Level 1</option>
                                            <option>Job Level 2</option>
                                            <option>Job Level 3</option>
                                            <option>Job Level 4</option>
                                        </select>
                                        <span class="floating-label">Job Level</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>A+</option>
                                            <option>A</option>
                                            <option>B+</option>
                                            <option>B</option>
                                        </select>
                                        <span class="floating-label">Grade</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>20</option>
                                            <option>186</option>
                                            <option>200</option>
                                            <option>05</option>
                                        </select>
                                        <span class="floating-label">Job Code</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Designer</option>
                                            <option>Front-end Developer</option>
                                            <option>Back-end Developer</option>
                                        </select>
                                        <span class="floating-label">Internal Designation</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Designer</option>
                                            <option>Front-end Developer</option>
                                            <option>Back-end Developer</option>
                                        </select>
                                        <span class="floating-label">External Designation</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Division 1</option>
                                            <option>Division 2</option>
                                            <option>Division 3</option>
                                            <option>Division 4</option>
                                        </select>
                                        <span class="floating-label">Division</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Designer</option>
                                            <option>Front-end Developer</option>
                                            <option>Back-end Developer</option>
                                        </select>
                                        <span class="floating-label">Department</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>LogicPowered</option>
                                            <option>AHamson</option>
                                        </select>
                                        <span class="floating-label">Project</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Permenent</option>
                                            <option>Internee</option>
                                        </select>
                                        <span class="floating-label">Job type</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <div class="form-group m-0">
                                            <select class="control mul-select" required>
                                                <option></option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                            <span class="floating-label">Reporting to Finance</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <div class="form-group m-0">
                                            <select class="control mul-select2" required >
                                                <option></option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                            <span class="floating-label">Reporting to Administrator</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>LogicPowered</option>
                                            <option>AHamson</option>
                                        </select>
                                        <span class="floating-label">Team</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Position 1</option>
                                            <option>Position 2</option>
                                            <option>Position 3</option>
                                        </select>
                                        <span class="floating-label">Position</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">Emp code</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="email" class="control" required/>
                                        <span class="floating-label">Company email</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Employment Status 1</option>
                                            <option>Employment Status 2</option>
                                            <option>Employment Status 3</option>
                                        </select>
                                        <span class="floating-label">Employment Status</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">City/Office</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input class="control" required type="text" onfocus="(this.type='date')"/>
                                        <span class="floating-label">Date of join</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">Probation Month(s)</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required disabled/>
                                        <span class="floating-label">Probation End</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">Total Experience</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">Total A Hamson Inc. Experience</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">Official Sim</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <select class="control" required>
                                            <option></option>
                                            <option>Divisional HQ 1</option>
                                            <option>Divisional HQ 2</option>
                                            <option>Divisional HQ 3</option>
                                        </select>
                                        <span class="floating-label">Divisional HQ</span>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="wrapper">
                                        <input type="text" class="control" required/>
                                        <span class="floating-label">Marital Status</span>
                                    </div>
                                </div>
                            </div>
                            <div class="section-heading">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <h2>Attachments</h2>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="wrapper">
                                                    <input class="control" required type="text" multiple onfocus="(this.type='file')"/>
                                                    <span class="floating-label">New Attachments</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="wrapper">
                                                    <input class="control" required type="text"/>
                                                    <span class="floating-label">Attachments Name</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-wrap table-responsive">
                                <table class="table">
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
                                        <div class="picture-wrap">
                                            <Image src="/images/placehold.png" id="preview" class="img-thumbnail" width={100} height={100} alt=""/>
                                        </div>
                                      </td>
                                      <td>CNIC</td>
                                      <td>16/10/2020</td>
                                      <td><Link href="#"><FaTrashAlt/></Link></td>
                                    </tr>
                                    <tr>
                                        <td>
                                          <div class="picture-wrap">
                                              <Image src="/images/placehold.png" id="preview" class="img-thumbnail"  width={100} height={100} alt=""/>
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div class="picture-wrap">
                                              <Image src="/images/placehold.png" id="preview" class="img-thumbnail"  width={100} height={100} alt=""/>
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div class="picture-wrap">
                                              <Image src="/images/placehold.png" id="preview" class="img-thumbnail"  width={100} height={100} alt=""/>
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div class="picture-wrap">
                                              <Image src="/images/placehold.png" id="preview" class="img-thumbnail"  width={100} height={100} alt=""/>
                                          </div>
                                        </td>
                                        <td>CNIC</td>
                                        <td>16/10/2020</td>
                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                      </tr>
                                  </tbody>
                                </table>
                            </div>
                            <div class="form-btn">
                                <Link href="#" class="blue-btn">Save</Link>
                                <Link href="#" class="black-btn">Cancel</Link>
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
