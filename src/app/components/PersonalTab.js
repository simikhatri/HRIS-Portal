"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const PersonalTab = () => {
    const [activeTab, setActiveTab] = useState('sideteam');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

    return (
        <>
            <div className="sidebartabs">
                <div className="row">
                    <div className="col-6">
                        <Link href="#sideteam" onClick={() => handleTabClick('sideteam')}
              className={activeTab === 'sideteam' ? 'active' : ''}>
                            <span className="team-icon"></span>
                            <em>Team</em>
                            <i><span>3</span></i>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link href="#sideproject" onClick={() => handleTabClick('sideproject')}
              className={activeTab === 'sideproject' ? 'active' : ''}>
                            <span className="project-icon"></span>
                            <em>Projects</em>
                            <i><span>3</span></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sidetab-content">
                <div className="sidecontent" id="sideteam" style={{ display: activeTab === 'sideteam' ? 'block' : 'none' }}>
                    <ul>
                        <li>
                            <Link className="nameLink" href="#">
                                <div className="team-img">
                                    <Image src="/images/01.jpg" width={100} height={24} alt="" />
                                </div>
                                <span>Naveed Mirza</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nameLink" href="#">
                                <div className="team-img">
                                    <Image src="/images/01.jpg" width={100} height={24} alt="" />
                                </div>
                                <span>Naveed Mirza</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nameLink" href="#">
                                <div className="team-img">
                                    <Image src="/images/01.jpg" width={100} height={24} alt="" />
                                </div>
                                <span>Naveed Mirza</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidecontent" id="sideproject" style={{ display: activeTab === 'sideproject' ? 'block' : 'none' }}>
                    <ul>
                        <li>
                            <Link className="nameLink" href="#">
                                <div className="team-img">
                                    <Image src="/images/01.jpg" width={100} height={24} alt="" />
                                </div>
                                <span>Ahamson Portal</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nameLink" href="#">
                                <div className="team-img">
                                    <Image src="/images/01.jpg" width={100} height={24} alt="" />
                                </div>
                                <span>LogicPowered</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nameLink" href="#">
                                <div className="team-img">
                                    <Image src="/images/01.jpg" width={100} height={24} alt="" />
                                </div>
                                <span>Ahamson Portal</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PersonalTab
