import Image from "next/image";
import SideCard from "@/app/components/SideCard";

const page = () => {
  return (
    <>
       {/* Main Area start */}
<div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="generalInfo" style={{textDecoration:"none"}}>general info</a></li>
                <li className="breadcrumb-item active" aria-current="page">salary bank</li>
            </ol>
        </nav>
        <div className="formpage-wrap">
            <div className="row">
               <SideCard/>
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="white-box">
                        <div className="formpage-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Salary Breakup</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Bank Name 1</option>
                                            <option>Bank Name 2</option>
                                            <option>Bank Name 3</option>
                                        </select>
                                        <span className="floating-label">Bank Name</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Branch Name 1</option>
                                            <option>Branch Name 2</option>
                                            <option>Branch Name 3</option>
                                        </select>
                                        <span className="floating-label">Branch Name</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Bank Account</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Account Status</span>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">NTN</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-btn">
                                <a href="#" className="blue-btn">Save</a>
                                <a href="#" className="black-btn">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 {/* Main Area Ends */}
    </>
  )
}

export default page
