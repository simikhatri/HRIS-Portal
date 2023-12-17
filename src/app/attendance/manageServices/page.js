import MSTab from '@/app/components/MSTab'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import ADropdown from '@/app/components/ADropdown'

const Page = () => {
    return (
        <>
        <Navbar/>
            {/* Main Area start  */}
            <div id="main-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="content-section manage-services">
                                <h2>Attendences <span>(45)</span></h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="attendences.html" style={{textDecoration: "none"}}>attendance</Link>
                                            </li>
                                        <li className="breadcrumb-item active" aria-current="page">manage services</li>
                                    </ol>
                                </nav>
                                <div className="white-section">
                                    <div className="section-head">
                                        <h3>Attendence Display lists</h3>
                                    </div>
                                    <div className="addinfo-section">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
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
                                            <div className="col-lg-3 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required/>
                                                        <span className="floating-label">Name</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Catergory 1</option>
                                                        <option>Catergory 2</option>
                                                        <option>Catergory 3</option>
                                                    </select>
                                                    <span className="floating-label">Catergory</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Value info 1</option>
                                                        <option>Value info 2</option>
                                                        <option>Value info 3</option>
                                                    </select>
                                                    <span className="floating-label">Value info</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="#" className="blue-btn">Add</Link>
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
                                                    <th>Categories</th>
                                                    <th>Value Info</th>
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
                                                    <td>Total Present</td>
                                                    <td>Employee available</td>
                                                    <td>Numeric value</td>
                                                    <td>
                                                       <ADropdown/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" id="cbtest1" />
                                                        <label for="cbtest1" className="check-box">
                                                            <span></span>
                                                        </label>
                                                    </td>
                                                    <td>2</td>
                                                    <td>Absent</td>
                                                    <td>Employee unavailable</td>
                                                    <td>Numeric value</td>
                                                    <td>
                                                    <ADropdown/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" id="cbtest1" />
                                                        <label for="cbtest1" className="check-box">
                                                            <span></span>
                                                        </label>
                                                    </td>
                                                    <td>3</td>
                                                    <td>Late</td>
                                                    <td>timing lates</td>
                                                    <td>Numeric value</td>
                                                    <td>
                                                    <ADropdown/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" id="cbtest1" />
                                                        <label for="cbtest1" className="check-box">
                                                            <span></span>
                                                        </label>
                                                    </td>
                                                    <td>4</td>
                                                    <td>Leave</td>
                                                    <td>Informed/unavailable</td>
                                                    <td>Numeric value</td>
                                                    <td>
                                                    <ADropdown/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="form-btn">
                                        <Link href="#" className="blue-btn">Save</Link>
                                        <Link href="#" className="black-btn">Cancel</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
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
                            <MSTab/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Area Ends */}

        </>
    )
}

export default Page
