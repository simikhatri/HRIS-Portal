"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const MSTab = () => {
    const [activeTab, setActiveTab] = useState('generalinfo'); // Set the default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
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
        </>
    )
}

export default MSTab
