import Link from "next/link"
import SideCard from "../../components/SideCard"

const page = () => {
  return (
    <>
     {/* Main Area start  */}
<div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="generalInfo" style={{ textDecoration: "none" }}>general info</Link></li>
                <li className="breadcrumb-item active" aria-current="page">separation</li>
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
                                        <input className="control" required type="text" onfocus="(this.type='date')"/>
                                        <span className="floating-label">Date of Resignation</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="wrapper">
                                        <select className="control" required>
                                            <option></option>
                                            <option>Reason for Leaveing 1</option>
                                            <option>Reason for Leaveing 2</option>
                                            <option>Reason for Leaveing 3</option>
                                        </select>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input className="control" required type="text" onfocus="(this.type='date')"/>
                                        <span className="floating-label">Date of Leaving</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <input type="text" className="control" required/>
                                        <span className="floating-label">Handing Over/Taking Over</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <textarea rows="5" cols="22" placeholder="Remarks"></textarea>
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
{/*  Main Area Ends */}
    </>
  )
}

export default page
