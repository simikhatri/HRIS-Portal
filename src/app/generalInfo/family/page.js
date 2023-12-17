import Link from 'next/link'
import SideCard from '@/app/components/SideCard'
import {FaTrashAlt} from 'react-icons/fa'

const page = () => {
    return (
        <>
            {/* Main AreLink start  */}
            <div id="main-wrap" className="innerpages">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="generalInfo" style={{ textDecoration: "none" }}>general info</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">family</li>
                        </ol>
                    </nav>
                    <div className="formpage-wrap">
                        <div className="row">
                            <SideCard />
                            <div className="col-lg-9 col-md-8 col-sm-6">
                                <div className="white-box mb-3">
                                    <div className="formpage-content">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Name</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">CNIC #</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Relationship 1</option>
                                                        <option>Relationship 2</option>
                                                        <option>Relationship 3</option>
                                                    </select>
                                                    <span className="floating-label">Relationship</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" onfocus="(this.type='date')" />
                                                    <span className="floating-label">DOB</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                    </select>
                                                    <span className="floating-label">Gender</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" />
                                                    <span className="floating-label">Contact Number</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <label className="checkbox-inline">
                                                    <input style={{ display: 'inline-block', width: 'auto', marginRight: '10px' }} type="checkbox" value="" />
                                                    Next of Kin</label>
                                            </div>
                                        </div>
                                        <div className="form-btn">
                                            <Link href="#" className="blue-btn">Save</Link>
                                            <Link href="#" className="black-btn">Cancel</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="white-box">
                                    <div className="formpage-content">
                                        <div className="table-wrap table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>CNIC</th>
                                                        <th>Relationship</th>
                                                        <th>DOB</th>
                                                        <th>Gender</th>
                                                        <th>Contact Number</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>XYZ</td>
                                                        <td>37405-1234567-1</td>
                                                        <td>Father</td>
                                                        <td>16/10/1978</td>
                                                        <td>Male</td>
                                                        <td>0333-1234567</td>
                                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>XYZ</td>
                                                        <td>37405-1234567-1</td>
                                                        <td>Father</td>
                                                        <td>16/10/1978</td>
                                                        <td>Male</td>
                                                        <td>0333-1234567</td>
                                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>XYZ</td>
                                                        <td>37405-1234567-1</td>
                                                        <td>Father</td>
                                                        <td>16/10/1978</td>
                                                        <td>Male</td>
                                                        <td>0333-1234567</td>
                                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>XYZ</td>
                                                        <td>37405-1234567-1</td>
                                                        <td>Father</td>
                                                        <td>16/10/1978</td>
                                                        <td>Male</td>
                                                        <td>0333-1234567</td>
                                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>XYZ</td>
                                                        <td>37405-1234567-1</td>
                                                        <td>Father</td>
                                                        <td>16/10/1978</td>
                                                        <td>Male</td>
                                                        <td>0333-1234567</td>
                                                        <td><Link href="#"><FaTrashAlt/></Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main AreLink Ends */}
        </>
    )
}

export default page
