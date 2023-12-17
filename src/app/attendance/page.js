"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'

const Page = () => {
    const [activeTab, setActiveTab] = useState('generalinfo'); // Set the default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
        <Navbar/>
            {/* Main Area start  */}
            <div id="main-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="content-section">
                                <h2>Attendences <span>(45)</span></h2>
                                <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Total Present</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-8.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>40</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Employee<br /> out of 45</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Absent</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-27.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>2</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Manage<br /> not informed</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Late</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-30.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>1</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Delayed<br /> unreasonable</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Leave</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-15.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>3</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="leave.html">Employees<br /> informed</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="manageservice-section">
                                    <Link href="attendance/manageServices">
                                        <BiRightArrowAlt size={22} />  Manage Services</Link>
                                </div>
                                <h2>Activities <span>(7)</span></h2>
                                <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Leave Applied</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-28.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>4</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">1 - Casual <br /> 3 - Annual</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Claims</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-29.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>2</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">1 - Medical<br /> 1 - travel</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Coming Events</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-31.png" width={100} height={24} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>3</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">2 - Birthday<br /> 1 - Event</Link>
                                                </div>
                                            </div>
                                        </div>
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
                            <div className="dashboardtabwrap attendences-tabwrap">
                                <div className="dashboardtab generalInfo">
                                    <ul>
                                        <li className={activeTab === 'generalinfo' ? 'active' : ''}>
                                            <Link className='managelink' href="#generalinfo" onClick={() => handleTabClick('generalinfo')}>General Info</Link>
                                        </li>
                                        <li className={activeTab === 'attendencedetails' ? 'active' : ''}>
                                            <Link className='managelink' href="#attendencedetails" onClick={() => handleTabClick('attendencedetails')}>Attendence Details</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dash-tabcontent">
                                    <div className="dashcontent" style={{ display: activeTab === 'generalinfo' ? 'block' : 'none' }} id="generalinfo">
                                        <div className="general-info">
                                            <div className="info-content clearfix">
                                                <div className="info-icon float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>Name:</label>
                                                    <span>Awais Khan</span>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon2 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>Address:</label>
                                                    <span>House No 1 muhalla abc</span>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon3 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>Date Of Birth:</label>
                                                    <span>1 January 1998</span>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon4 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>Date Of Join:</label>
                                                    <span>1 August 2010</span>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon5 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>CNIC:</label>
                                                    <span>374025673892</span>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon6 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>Position:</label>
                                                    <span>Software Engineer</span>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon7 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <label>Cell:</label>
                                                    <span>03361256439</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashcontent" style={{ display: activeTab === 'attendencedetails' ? 'block' : 'none' }} id="attendencedetails">
                                        <div className="attendencedetails">
                                            <div className="manage-date">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="managedate-content">
                                                            <label>From</label>
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="managedate-content">
                                                            <label>To</label>
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon8 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <span>Leaves Status</span>
                                                    <i>1</i>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon9 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <span>Total Annual Leaves</span>
                                                    <i>12</i>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon10 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <span>Total Late</span>
                                                    <i>2</i>
                                                </div>
                                            </div>
                                            <div className="info-content clearfix">
                                                <div className="info-icon info-icon11 float-start">
                                                    <em></em>
                                                </div>
                                                <div className="info-employee float-end">
                                                    <span>Total working hours</span>
                                                    <i>186<sup>hours</sup></i>
                                                </div>
                                            </div>
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

export default Page
