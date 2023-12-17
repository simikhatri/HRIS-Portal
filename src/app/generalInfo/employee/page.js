"use client";
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import Image from 'next/image'
import EmployeeCard from '@/app/components/EmployeeCard'
import SortBy from '@/app/components/SortBy';
import { FaStar } from 'react-icons/fa';

const ViewSwitcher = dynamic(import('@/app/components/CustomScript'), {
    ssr: false,
  });

const Page = () => {
    useEffect(() => {
        ViewSwitcher(); // Run the custom script when the component mounts
      }, []);
    return (
        <>
             {/* Main Area start  */}
            <div id="main-wrap" className="innerpages">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="generalInfo">general info</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">employee</li>
                        </ol>
                    </nav>
                    <div className="employee-wrap">
                        <div className="employee-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <h2 className="employee-heading">Employee <span>( 32 Total )</span></h2>
                                    <Link href="add-employee.html" title="Add Employee" className="add-user2"><i></i></Link>
                                </div>
                                <div className="col-lg-3 col-md-6">
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
                                <div className="col-lg-6 col-md-12">
                                    <ul>
                                        <li className="view-wrap">
                                            <span>View :</span>
                                            <Link href="#listingview" className="listing-view"></Link>
                                            <Link href="#gridview" className="grid-view active"></Link>
                                        </li>
                                        <li className="sort-wrap">
                                            <span>Sort By :</span>
                                            <SortBy/>
                                        </li>
                                        <li className="export-btn">
                                            <Link href="#">Export</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="viewtabswrap">
                            <div className="viewtabs" id="gridview" style={{display: "block"}}>
                                <div className="row">
                                    <EmployeeCard imageSrc="/images/Image-2.jpg"/>
                                    <EmployeeCard imageSrc="/images/01.jpg"/>
                                    <EmployeeCard imageSrc="/images/02.jpg"/>
                                    <EmployeeCard imageSrc="/images/04.jpg"/>
                                    <EmployeeCard imageSrc="/images/05.jpg"/>
                                    <EmployeeCard imageSrc="/images/06.jpg"/>
                                </div>
                                <div className="pagination">
                                    <Link href="#">❮</Link>
                                    <Link href="#">1</Link>
                                    <Link href="#" className="active">2</Link>
                                    <Link href="#">3</Link>
                                    <Link href="#">4</Link>
                                    <Link href="#">5</Link>
                                    <Link href="#">6</Link>
                                    <Link href="#">❯</Link>
                                </div>
                            </div>
                            <div className="viewtabs" id="listingview">
                                <div className="employee-box">
                                    <div className="box-head">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="employeeimg">
                                                    <Image  src="/images/Image-2.jpg" width={100} height={24} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <ul>
                                                    <li>
                                                        <h4>Naveed Mirza</h4>
                                                        <ul className="starrating">
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15}/></li>
                                                            <li className="rating-value"><span>8.0</span></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <h6>Designation</h6>
                                                            </li>
                                                            <li>
                                                                <p><span className="email"></span> <Link href="mailto:test@ahamson.com">test@ahamson.com</Link></p>
                                                            </li>
                                                            <li>
                                                                <p><span className="dateyear"></span> 18 Sep 2019</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="phone"></span> <Link href="callto:03040550445">03040550445</Link></p>
                                                            </li>
                                                            <li>
                                                                <Link href="/generalInfo/employee/generalEmployee"><span className="viewdetail"></span> View Details</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <p><span className="depart"></span> Department</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="id"></span> 1620188483482</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="address"></span> 2781 Ingram Road Greens ...</p>
                                                            </li>
                                                            <li>
                                                                <p className="d-inline"><span className="status"></span> Status</p>
                                                            </li>
                                                            <li>
                                                                <Link href="#"><span className="teams"></span> Teams</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/generalInfo/employee/generalEmployee"><em></em></Link>
                                </div>
                                <div className="employee-box">
                                    <div className="box-head">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="employeeimg">
                                                    <Image  src="/images/01.jpg" width={100} height={24} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <ul>
                                                    <li>
                                                        <h4>Naveed Mirza</h4>
                                                        <ul className="starrating">
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15}/></li>
                                                            <li className="rating-value"><span>8.0</span></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <h6>Designation</h6>
                                                            </li>
                                                            <li>
                                                                <p><span className="email"></span> <Link href="mailto:test@ahamson.com">test@ahamson.com</Link></p>
                                                            </li>
                                                            <li>
                                                                <p><span className="dateyear"></span> 18 Sep 2019</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="phone"></span> <Link href="callto:03040550445">03040550445</Link></p>
                                                            </li>
                                                            <li>
                                                                <Link href="/generalInfo/employee/generalEmployee"><span className="viewdetail"></span> View Details</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <p><span className="depart"></span> Department</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="id"></span> 1620188483482</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="address"></span> 2781 Ingram Road Greens ...</p>
                                                            </li>
                                                            <li>
                                                                <p className="d-inline"><span className="status"></span> Status</p>
                                                            </li>
                                                            <li>
                                                                <Link href="#"><span className="teams"></span> Teams</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/generalInfo/employee/generalEmployee"><em></em></Link>
                                </div>
                                <div className="employee-box">
                                    <div className="box-head">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="employeeimg">
                                                    <Image  src="/images/02.jpg" width={100} height={24} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <ul>
                                                    <li>
                                                        <h4>Naveed Mirza</h4>
                                                        <ul className="starrating">
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15}/></li>
                                                            <li className="rating-value"><span>8.0</span></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <h6>Designation</h6>
                                                            </li>
                                                            <li>
                                                                <p><span className="email"></span> <Link href="mailto:test@ahamson.com">test@ahamson.com</Link></p>
                                                            </li>
                                                            <li>
                                                                <p><span className="dateyear"></span> 18 Sep 2019</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="phone"></span> <Link href="callto:03040550445">03040550445</Link></p>
                                                            </li>
                                                            <li>
                                                                <Link href="/generalInfo/employee/generalEmployee"><span className="viewdetail"></span> View Details</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <p><span className="depart"></span> Department</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="id"></span> 1620188483482</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="address"></span> 2781 Ingram Road Greens ...</p>
                                                            </li>
                                                            <li>
                                                                <p className="d-inline"><span className="status"></span> Status</p>
                                                            </li>
                                                            <li>
                                                                <Link href="#"><span className="teams"></span> Teams</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/generalInfo/employee/generalEmployee"><em></em></Link>
                                </div>
                                <div className="employee-box">
                                    <div className="box-head">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="employeeimg">
                                                    <Image  src="/images/06.jpg" width={100} height={24} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <ul>
                                                    <li>
                                                        <h4>Naveed Mirza</h4>
                                                        <ul className="starrating">
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15} color="orange"/></li>
                                                            <li><FaStar size={15}/></li>
                                                            <li className="rating-value"><span>8.0</span></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <h6>Designation</h6>
                                                            </li>
                                                            <li>
                                                                <p><span className="email"></span> <Link href="mailto:test@ahamson.com">test@ahamson.com</Link></p>
                                                            </li>
                                                            <li>
                                                                <p><span className="dateyear"></span> 18 Sep 2019</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="phone"></span> <Link href="callto:03040550445">03040550445</Link></p>
                                                            </li>
                                                            <li>
                                                                <Link href="/generalInfo/employee/generalEmployee"><span className="viewdetail"></span> View Details</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                    <li>
                                                        <ol>
                                                            <li>
                                                                <p><span className="depart"></span> Department</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="id"></span> 1620188483482</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="address"></span> 2781 Ingram Road Greens ...</p>
                                                            </li>
                                                            <li>
                                                                <p className="d-inline"><span className="status"></span> Status</p>
                                                            </li>
                                                            <li>
                                                                <Link href="#"><span className="teams"></span> Teams</Link>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/generalInfo/employee/generalEmployee"><em></em></Link>
                                </div>
                                <div className="pagination">
                                    <Link href="#">❮</Link>
                                    <Link href="#">1</Link>
                                    <Link href="#" className="active">2</Link>
                                    <Link href="#">3</Link>
                                    <Link href="#">4</Link>
                                    <Link href="#">5</Link>
                                    <Link href="#">6</Link>
                                    <Link href="#">❯</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Area Ends */}
        </>
    )
}

export default Page
