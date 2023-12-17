"use client"
import React, { useState } from 'react';
import { FaPlusCircle} from 'react-icons/fa';
import QDropdown from './QDropdown';
import Link from 'next/link';

const QAccordion = () => {
    const [openSection, setOpenSection] = useState(0);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? 0 : index);
    };

    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-head" id="headingOne">
                        <h2 className={`mb-0 ${openSection === 0 ? 'collapsed' : ''}`} onClick={() => toggleSection(0)}>
                            Education
                            {/* {openSection === 0 ? <FaMinusCircle size={20} /> : <FaPlusCircle size={20} />} */}
                        </h2>
                    </div>
                    <div
                        id="collapseOne"
                        className={`collapse ${openSection === 0 ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                            <div className="table-wrap table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Degree</th>
                                            <th>Institution</th>
                                            <th>Year Completed</th>
                                            <th>Major</th>
                                            <th>Grade</th>
                                            <th>Duration</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <select>
                                                    <option selected></option>
                                                    <option>Master</option>
                                                    <option>Graduation</option>
                                                    <option>Intermediate</option>
                                                </select>
                                            </td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" onfocus="(this.type='date')" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                            <td><input type="number" /></td>
                                            <td>
                                                <Link href="#" className="blue-btn" title="add"><FaPlusCircle size={20} /></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Master</td>
                                            <td>Bahria University</td>
                                            <td>10/10/2010</td>
                                            <td>Major</td>
                                            <td>Grade</td>
                                            <td>4 Years</td>
                                            <td>
                                                <QDropdown />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Master</td>
                                            <td>Bahria University</td>
                                            <td>10/10/2010</td>
                                            <td>Major</td>
                                            <td>Grade</td>
                                            <td>4 Years</td>
                                            <td>
                                                <QDropdown />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-head" id="headingTwo">
                        <h2 className={`mb-0 ${openSection === 1 ? 'collapsed' : ''}`} onClick={() => toggleSection(1)}>
                            Training
                            {/* {openSection === 1 ? <FaMinusCircle size={20} /> : <FaPlusCircle size={20} />} */}
                        </h2>
                    </div>
                    <div
                        id="collapseTwo"
                        className={`collapse ${openSection === 1 ? 'show' : ''}`}
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                         <div className="card-body">
                                        <div className="table-wrap table-responsive">
                                            <table className="table">
                                              <thead>
                                                <tr>
                                                  <th>Name</th>
                                                  <th>Institution</th>
                                                  <th>Year Completed</th>
                                                  <th>Category</th>
                                                  <th>Validity</th>
                                                  <th>Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text" onfocus="(this.type='date')"/></td>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text"/></td>
                                                  <td>
                                                    <Link href="#" className="blue-btn" title="add"><FaPlusCircle size={20}/></Link>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </div>
                                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-head" id="headingThree">
                        <h2 className={`mb-0 ${openSection === 2 ? 'collapsed' : ''}`} onClick={() => toggleSection(2)}>
                            Certification
                            {/* {openSection === 2 ? <FaMinusCircle size={20} /> : <FaPlusCircle size={20} />} */}
                        </h2>
                    </div>
                    <div
                        id="collapseThree"
                        className={`collapse ${openSection === 2 ? 'show' : ''}`}
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body">
                                        <div className="table-wrap table-responsive">
                                            <table className="table">
                                              <thead>
                                                <tr>
                                                  <th>Name</th>
                                                  <th>Institution</th>
                                                  <th>Year Completed</th>
                                                  <th>Category</th>
                                                  <th>Validity</th>
                                                  <th>Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text" onfocus="(this.type='date')"/></td>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text"/></td>
                                                  <td>
                                                    <Link href="#" className="blue-btn" title="add"><FaPlusCircle size={20}/></Link>
                                                  </td>
                                                </tr>
                                                <tr>
                                                    <td>Certificate Name</td>
                                                    <td>Bahria University</td>
                                                    <td>10/10/2010</td>
                                                    <td>Category</td>
                                                    <td>Validity</td>
                                                    <td>
                                                    <QDropdown/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Certificate Name</td>
                                                    <td>Bahria University</td>
                                                    <td>10/10/2010</td>
                                                    <td>Category</td>
                                                    <td>Validity</td>
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

export default QAccordion
