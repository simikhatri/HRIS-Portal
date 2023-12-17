import Link from 'next/link'
import SideCard from '@/app/components/SideCard'
import Image from 'next/image'

const page = () => {
    return (
        <>
            {/* Main Area start  */}
            <div id="main-wrap" className="innerpages">
                <div className="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="generalInfo" style={{textDecoration:"none"}}>general info</Link> </li>
                            <li className="breadcrumb-item active" aria-current="page">personal</li>
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
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Last Name</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">First Name</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <select className="control" required>
                                                        <option></option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                    </select>
                                                    <span className="floating-label">Gender</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Fathers Name</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">CNIC</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" onfocus="(this.type='date')" />
                                                    <span className="floating-label">CNIC Expiry DD/MM/YY</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" onfocus="(this.type='date')" />
                                                    <span className="floating-label">Date of Birth</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Cell Number(s)</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input className="control" required type="tel" />
                                                    <span className="floating-label">Residence phone#</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input className="control" required type="email" />
                                                    <span className="floating-label">Personal Email</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input type="text" className="control" required />
                                                    <span className="floating-label">Permanent Address</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" />
                                                    <span className="floating-label">Present Address</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" />
                                                    <span className="floating-label">Passport#</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="wrapper">
                                                    <input className="control" required type="text" onfocus="(this.type='date')" />
                                                    <span className="floating-label">Passport Expiry Date</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="picture-wrapper">
                                                    <div className="wrapper">
                                                        <input className="control" required type="text" onfocus="(this.type='file')" />
                                                        <span className="floating-label">Picture</span>
                                                    </div>
                                                    <div className="picture-wrap">
                                                    <Image src="/images/placehold.png" id="preview" class="img-thumbnail" width={100} height={100} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="picture-wrapper">
                                                    <div className="wrapper">
                                                        <input className="control" required type="text" onfocus="(this.type='file')" />
                                                        <span className="floating-label">Passport Snapshot</span>
                                                    </div>
                                                    <div className="picture-wrap">
                                                    <Image src="/images/placehold.png" id="preview" class="img-thumbnail" width={100} height={100} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="picture-wrapper">
                                                    <div className="wrapper">
                                                        <input className="control" required type="text" onfocus="(this.type='file')" />
                                                        <span className="floating-label">CNIC Snapshot</span>
                                                    </div>
                                                    <div className="picture-wrap">
                                                    <Image src="/images/placehold.png" id="preview" class="img-thumbnail" width={100} height={100} alt=""/>
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
            {/* Main Area Ends  */}
        </>
    )
}

export default page
