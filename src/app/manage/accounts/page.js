import Navbar from "@/app/components/Navbar"
import ManageMenu from "@/app/components/ManageMenu"
import Link from "next/link"
import Image from "next/image"
import ADropdown from "@/app/components/ADropdown"

const page = () => {
    return (
        <>
            <Navbar />
            <ManageMenu />
            {/* Main Area start */}
            <div id="main-wrap" className="innerpages">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="#" style={{ textDecoration: "none" }}>manage</Link></li>
                            <li className="breadcrumb-item"><Link href="#" style={{ textDecoration: "none" }}>employee</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">accounts</li>
                        </ol>
                    </nav>
                    <div className="quick-info">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="quickcontent-box">
                                    <h5>Total Accounts Status</h5>
                                    <div className="content-wrap clearfix">
                                        <div className="leftcontent float-start">
                                            <div className="box-img1">
                                                <Image src="/images/icon-20.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-img2">
                                                <Image src="/images/graph-img.png" width={100} height={100} alt="" />
                                            </div>
                                        </div>
                                        <div className="rightcontent float-end">
                                            <p>91</p>
                                            <span><i className="uparrow"></i> today</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="quickcontent-box">
                                    <h5>No of Users</h5>
                                    <div className="content-wrap clearfix">
                                        <div className="leftcontent float-start">
                                            <div className="box-img1">
                                                <Image src="/images/icon-21.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-img2">
                                                <Image src="/images/graph-img.png" width={100} height={100} alt="" />
                                            </div>
                                        </div>
                                        <div className="rightcontent float-end">
                                            <p>160</p>
                                            <span><i className="uparrow"></i> Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="quickcontent-box">
                                    <h5>Total Login</h5>
                                    <div className="content-wrap clearfix">
                                        <div className="leftcontent float-start">
                                            <div className="box-img1">
                                                <Image src="/images/icon-22.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-img2">
                                                <Image src="/images/graph-img.png" width={100} height={100} alt="" />
                                            </div>
                                        </div>
                                        <div className="rightcontent float-end">
                                            <p>91</p>
                                            <span><i className="downarrow"></i> today</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="quickcontent-box">
                                    <h5>Total Profile Status</h5>
                                    <div className="content-wrap clearfix">
                                        <div className="leftcontent float-start">
                                            <div className="box-img1">
                                                <Image src="/images/icon-23.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-img2">
                                                <Image src="/images/graph-img.png" width={100} height={100} alt="" />
                                            </div>
                                        </div>
                                        <div className="rightcontent float-end">
                                            <p>160</p>
                                            <span><i className="uparrow"></i> Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-section">
                        <div className="section-head">
                            <div className="row">
                                <div className="col-lg-7 col">
                                    <h3>Accounts</h3>
                                </div>
                                <div className="col-lg-5 col">
                                    <div className="section-options">
                                        <ul>
                                            <li>
                                                <Link href="#" title="Add Employee"><i className="addemployee"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="#" title="Manage"><i className="manage"></i></Link>
                                            </li>
                                            <li className="search-icon">
                                                <input type="text" className="search-focus" name="" placeholder="search here..." />
                                                {/* <i className="search"></i>  */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-search">
                                <div className="search-icon">
                                    <input type="text" className="search-focus" name="" placeholder="search here..." />
                                </div>
                            </div>
                        </div>
                        <div className="table-wrap table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" id="cbtest" />
                                            <label htmlFor="cbtest" className="check-box">
                                                <span>Select</span>
                                            </label>
                                        </th>
                                        <th>Company Email</th>
                                        <th>Username</th>
                                        <th>Last Login</th>
                                        <th>Role</th>
                                        <th>Creation Date</th>
                                        <th>Account Status</th>
                                        <th>Profile Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="cbtest1" />
                                            <label htmlFor="cbtest1" className="check-box">
                                                <span>1</span>
                                            </label>
                                        </td>
                                        <td>msalman@ahamson.com</td>
                                        <td>hr@ahamson.com</td>
                                        <td>8/25/2020 11:42:30 AM</td>
                                        <td>SuperAdmin</td>
                                        <td>17 January 2018</td>
                                        <td>Active</td>
                                        <td>Completed</td>
                                        <td>
                                            <ADropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="cbtest2" />
                                            <label htmlFor="cbtest2" className="check-box">
                                                <span>2</span>
                                            </label>
                                        </td>
                                        <td>naveed@ahamson.com</td>
                                        <td>naveed@ahamson.com</td>
                                        <td>8/25/2020 11:42:30 AM</td>
                                        <td>SuperAdmin</td>
                                        <td>21 July 2020</td>
                                        <td>Active</td>
                                        <td>Completed</td>
                                        <td>
                                            <ADropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="cbtest3" />
                                            <label htmlFor="cbtest3" className="check-box">
                                                <span>3</span>
                                            </label>
                                        </td>
                                        <td>ali@gmail.com</td>
                                        <td>taimur</td>
                                        <td>8/25/2020 11:42:30 AM</td>
                                        <td>Administrator</td>
                                        <td>17 January 2018</td>
                                        <td>Active</td>
                                        <td>Completed</td>
                                        <td>
                                            <ADropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="cbtest4" />
                                            <label htmlFor="cbtest4" className="check-box">
                                                <span>4</span>
                                            </label>
                                        </td>
                                        <td>mhassan@ahamson.com</td>
                                        <td>mhassan@ahamson.com</td>
                                        <td>8/25/2020 11:42:30 AM</td>
                                        <td>Administrator</td>
                                        <td>17 January 2018</td>
                                        <td>Active</td>
                                        <td>Completed</td>
                                        <td>
                                            <ADropdown />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="cbtest5" />
                                            <label htmlFor="cbtest5" className="check-box">
                                                <span>5</span>
                                            </label>
                                        </td>
                                        <td>sjahangir@ahamson.com</td>
                                        <td>sjahangir@ahamson.com</td>
                                        <td>8/25/2020 11:42:30 AM</td>
                                        <td>Administrator</td>
                                        <td>17 January 2018</td>
                                        <td>Active</td>
                                        <td>Completed</td>
                                        <td>
                                        <ADropdown/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="cbtest6" />
                                            <label htmlFor="cbtest6" className="check-box">
                                                <span>6</span>
                                            </label>
                                        </td>
                                        <td>msalman@ahamson.com</td>
                                        <td>hr@ahamson.com</td>
                                        <td>8/25/2020 11:42:30 AM</td>
                                        <td>SuperAdmin</td>
                                        <td>17 January 2018</td>
                                        <td>Active</td>
                                        <td>Completed</td>
                                        <td>
                                        <ADropdown/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="more-tablerows">
                            <Link href="#">Show More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Area Ends  */}
        </>
    )
}

export default page
