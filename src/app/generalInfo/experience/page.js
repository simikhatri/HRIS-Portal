import SideCard from "@/app/components/SideCard"
import ExperienceAccordion from "@/app/components/ExperienceAccordion";

const page = () => {
  return (
    <>
      {/* Main Area start */}
<div id="main-wrap" className="innerpages">
    <div className="container-fluid">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="generalInfo" style={{textDecoration:"none"}}>general info</a></li>
                <li className="breadcrumb-item active" aria-current="page">experience</li>
            </ol>
        </nav>
        <div className="formpage-wrap">
            <div className="row">
                <SideCard/>
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <div className="white-box">
                        <div className="formpage-content tabularview-form">
                            <ExperienceAccordion/>
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
