import {FaTrashAlt} from 'react-icons/fa'
import Link from "next/link";
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <>
    <Navbar/>
     {/* Main Area start  */}
<div id="main-wrap">
    <div className="container-fluid">
        <div className="content-section manage-services">
            <h2>Expense <span>(32,000 Total)</span></h2>
            <div className="white-section">
                <div className="section-head medical-head">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Expense Detail info</h3>
                        </div>
                        <div className="col-sm-8 text-end">
                            <div className="annoucment-box attendences-search">
                                <div className="employee-dropdown">
                                    <span></span>
                                    <select>
                                        <option selected>Please select employee</option>
                                        <option>Asad Dar</option>
                                        <option>Adnan Ali Shah</option>
                                        <option>Kamran Naeem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="new-link">
                                <ul>
                                    <li><Link href="#"><i className="add-btn"></i></Link></li>
                                    <li><Link href="#"><i className="add-user"></i></Link></li>
                                </ul>
                            </div>
                            <div className="search-icon search-div">
                                <select className="search-focus">
                                    <option selected>Please select employee</option>
                                    <option>Asad Dar</option>
                                    <option>Adnan Ali Shah</option>
                                    <option>Kamran Naeem</option>
                                </select>
                                 {/* <input type="text" className="search-focus" name="" placeholder="search here...">  */}
                                     {/* <i className="search"></i>  */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addinfo-section">
                    <div className="row">
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <select className="control" required>
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <span className="floating-label">#</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <select className="control" required>
                                    <option></option>
                                    <option>Birthday</option>
                                    <option>Tour</option>
                                </select>
                                <span className="floating-label">Type</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <div className="picture-wrapper">
                                    <input className="control" required type="text" onfocus="(this.type='file')"/>
                                    <span className="floating-label">File attachments</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <input className="control" required type="text" onfocus="(this.type='date')"/>
                                <span className="floating-label">Date</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <input className="control" required type="text"/>
                                <span className="floating-label">Total Expense (PKR)</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <input className="control" required type="text"/>
                                <span className="floating-label">Reason</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-btn medical-btn">
                        <Link href="#" className="blue-btn">Submit</Link>
                        <Link href="#" className="black-btn">Cancel</Link>
                    </div>
                </div>
                <div className="table-wrap table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <input type="checkbox" id="cbtest" />
                            <label for="cbtest" className="check-box">
                                <span></span>
                            </label>
                          </th>
                          <th>Select</th>
                          <th>Name</th>
                          <th>Type</th>
                          <th>Date</th>
                          <th>Stage</th>
                          <th>Reason</th>
                          <th>Status</th>
                          <th>Processed Date</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" id="cbtest1" />
                            <label for="cbtest1" className="check-box">
                                <span></span>
                            </label>
                          </td>
                          <td>1</td>
                          <td>Hamza Tasawar</td>
                          <td>IT Equipments</td>
                          <td>12/10/2020</td>
                          <td>Started</td>
                          <td>Lorem Ipsum</td>
                          <td>Allowed</td>
                          <td>10/10/2020</td>
                          <td>20,000</td>
                          <td>
                            <Link href="#"><FaTrashAlt/></Link>
                          </td>
                        </tr>
                        <tr>
                            <td>
                              <input type="checkbox" id="cbtest1" />
                              <label for="cbtest1" className="check-box">
                                  <span></span>
                              </label>
                            </td>
                            <td>1</td>
                            <td>Hamza Tasawar</td>
                            <td>IT Equipments</td>
                            <td>12/10/2020</td>
                            <td>Started</td>
                            <td>Lorem Ipsum</td>
                            <td>Allowed</td>
                            <td>10/10/2020</td>
                            <td>20,000</td>
                            <td>
                            <Link href="#"><FaTrashAlt/></Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="cbtest1" />
                              <label for="cbtest1" className="check-box">
                                  <span></span>
                              </label>
                            </td>
                            <td>1</td>
                            <td>Hamza Tasawar</td>
                            <td>IT Equipments</td>
                            <td>12/10/2020</td>
                            <td>Started</td>
                            <td>Lorem Ipsum</td>
                            <td>Allowed</td>
                            <td>10/10/2020</td>
                            <td>20,000</td>
                            <td>
                            <Link href="#"><FaTrashAlt/></Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="cbtest1" />
                              <label for="cbtest1" className="check-box">
                                  <span></span>
                              </label>
                            </td>
                            <td>1</td>
                            <td>Hamza Tasawar</td>
                            <td>IT Equipments</td>
                            <td>12/10/2020</td>
                            <td>Started</td>
                            <td>Lorem Ipsum</td>
                            <td>Allowed</td>
                            <td>10/10/2020</td>
                            <td>20,000</td>
                            <td>
                            <Link href="#"><FaTrashAlt/></Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" id="cbtest1" />
                              <label for="cbtest1" className="check-box">
                                  <span></span>
                              </label>
                            </td>
                            <td>1</td>
                            <td>Hamza Tasawar</td>
                            <td>IT Equipments</td>
                            <td>12/10/2020</td>
                            <td>Started</td>
                            <td>Lorem Ipsum</td>
                            <td>Allowed</td>
                            <td>10/10/2020</td>
                            <td>20,000</td>
                            <td>
                            <Link href="#"><FaTrashAlt/></Link>
                            </td>
                          </tr>
                      </tbody>
                    </table>
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
