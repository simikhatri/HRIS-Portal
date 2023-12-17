import SideCard from "@/app/components/SideCard"
import Link from "next/link"
import QAccordion from "@/app/components/QAccordion"

const page = () => {
  return (
    <>
     {/* Main Area start  */}
<div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="generalInfo" style={{textDecoration:"none"}}>general info</Link></li>
                <li className="breadcrumb-item active" aria-current="page">qualification</li>
            </ol>
        </nav>
        <div className="formpage-wrap">
            <div className="row">
                <SideCard/>
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="white-box">
                        <div className="formpage-content tabularview-form">
                            <QAccordion/>
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
{/* Main Area Ends  */}

    </>
  )
}

export default page
