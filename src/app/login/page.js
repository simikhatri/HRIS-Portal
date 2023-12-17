import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="login-page">

                {/* Header start */}
                <header id="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="logo">
                                    <Link href="index.html"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header end  */}

                {/* Main Area start  */}
                <div id="main-wrap">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="login-heading">
                                    <h3>Welcome</h3>
                                    <p>Please login to use our portal.</p>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="login-formwrap">
                                    <div className="login-form">
                                        <form action="" method="">
                                            <div className="input-group">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="input-group">
                                                <input type="password" placeholder="Password" />
                                            </div>
                                            <div className="remember-forgot">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="round">
                                                            <input type="checkbox" id="checkbox" />
                                                            <label for="checkbox"><i>Remember me</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <Link href="#">Forgot password?</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Area Ends */}
            </div>
        </>
    )
}

export default page
