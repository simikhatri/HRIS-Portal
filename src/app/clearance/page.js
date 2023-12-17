import React from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link'
import SideCard from '../components/SideCard'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const page = () => {
    return (
    <>
    <Navbar/>
            <div id="main-wrap" class="innerpages">
                <div class="container-fluid">
                    <div class="formpage-wrap">
                        <h2>Clearance</h2>
                        <div class="row">
                            <SideCard/>
                            <div class="col-lg-9 col-md-8 col-sm-6">
                                <div class="white-box mb-4">
                                    <div class="formpage-content pb-1">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <h3 class="mb-3-sm">Employee Information</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Staff Name</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Staff ID</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Job Title</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Grade</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Division</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Department</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Location</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6">
                                                <div class="wrapper">
                                                    <select class="control" required>
                                                        <option></option>
                                                        <option>Resignation</option>
                                                        <option>Termination</option>
                                                        <option>Contract End</option>
                                                        <option>Dismissal</option>
                                                    </select>
                                                    <span class="floating-label">Reason for Separation</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-12">
                                                <div class="wrapper">
                                                    <input class="control" required type="text" onfocus="(this.type='date')" />
                                                    <span class="floating-label">Date of Resignation</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="wrapper">
                                                    <select class="control" required>
                                                        <option></option>
                                                        <option>30 Days</option>
                                                        <option>Immediate</option>
                                                        <option>Other</option>
                                                    </select>
                                                    <span class="floating-label">Notice Period</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Last working day</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="wrapper">
                                                    <input type="text" class="control" required />
                                                    <span class="floating-label">Handing Over Staff Name</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div class="wrapper">
                                                    <input type="email" class="control" required />
                                                    <span class="floating-label">Personal Email</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="wrapper">
                                                    <input type="tel" class="control" required />
                                                    <span class="floating-label">Personal Mob #</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="white-box mb-4">
                                    <div class="formpage-content pb-1">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <h3>Reporting Manager</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <span class="checkbox-span">Work Handover Completed</span>
                                                <input class="checkbox" type="radio" id="reporting-1" name="handover"/>
                                                    <label class="checkbox-label" for="reporting-1">Yes</label>
                                                    <input class="checkbox" type="radio" id="reporting-1-1" name="handover"/>
                                                        <label for="reporting-1-1">No</label>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <span class="checkbox-span">All the Departement Stuff Secured</span>
                                                        <input class="checkbox" type="radio" id="reporting-2" name="stuffsecured"/>
                                                            <label class="checkbox-label" for="reporting-2">Yes</label>
                                                            <input class="checkbox" type="radio" id="reporting-2-2" name="stuffsecured"/>
                                                                <label for="reporting-2-2">No</label>
                                                            </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <span class="checkbox-span">Staff has Nothing Pending & Ok to Release</span>
                                                            <input class="checkbox" type="radio" id="reporting-3" name="pendingrelease"/>
                                                                <label class="checkbox-label" for="reporting-3">Yes</label>
                                                                <input class="checkbox" type="radio" id="reporting-3-3" name="pendingrelease"/>
                                                                    <label for="reporting-3-3">No</label>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <textarea rows="6" cols="15" placeholder="Remarks (If any)"></textarea>
                                                                </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="white-box mb-4">
                                                <div class="formpage-content tabularview-form pb-1">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h3>Admin IT Dept. ( Assets Return Status )</h3>
                                                        </div>
                                                    </div>
                                                    <div class="table-wrap table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th style={{width:"5%"}}>Sr. No</th>
                                                                    <th style={{width:"30%"}}>Particulars</th>
                                                                    <th style={{width:"10%"}}>Qty</th>
                                                                    <th>Asset Serial Number</th>
                                                                    <th>Condition/Remarks</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><input type="text"/></td>
                                                                    <td>
                                                                        <select>
                                                                            <option>Office Space (Work Station, Drawer/Cabinet, Phone set etc)</option>
                                                                            <option>Vehicle/Car</option>
                                                                            <option>Parking Card</option>
                                                                            <optgroup label="Office Equipment:">
                                                                                <option>Laptop/core___, specs, Mouse,keyboard,Bag, Led</option>
                                                                                <option>Printer, Scanner</option>
                                                                                <option>Network Switch,Ups,Internet Device, Sim Card, Usb, External HD,Others Tools</option>
                                                                                <option>Portal login/Password, Email Backup etc</option>
                                                                            </optgroup>
                                                                        </select>
                                                                    </td>
                                                                    <td><input type="number" /></td>
                                                                    <td><input type="text" /></td>
                                                                    <td><input type="text" /></td>
                                                                    <td>
                                                                        <Link href="#" class="blue-btn" title="add"><FaPlusCircle size={20}/></Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>22</td>
                                                                    <td>Parking Card</td>
                                                                    <td>1</td>
                                                                    <td>50</td>
                                                                    <td>-</td>
                                                                    <td>
                                                                        <Link href="#" class="blue-btn" title="remove"><FaMinusCircle size={20} color='red'/></Link>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Vehicle/Car</td>
                                                                    <td>1</td>
                                                                    <td>20</td>
                                                                    <td>Average Condition</td>
                                                                    <td>
                                                                        <Link href="#" class="blue-btn" title="remove"><FaMinusCircle size={20} color='red'/></Link>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h3>Staff has Nothing Pending & Ok to Release</h3>
                                                        </div>
                                                    </div>
                                                    <textarea rows="7" cols="20" placeholder="Remarks (If Any)"></textarea>
                                                </div>
                                            </div>
                                            <div class="white-box mb-4">
                                                <div class="formpage-content pb-1">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h3>HR Dept. ( Staff Card & Insurance Card )</h3>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="wrapper">
                                                                <select class="control" required>
                                                                    <option></option>
                                                                    <option>Pay Roll Field 1</option>
                                                                    <option>Pay Roll Field 2</option>
                                                                    <option>Pay Roll Field 3</option>
                                                                </select>
                                                                <span class="floating-label">Pay Roll Fieldes</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="wrapper">
                                                                <select class="control" required>
                                                                    <option></option>
                                                                    <option>Terminated</option>
                                                                    <option>Terminated</option>
                                                                    <option>Terminated</option>
                                                                </select>
                                                                <span class="floating-label">Employee Profile Status</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="wrapper">
                                                                <input class="control" required type="text" onfocus="(this.type='date')" />
                                                                <span class="floating-label">Position Entry Date</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="wrapper">
                                                                <input class="control" required type="text" onfocus="(this.type='date')" />
                                                                <span class="floating-label">Position End Date</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="white-box mb-4">
                                                <div class="formpage-content pb-4">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h3>Finance Department</h3>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="wrapper">
                                                                <input type="text" class="control" required />
                                                                <span class="floating-label">Staff Name</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="wrapper">
                                                                <input type="text" class="control" required />
                                                                <span class="floating-label">Staff ID</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="wrapper">
                                                                <input type="text" class="control" required />
                                                                <span class="floating-label">Job Title</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-btn">
                                                        <Link href="#" class="blue-btn">Save</Link>
                                                        <Link href="#" class="black-btn">Cancel</Link>
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

                    export default page
