import Navbar from '../components/Navbar';
import {FaTrashAlt} from 'react-icons/fa'
import Link from "next/link";


const page = () => {
  return (
    <>
    <Navbar/>
      <div id="main-wrap">
    <div className="container-fluid">
        <div className="content-section manage-services">
            <h2>Medical <span>(32 Total)</span></h2>
            <div className="white-section">
                <div className="section-head medical-head">
                    <div className="row">
                        <div className="col-sm-7">
                            <h3>Medical Detail info</h3>
                        </div>
                        <div className="col-sm-5 text-end">
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
                        <div className="col-lg-3 col-md-3">
                            <div className="wrapper">
                                <select className="control" required>
                                    <option></option>
                                    <option>Tahir</option>
                                    <option>Furqan</option>
                                    <option>Hamza</option>
                                </select>
                                <span className="floating-label">Patient Name</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <input className="control" required type="text" onfocus="(this.type='date')"/>
                                <span className="floating-label">Treatment Date</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="wrapper">
                                <input className="control" required type="text"/>
                                <span className="floating-label">Description</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrapper">
                                <input className="control" required type="text"/>
                                <span className="floating-label">Amount</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-btn medical-btn">
                        <Link href="#" className="blue-btn">Proceed</Link>
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
                          <th>Date</th>
                          <th>Status</th>
                          <th>Description</th>
                          <th>Requested</th>
                          <th>Remaining</th>
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
                          <td>12/10/2020</td>
                          <td>Allowed</td>
                          <td>Lorem Ipsum</td>
                          <td>20,000</td>
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
                            <td>12/10/2020</td>
                            <td>Allowed</td>
                            <td>Lorem Ipsum</td>
                            <td>20,000</td>
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
                            <td>12/10/2020</td>
                            <td>Allowed</td>
                            <td>Lorem Ipsum</td>
                            <td>20,000</td>
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
                            <td>12/10/2020</td>
                            <td>Allowed</td>
                            <td>Lorem Ipsum</td>
                            <td>20,000</td>
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
                            <td>12/10/2020</td>
                            <td>Allowed</td>
                            <td>Lorem Ipsum</td>
                            <td>20,000</td>
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
    </>
  )
}

export default page
