"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaStar} from 'react-icons/fa'

const EmployeeCard = ({ imageSrc }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="employee-box">
                    <div className="box-head">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="employeeimg">
                                    <Image src={imageSrc} width={100} height={24} alt="" />
                                </div>
                                <p><span className="email"></span> <Link href="mailto:test@ahamson.com">test@ahamson.com</Link></p>
                                <p><span className="phone"></span> <Link href="callto:03040550445">03040550445</Link></p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h4>Naveed Mirza</h4>
                                <ul className="starrating">
                                    <li> <FaStar size={15} color="orange"/></li>
                                    <li> <FaStar size={15} color="orange"/></li>
                                    <li> <FaStar size={15} color="orange"/></li>
                                    <li> <FaStar size={15} color="orange"/></li>
                                    <li> <FaStar size={15}/></li>
                                    <li className="rating-value"><span>8.0</span></li>
                                </ul>
                                <h6>Designation</h6>
                                <p><span className="depart"></span> Department</p>
                                <p><span className="id"></span> 1620188483482</p>
                                <p><span className="address"></span> 2781 Ingram Road Greensboro, NC 2740</p>
                                <p className="d-inline"><span className="dateyear"></span> 18 Sep 2019</p>
                                <p className="d-inline"><span className="status"></span> Status</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-foot">
                        <div className="row">
                            <div className="col-6">
                                <Link href="/generalInfo/employee/generalEmployee"><span className="viewdetail"></span> View Details</Link>
                            </div>
                            <div className="col-6">
                                <Link href="#"><span className="teams"></span> Teams</Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/generalInfo/employee/generalEmployee"><em></em></Link>
                </div>
            </div>
        </>
    )
}

export default EmployeeCard;
