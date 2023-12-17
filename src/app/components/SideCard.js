import React from 'react'
import PersonalTab from './PersonalTab'
import Link from 'next/link'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const SideCard = () => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="white-box sticky-top">
                    <div className="headtop-section">
                        <div className="row">
                            <div className="col">
                                <Link href="#" className="export"></Link>
                            </div>
                            <div className="col">
                                <Link onclick="window.print()" href="#" className="print-btn"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-head">
                        <div className="employeeimg">
                            <Image src="/images/02.jpg" width={100} height={24} alt="" />
                        </div>
                        <h4>Naveed Mirza</h4>
                        <ul className="starrating">
                            <li><FaStar size={15} color="orange" /></li>
                            <li><FaStar size={15} color="orange" /></li>
                            <li><FaStar size={15} color="orange" /></li>
                            <li><FaStar size={15} color="orange" /></li>
                            <li><FaStar size={15} /></li>
                            <li className="rating-value"><span>8.0</span></li>
                        </ul>
                        <h6>Designation</h6>
                    </div>
                    <div className="sidebartabs-wrap">
                        <PersonalTab />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideCard
