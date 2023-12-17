import Link from "next/link"
import SideCard from "@/app/components/SideCard"
import { FaPlusCircle } from 'react-icons/fa';
import QDropdown from "@/app/components/QDropdown";

const page = () => {
  return (
    <>
       {/* Main AreLink start  */}
<div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="generalInfo" style={{ textDecoration: "none" }}>general info</Link></li>
                <li className="breadcrumb-item active" aria-current="page">references</li>
            </ol>
        </nav>
        <div className="formpage-wrap">
            <div className="row">
              <SideCard/>
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="white-box">
                        <div className="formpage-content tabularview-form">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                  <div className="card-head" id="headingOne">
                                    <h2 style={{background: "none"}} className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        References
                                    </h2>
                                  </div>
                              
                                  <div  className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="table-wrap table-responsive">
                                            <table className="table">
                                              <thead>
                                                <tr>
                                                  <th>Ref Name</th>
                                                  <th>Occupation</th>
                                                  <th>Phone</th>
                                                  <th>Organization</th>
                                                  <th>Relation</th>
                                                  <th>Actions</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text"/></td>
                                                  <td><input type="tel"/></td>
                                                  <td><input type="text"/></td>
                                                  <td><input type="text"/></td>
                                                  <td>
                                                    <Link href="#" className="blue-btn" title="add"><FaPlusCircle size={20}/></Link>
                                                  </td>
                                                </tr>
                                                <tr>
                                                    <td>Ref Name</td>
                                                    <td>Occupation</td>
                                                    <td>Phone</td>
                                                    <td>Organization</td>
                                                    <td>Relation</td>
                                                    <td>
                                                       <QDropdown/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ref Name</td>
                                                    <td>Occupation</td>
                                                    <td>Phone</td>
                                                    <td>Organization</td>
                                                    <td>Relation</td>
                                                    <td>
                                                    <QDropdown/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ref Name</td>
                                                    <td>Occupation</td>
                                                    <td>Phone</td>
                                                    <td>Organization</td>
                                                    <td>Relation</td>
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
                            <div className="form-btn">
                                <Link href="#" className="blue-btn">Save</Link>
                                <Link href="#" className="black-btn">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Main AreLink Ends  */}

    </>
  )
}

export default page
