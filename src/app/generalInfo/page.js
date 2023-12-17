"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import ACarousel from '@/app/components/ACarousel'
import Link from 'next/link';
import GIDropdown from '@/app/components/GIDropdown';

const Page = () => {
    const [activeTab, setActiveTab] = useState('recentactivities'); // Set the default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            {/* Main Area start */}
            <div id="main-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="content-section">
                                <h2>General Info</h2>
                                <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Employees status</h3>
                                            <div className="icon-wrap">
                                                <Image src="/images/icon-1.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>90<sup>%</sup></em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">View my<br /> team calendar</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Manage Employee</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-2.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>4</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Manage<br /> working time</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Performance</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-3.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em><Image  src="/images/icon-6.png" width={100} height={100} alt="" /></em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Benefit<br /> plans</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Lookup</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-4.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em><Image  src="/images/icon-5.png" width={100} height={100} alt="" /></em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Employees<br /> profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="manageservice-section">
                                    <Link href="#"><i className="fas fa-arrow-right"></i>  Manage Services</Link>
                                </div>
                                <h2>My Reports</h2>
                                <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Attendences</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-7.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>90<sup>%</sup></em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Last<br /> month</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Teams</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-8.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>4</em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Team<br /> details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Travel</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-9.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em>0<sup>%</sup></em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Trip<br /> assign</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="box-wrap">
                                            <h3>Payroll</h3>
                                            <div className="icon-wrap">
                                                <Image  src="/images/icon-10.png" width={100} height={100} alt="" />
                                            </div>
                                            <div className="box-bot clearfix">
                                                <div className="bot-left float-start">
                                                    <span>
                                                        <em><Image  src="/images/icon-5.png" width={100} height={100} alt="" /></em>
                                                    </span>
                                                </div>
                                                <div className="bot-right float-end">
                                                    <Link href="#">Employees<br /> Salaries</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <div className="annoucment-box">
                                <h2>Announcements</h2>
                                <ACarousel />
                            </div>
                            <div className="dashboardtabwrap">
                                <div className="dashboardtab">
                                    <ul>
                                        <li className={activeTab === 'recentactivities' ? 'active' : ''}>
                                            <Link className='tablink' href="#recentactivities" onClick={() => handleTabClick('recentactivities')}>Recent activities</Link>
                                        </li>
                                        <li className={activeTab === 'projectsresources' ? 'active' : ''}>
                                            <Link className='tablink' href="#projectsresources" onClick={() => handleTabClick('projectsresources')}>Projects resources</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dash-tabcontent">
                                    <div className="dashcontent" style={{ display: activeTab === 'recentactivities' ? 'block' : 'none' }} id="recentactivities">
                                        <ul>
                                            <li className="clearfix">
                                                <div className="content-img float-start">
                                                    <Image  src="/images/gallery-icon.png" width={100} height={100} alt="" />
                                                </div>
                                                <div className="tab-content float-start">
                                                    <h4>Manage Gallery</h4>
                                                    <p>Manage Gallery</p>
                                                </div>
                                                <GIDropdown />
                                            </li>
                                            <li className="clearfix">
                                                <div className="content-img float-start">
                                                    <Image  src="/images/policy-icon.png" width={100} height={100} alt="" />
                                                </div>
                                                <div className="tab-content float-start">
                                                    <h4>HR Policy Documents</h4>
                                                    <p>HR Policy Documents</p>
                                                </div>
                                                <GIDropdown />
                                            </li>
                                            <li className="clearfix">
                                                <div className="content-img float-start">
                                                    <Image  src="/images/medical-icon.png" width={100} height={100} alt="" />
                                                </div>
                                                <div className="tab-content float-start">
                                                    <h4>Employee Medical</h4>
                                                    <p>Employee Medical</p>
                                                </div>
                                                <GIDropdown />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dashcontent" id="projectsresources" style={{ display: activeTab === 'projectsresources' ? 'block' : 'none' }}>
                                        <ul>
                                            <li className="clearfix">
                                                <div className="content-img float-start">
                                                    <Image  src="/images/gallery-icon.png" width={100} height={100} alt="" />
                                                </div>
                                                <div className="tab-content float-start">
                                                    <h4>Manage Gallery</h4>
                                                    <p>Manage Gallery</p>
                                                </div>
                                                <GIDropdown />
                                            </li>
                                            <li className="clearfix">
                                                <div className="content-img float-start">
                                                    <Image  src="/images/policy-icon.png" width={100} height={100} alt="" />
                                                </div>
                                                <div className="tab-content float-start">
                                                    <h4>HR Policy Documents</h4>
                                                    <p>HR Policy Documents</p>
                                                </div>
                                                <GIDropdown />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Main Area Ends  */}
        </>
    )
}

export default Page
