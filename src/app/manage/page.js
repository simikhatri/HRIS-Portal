"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GIDropdown from '../components/GIDropdown'
import Navbar from '../components/Navbar'
import {BiRightArrowAlt} from 'react-icons/bi'

const Page = () => {
    const [activeTab, setActiveTab] = useState('manageannouncements'); // Set the default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

  return (
    <>
    <Navbar/>
    <div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-8 col-md-6">
                <div className="content-section">
                    <div className="inner-nav">
                        <ul>
                            <li className="active"><Link className='managelink' href="manage">Employee</Link></li>
                            <li><Link className='managelink' href="#">Salaries</Link></li>
                            <li><Link className='managelink' href="#">Galleries</Link></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Accounts</h3>
                                <div className="icon-wrap">
                                    <Image  src="/images/icon-17.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                   {/* <div className="bot-left float-start">
                                        <span>
                                            <em>90<sup>%</sup></em>
                                        </span>
                                    </div>  */}
                                    <div className="bot-right float-end">
                                        <Link href="/manage/accounts">View all <br/>employees</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Employee Info</h3>
                                <div className="icon-wrap">
                                    <Image  src="/images/icon-16.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                     {/* <div className="bot-left float-start">
                                        <span>
                                            <em>4</em>
                                        </span>
                                    </div>  */}
                                    <div className="bot-right float-end">
                                        <Link href="#">Manage <br/>details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Create Profile</h3>
                                <div className="icon-wrap">
                                    <Image  src="/images/icon-15.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    {/* <div className="bot-left float-start">
                                        <span>
                                            <em><Image  src="/images/icon-6.png" width={100} height={24} alt=""/></em>
                                        </span>
                                    </div>  */}
                                    <div className="bot-right float-end">
                                        <Link href="#">Add <br/>user</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="manageservice-section">
                        <Link href="#"><BiRightArrowAlt size={22}/> Manage Services</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Salaries</h3>
                                <div className="icon-wrap">
                                    <Image  src="/images/icon-19.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    {/* <div className="bot-left float-start">
                                        <span>
                                            <em>90<sup>%</sup></em>
                                        </span>
                                    </div>  */}
                                    <div className="bot-right float-end">
                                        <Link href="#">View my <br/>team calendar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Salaries Taxes</h3>
                                <div className="icon-wrap">
                                    <Image  src="/images/icon-18.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                     {/* <div className="bot-left float-start">
                                        <span>
                                            <em>4</em>
                                        </span>
                                    </div>  */}
                                    <div className="bot-right float-end">
                                        <Link href="#">calculate <br/>taxes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="dashboardtabwrap">
                    <div className="dashboardtab generalInfo">
                        <ul>
                            <li className={activeTab === 'manageannouncements' ? 'active' : ''}>
                                <Link className='managelink' href="#manageannouncements" onClick={() => handleTabClick('manageannouncements')}>Manage  Announcements</Link>
                                </li>
                            <li className={activeTab === 'createannouncment' ? 'active' : ''}>
                                <Link className='managelink' href="#createannouncment" onClick={() => handleTabClick('createannouncment')}>Create Announcment</Link>
                                </li>
                        </ul>
                    </div>
                    <div className="dash-tabcontent manage-tabcontent">
                        <div className="dashcontent" style={{ display: activeTab === 'manageannouncements' ? 'block' : 'none' }} id="manageannouncements">
                            <ul>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/gallery-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>Manage Gallery</h4>
                                        <p>Manage Gallery</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/policy-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>HR Policy Documents</h4>
                                        <p>HR Policy Documents</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/medical-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>Employee Medical</h4>
                                        <p>Employee Medical</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/gallery-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>Manage Gallery</h4>
                                        <p>Manage Gallery</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/policy-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>HR Policy Documents</h4>
                                        <p>HR Policy Documents</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span className="close-task">close</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                            </ul>
                            <div className="tabspagination">
                                <Link href="#"></Link>
                                <Link href="#"></Link>
                                <Link href="#"></Link>
                                <Link href="#" className="active"></Link>
                            </div>
                        </div>
                        <div className="dashcontent" style={{ display: activeTab === 'createannouncment' ? 'block' : 'none' }} id="createannouncment">
                            <ul>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/policy-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>HR Policy Documents</h4>
                                        <p>HR Policy Documents</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/medical-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>Employee Medical</h4>
                                        <p>Employee Medical</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/gallery-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>Manage Gallery</h4>
                                        <p>Manage Gallery</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span>active</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <div className="content-img  float-start">
                                        <Image  src="/images/policy-icon-2.png" width={35} height={24} alt=""/>
                                    </div>
                                    <div className="tab-content float-start">
                                        <h4>HR Policy Documents</h4>
                                        <p>HR Policy Documents</p>
                                    </div>
                                    <div className="float-end content-right">
                                        <div className="status-section">
                                            <span className="close-task">close</span>
                                            <em>Sept 12, 2020</em>
                                        </div>
                                        <GIDropdown/>
                                    </div>
                                </li>
                            </ul>
                            <div className="tabspagination">
                                <Link href="#"></Link>
                                <Link href="#"></Link>
                                <Link href="#"></Link>
                                <Link href="#" className="active"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
    </>
  )
}

export default Page
