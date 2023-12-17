import Navbar from '../components/Navbar'
import {FaTrashAlt, FaGlobeEurope} from 'react-icons/fa'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Navbar/>
      <div id="main-wrap">
    <div className="container-fluid">
        <div className="content-section manage-services">
            <div className="row">
                <div className="col-sm-8">
                    <h2 className="mr-heading2">Travel</h2>
                </div>
                <div className="col-sm-4">
                    <div className="annoucment-box attendences-search">
                        <div className="employee-dropdown mt-0">
                            <span></span>
                            <select>
                                <option selected>Please select employee</option>
                                <option>Asad Dar</option>
                                <option>Adnan Ali Shah</option>
                                <option>Kamran Naeem</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white-section">
                <div className="section-head pb-0">
                    <h3 className="travel-btn"><Link className="blue-btn" href="#travelform"><FaGlobeEurope size={17}/> Add Travel Request</Link></h3>
                </div>
                <div className="addinfo-section travelrequest-form" id="travelform">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="wrapper">
                                <input className="control" required type="text" onfocus="(this.type='date')"/>
                                <span className="floating-label">From Date</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="wrapper">
                                <input className="control" required type="text" onfocus="(this.type='date')"/>
                                <span className="floating-label">To Date</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="wrapper">
                                <input type="text" className="control" required/>
                                <span className="floating-label">From Place</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="wrapper">
                                <input type="text" className="control" required/>
                                <span className="floating-label">To Place</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="wrapper">
                                <input type="number" className="control" required/>
                                <span className="floating-label">Amount (Rs)</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="wrapper">
                                <div className="picture-wrapper">
                                    <input className="control" required type="text" onfocus="(this.type='file')"/>
                                    <span className="floating-label">Bill (if any)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="wrapper">
                                <textarea rows="3" cols="15" className="control" required></textarea>
                                <span className="floating-label">Reason</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-btn pt-0 pb-3 text-left">
                        <Link href="#" className="blue-btn">Proceed</Link>
                        <Link href="#" className="black-btn">Cancel</Link>
                    </div>
                </div>
                <div className="table-wrap table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Flow ID</th>
                            <th>EmpCode</th>
                            <th>Amount</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Request Date</th>
                            <th>Processed Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>[TR-2006]</td>
                                <td>109</td>
                                <td>1231</td>
                                <td>ds</td>
                                <td>sd</td>
                                <td>16/10/2020</td>
                                <td>30/10/2020</td>
                                <td>10/10/2020</td>
                                <td>13/10/2020</td>
                                <td>Approved</td>
                                <td><Link href="#"><FaTrashAlt size={20}/></Link></td>
                            </tr>
                            <tr>
                                <td>[TR-2006]</td>
                                <td>109</td>
                                <td>1231</td>
                                <td>ds</td>
                                <td>sd</td>
                                <td>16/10/2020</td>
                                <td>30/10/2020</td>
                                <td>10/10/2020</td>
                                <td>13/10/2020</td>
                                <td>Approved</td>
                                <td><Link href="#"><FaTrashAlt size={20}/></Link></td>
                            </tr>
                            <tr>
                                <td>[TR-2006]</td>
                                <td>109</td>
                                <td>1231</td>
                                <td>ds</td>
                                <td>sd</td>
                                <td>16/10/2020</td>
                                <td>30/10/2020</td>
                                <td>10/10/2020</td>
                                <td>13/10/2020</td>
                                <td>Approved</td>
                                <td><Link href="#"><FaTrashAlt size={20}/></Link></td>
                            </tr>
                            <tr>
                                <td>[TR-2006]</td>
                                <td>109</td>
                                <td>1231</td>
                                <td>ds</td>
                                <td>sd</td>
                                <td>16/10/2020</td>
                                <td>30/10/2020</td>
                                <td>10/10/2020</td>
                                <td>13/10/2020</td>
                                <td>Approved</td>
                                <td><Link href="#"><FaTrashAlt size={20}/></Link></td>
                            </tr>
                            <tr>
                                <td>[TR-2006]</td>
                                <td>109</td>
                                <td>1231</td>
                                <td>ds</td>
                                <td>sd</td>
                                <td>16/10/2020</td>
                                <td>30/10/2020</td>
                                <td>10/10/2020</td>
                                <td>13/10/2020</td>
                                <td>Approved</td>
                                <td><Link href="#"><FaTrashAlt size={20}/></Link></td>
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
