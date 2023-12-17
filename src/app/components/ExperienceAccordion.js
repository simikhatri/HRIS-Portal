"use client"
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import QDropdown from './QDropdown';
import Link from 'next/link';

const ExperienceAccordion = () => {
    const [openSection, setOpenSection] = useState(0);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? 0 : index);
    };
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-head" id="headingOne">
                        <h2 lassName={`mb-0 ${openSection === 0 ? 'collapsed' : ''}`} onClick={() => toggleSection(0)}>
                            Work Experience
                        </h2>
                    </div>

                    <div id="collapseOne" className={`collapse ${openSection === 0 ? 'show' : ''}`} 
                    aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="table-wrap table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Position Held</th>
                                            <th>Reporting To</th>
                                            <th>Company Name</th>
                                            <th>Joining Date</th>
                                            <th>Leaving Date</th>
                                            <th>Reason for Leaving</th>
                                            <th>Remarks</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" onfocus="(this.type='date')" /></td>
                                            <td><input type="text" onfocus="(this.type='date')" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td>
                                                <Link href="#" className="blue-btn" title="add"><FaPlusCircle size={20}/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Designer</td>
                                            <td>Team Lead</td>
                                            <td>XYZ Solutions</td>
                                            <td>10/10/2010</td>
                                            <td>10/10/2015</td>
                                            <td>Relocate</td>
                                            <td>Lorem ipsum ....</td>
                                            <td>
                                                <QDropdown/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Designer</td>
                                            <td>Team Lead</td>
                                            <td>XYZ Solutions</td>
                                            <td>10/10/2010</td>
                                            <td>10/10/2015</td>
                                            <td>Relocate</td>
                                            <td>Lorem ipsum ....</td>
                                            <td>
                                                <QDropdown/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-head" id="headingtwo">
                        <h2 className={`mb-0 ${openSection === 1 ? 'collapsed' : ''}`} onClick={() => toggleSection(1)}>
                            Project Experience
                        </h2>
                    </div>

                    <div id="collapsetwo" className={`collapse ${openSection === 1 ? 'show' : ''}`} 
                    aria-labelledby="headingtwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="table-wrap table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Project Name</th>
                                            <th>Client</th>
                                            <th>Industry</th>
                                            <th>Role</th>
                                            <th>Duration From</th>
                                            <th>Duration To</th>
                                            <th>Project Brief</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" onfocus="(this.type='date')" /></td>
                                            <td><input type="text" onfocus="(this.type='date')" /></td>
                                            <td><input type="text" /></td>
                                            <td>
                                                <Link href="#" className="blue-btn" title="add"><FaPlusCircle size={20}/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ahamson Portal</td>
                                            <td>Ahamson</td>
                                            <td>IT</td>
                                            <td>Designer</td>
                                            <td>10/10/2020</td>
                                            <td>20/10/2020</td>
                                            <td>Create Portal</td>
                                            <td>
                                                <QDropdown/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ahamson Portal</td>
                                            <td>Ahamson</td>
                                            <td>IT</td>
                                            <td>Designer</td>
                                            <td>10/10/2020</td>
                                            <td>20/10/2020</td>
                                            <td>Create Portal</td>
                                            <td>
                                                <QDropdown/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceAccordion
