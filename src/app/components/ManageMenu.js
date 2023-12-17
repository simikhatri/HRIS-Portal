import Link from 'next/link'
import React from 'react'

const ManageMenu = () => {
    return (
        <>
            <section id="submenu">
                <div className="container-fluid">
                    <div className="inner-nav">
                        <ul>
                            <li><Link className="active nav-link" href="admin-manager.html">Employee</Link></li>
                            <li><Link className="nav-link" href="#">Salaries</Link></li>
                            <li><Link className="nav-link" href="#">Galleries</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManageMenu
