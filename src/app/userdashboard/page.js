import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ACarousel from '../components/ACarousel'

const page = () => {
  return (
    <>
      {/* Main Area start  */}
<div id="main-wrap">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-8 col-md-7">
                <div className="content-section userdashboard">
                    <h2>My Home</h2>
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Job Info</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-11.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em>5</em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">My tasks</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Portfolio</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-12.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em><Image src="/images/icon-5.png" width={100} height={24} alt=""/></em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">My profile</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>My Timesheet</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-13.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em><Image src="/images/icon-5.png" width={100} height={24} alt=""/></em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">My calendar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="box-wrap">
                                <h3>Documentation</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-14.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em><Image src="/images/icon-5.png" width={100} height={24} alt=""/></em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">My Info</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-6">
                            <div className="box-wrap">
                                <h3>Attendences</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-7.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em>195<sup>hrs</sup></em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">Working <br/>hours</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="box-wrap">
                                <h3>Teams</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-8.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em>4</em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">Team<br/> details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="box-wrap">
                                <h3>Travel</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-9.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em>0<sup>%</sup></em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">Traveling <br/>Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="box-wrap">
                                <h3>Payroll</h3>
                                <div className="icon-wrap">
                                    <Image src="/images/icon-10.png" width={100} height={24} alt=""/>
                                </div>
                                <div className="box-bot clearfix">
                                    <div className="bot-left float-start">
                                        <span>
                                            <em><Image src="/images/icon-5.png" width={100} height={24} alt=""/></em>
                                        </span>
                                    </div>
                                    <div className="bot-right float-end">
                                        <Link href="#">Employees<br/> Salaries</Link>
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
                    <ACarousel/>
                </div>
                <div className="other-info">
                    <ul>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-1.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Leave Details</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-2.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Gallery</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-3.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Salary Details</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-4.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>HR Policy Documents</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-5.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Tax Details</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-6.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Claims</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-7.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Medical Details</p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <div className="content-img float-start">
                                <Image src="/images/othericon-8.png" width={100} height={24} alt=""/>
                            </div>
                            <div className="tab-content float-end">
                                <p>Recruitment</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
{/*  Main Area Ends  */}
    </>
  )
}

export default page
